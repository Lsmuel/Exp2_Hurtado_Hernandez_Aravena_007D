from django.urls import path
from django.urls.resolvers import URLPattern
from .views import zapatillas, productos, registro

urlpatterns=[
    path('', registro, name="registro"),
    
]
urlpatterns=[
    path('', zapatillas, name="zapatillas"),
]
urlpatterns=[
    path('form_zapatilla', productos, name='form_Zapatilla'),
]