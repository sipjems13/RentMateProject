from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Landlord
import logging

# Initialize logger
logger = logging.getLogger(__name__)

# Mock data for users
MOCK_USERS = {
    "landlord": {"email": "landlord@rentmate.com", "password": "password"},
    "tenant": {"email": "tenant@rentmate.com", "password": "password"},
}

def landlord_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        if email == MOCK_USERS["landlord"]["email"] and password == MOCK_USERS["landlord"]["password"]:
             return redirect('home')  # Redirect to dashboard


        landlord = Landlord.objects.get(email=email)
        if landlord.password == password:
            return redirect('home') # Redirect to dashboard
        messages.error(request, 'Invalid Credentials')
        logger.warning(f"Failed landlord login attempt with email: {email}")

    return render(request, 'logins/landlord-login.html')

def tenant_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        if email == MOCK_USERS["tenant"]["email"] and password == MOCK_USERS["tenant"]["password"]:
            return redirect('home')  # Redirect to dashboard
        else:
            messages.error(request, 'Invalid credentials for tenant.')
    return render(request, 'logins/tenant-login.html')

def index(request):
    return render(request, 'index.html')  # Render the main landing page

def landlord_register(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        address = request.POST.get('address')
        phone_number = request.POST.get('phone_number')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        
        # Validate passwords match
        if password != confirm_password:
            messages.error(request, 'Passwords do not match.')
            return render(request, 'logins/landlord-register.html')

        # Checks if email exits
        if Landlord.objects.filter(email=email).exists():
            messages.error(request, 'Email already registered.')
            return render(request, 'logins/landlord-register.html')

        landlord = Landlord(
            email=email,
            first_name=first_name,
            last_name=last_name,
            address=address,
            phone_number=phone_number,
            password=password,
        )
        landlord.save()

        # Here you would typically create a new user in the database
        # For now, we'll just show a success message
        messages.success(request, 'Registration successful! Please login.')
        logger.info(f"New landlord registered: {first_name} {last_name}")
        return redirect('landlord_login')
    
    return render(request, 'logins/landlord-register.html')

