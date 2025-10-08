from django.urls import path
from . import views

urlpatterns = [
    path('landlord/', views.landlord_login, name='landlord_login'),
    path('landlord/register/', views.landlord_register, name='landlord_register'),
    path('tenant/', views.tenant_login, name='tenant_login'),
]
