from django import forms
from django.forms import ModelForm, widgets
from .models import Zapatillas, Ropa
from django.forms.models import ModelChoiceField
from django.forms.widgets import Widget

class ZapatillaForm(forms.ModelForm):
    class Meta:
        model = Zapatillas
        fields = ['idZapatilla', 'tallaZapatilla']

        
        labels={
            'idZapatilla': 'id-Zapatilla:',
            'tallaZapatilla': 'talla-Zapatilla:',

            }

        widgets={

            'idZapatilla': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'id': 'idZapatilla',
                    'placeholder': 'Ingrese id zapatilla'
                }
            ),
            'tallaZapatilla': forms.TextInput(
                attrs={
                        'class': 'form-control',
                        'id': 'tallaZapatilla',
                        'placeholder': 'Ingrese talla de zapatilla'

                }
            )
        
        }

class RopaForm(forms.ModelForm):
    class Meta:
        model = Ropa
        fields = ['idRopa', 'tallaRopa']

        labels={
            'idRopa': 'id_Ropa',
            'tallaRopa': 'talla_Ropa',
        }

        widgets={
            'idRopa': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'id': 'idRopa',
                    'placeholder': 'Ingrese id ropa'
                }
            ),
            'tallaRopa': forms.TextInput(
                attrs={
                        'class': 'form-control',
                        'id': 'tallaRopa',
                        'placeholder': 'Ingrese talla de ropa'

                }
            )
        
        }
