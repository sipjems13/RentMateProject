🏠 RentMate
RentMate is a web-based property rental management system designed to simplify the process of listing, managing, and renting properties. It connects property owners and tenants in a secure, efficient, and transparent way.

Landlords can list available rental units, while tenants can browse properties, apply, and manage their rental agreements online. RentMate aims to make property management easier, faster, and more accessible.

🌟 Features
🏡 User Roles: Landlords and Tenants
📋 Property Listings: Landlords can post property details (location, price, amenities, availability)
🔍 Property Search & Booking: Tenants can search for available properties and send rental requests
💬 Communication: In-app messaging between landlords and tenants
🔒 Authentication: Secure login and signup for verified users
📊 Rental Management: View, update, or remove property listings and applications
💰 Payment Tracking: Record and monitor rent payments
📧 Notifications: Email alerts for booking confirmations, payments, and updates

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Django
Database: MySQL (or SQLite for development)
Authentication: Email-based signup/login

## Setup Instructions

### 1. Install Django

First, install Django if you haven't already:

```bash
pip install -r requirements.txt
```

Or directly:

```bash
pip install Django
```

### 2. Run Database Migrations

```bash
python manage.py migrate
```

### 3. Create a Superuser

```bash
python manage.py createsuperuser
```

Follow the prompts to create a username and password.

### 4. Run the Development Server

```bash
python manage.py runserver
```

## Usage

Once the server is running, navigate to:

- **Login Page**: http://127.0.0.1:8000/login/
- **Home Page**: http://127.0.0.1:8000/home/ (requires login)
- **Logout**: http://127.0.0.1:8000/logout/
- **Admin Panel**: http://127.0.0.1:8000/admin/

## Features

### Authentication
- ✅ Custom login form with username and password
- ✅ Authentication using Django's built-in auth system
- ✅ Login required decorator for protected pages
- ✅ Automatic redirect after login/logout
- ✅ Error messages for invalid credentials
- ✅ Prevents logged-in users from accessing login page

### UI/UX Enhancements
- 🎨 Modern gradient design with smooth animations
- 🔐 Password visibility toggle
- ⚡ Loading states on form submission
- 📱 Fully responsive design (mobile-friendly)
- ⌨️ Keyboard shortcuts (Ctrl+L to logout)
- 🕐 Real-time clock display
- 📊 Animated dashboard statistics
- 🎯 Interactive dashboard cards
- 💫 Smooth transitions and hover effects
- 🌈 Beautiful color schemes and shadows

### JavaScript Features
- Auto-hide error messages
- Form validation
- Dynamic greeting based on time of day
- Animated number counters
- Confirmation dialogs
- Console logging for debugging

## Testing

1. Start the server: `python manage.py runserver`
2. Go to http://127.0.0.1:8000/login/
3. Log in with the superuser credentials you created
4. You'll be redirected to the home page
5. Click "Logout" to log out and return to the login page
