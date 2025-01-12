from django.urls import path
from .views import *

urlpatterns = [
    path('api/contact/', ContactView.as_view(), name='contact'),
]