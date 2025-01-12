from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.conf import settings
from .serializers import *

class ContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            # Save the contact message
            contact = serializer.save()
            
            # Send email
            subject = f'New Contact Form Message from {contact.name}'
            message = f"""
            Name: {contact.name}
            Email: {contact.email}
            Message:
            {contact.message}
            """
            
            try:
                send_mail(
                    subject=subject,
                    message=message,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.CONTACT_EMAIL],  # You'll define this in settings.py
                    fail_silently=False,
                )
                return Response(
                    {"message": "Your message has been sent successfully!"},
                    status=status.HTTP_201_CREATED
                )
            except Exception as e:
                return Response(
                    {"error": "Failed to send email. Please try again later."},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)