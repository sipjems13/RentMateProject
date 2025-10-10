from django import forms
from .models import Landlord


class LoginForm(forms.Form):
    username = forms.CharField(max_length=100)
    password = forms.CharField(widget=forms.PasswordInput)

class LandlordRegisterForm(forms.ModelForm):
    confirm_password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = Landlord
        fields = ['email', 'first_name', 'last_name', 'address', 'phone_number', 'password']
        widgets = {
            'password': forms.PasswordInput,
        }

        def clean(self):
            cleaned_data = super().clean()
            password = self.cleaned_data.get('password')
            confirm_password = cleaned_data.get('confirm_password')

            if((password and confirm_password) and password != confirm_password):
                raise forms.ValidationError("Passwords don't match")
