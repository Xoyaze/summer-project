from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('buyer', 'Buyer'),
        ('seller', 'Seller'),
        ('admin', 'Admin'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='buyer')
    profile_image = models.ImageField(upload_to='profile_images/', null=True, blank=True)


class Category(models.Model):
    title = models.CharField(max_length=100)
    short_description = models.CharField(max_length=500)
    category_icon = models.ImageField(upload_to='category_icons/', null=True, blank=True)

class Page(models.Model):
    title = models.CharField(max_length=500)
    description = models.CharField(max_length=2000)
    categories = models.ManyToManyField(Category, related_name='pages')
    is_verified = models.BooleanField(default=False)
    contact_email = models.CharField(max_length=200)
    contact_number = models.IntegerField()
    like_count = models.IntegerField(default=0)
    favorite_count = models.IntegerField(default=0)
    review_count = models.IntegerField(default=0)
    

class Review(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    page = models.ForeignKey(Page, models.CASCADE)
    numberOfStars = models.DecimalField(max_digits=2, decimal_places=1)
    reviewText = models.CharField(max_length=1000)

