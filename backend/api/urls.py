from django.urls import path
from .views import UserList, UserDetailUpdateView, ProfilePicture
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('users/', UserList.as_view()),
    path('users/detail/', UserDetailUpdateView.as_view()),
    path('users/picture/', ProfilePicture.as_view()),
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
]
