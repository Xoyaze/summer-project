from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username','password', 'role', 'profile_image']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, vaidated_data):
        user = CustomUser.objects.create_user(**vaidated_data)
        return user