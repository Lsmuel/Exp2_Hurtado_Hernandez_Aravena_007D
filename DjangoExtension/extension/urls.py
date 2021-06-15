from django.urls import path
from django.urls.resolvers import URLPattern
from .views import registro
from .views import zapatillas

urlpatterns=[
    path('', registro, name="registro"),
    
]
urlpatterns=[
    path('', zapatillas, name="zapatillas"),
]