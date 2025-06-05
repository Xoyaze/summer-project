from .serializers import UserSerializer
from .models import CustomUser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

class UserList(APIView):
    
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    def get(self, request):
        users = CustomUser.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class ProfilePicture(APIView):

    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user = request.user
        profile_picture = request.FILES.get("profile_picture")

        if not profile_picture:
            return Response({"error": "No image provided."}, status=status.HTTP_400_BAD_REQUEST)

        user.profile_image = profile_picture
        user.save()

        return Response({"message": "Profile picture updated successfully."}, status=status.HTTP_200_OK)
    

class UserDetailUpdateView(APIView):

    permission_classes = [IsAuthenticated]  

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def post(self, request):
        user = request.user
        username = request.data.get("username")
        password = request.data.get("password")

        if username:
            user.username = username

        if password:
            try:
                validate_password(password, user=user)
                user.set_password(password)
            except ValidationError as e:
                return Response({"password": e.messages}, status=status.HTTP_400_BAD_REQUEST)

        user.save()
        return Response({"message": "User details updated successfully."}, status=status.HTTP_200_OK)