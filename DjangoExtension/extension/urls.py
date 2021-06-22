from django.urls import path
from .views import zapatillas, productos, registro, Ver, mod_zapatilla

urlpatterns=[
    path('', zapatillas, name="zapatillas"),
    path('Registro', registro, name="registro"),
    path('form_zapatilla', productos, name='form_Zapatilla'),
    
]

