from django.urls import path
from django.urls.resolvers import URLPattern
from .views import registro

urlpatterns=[
    path('', registro, name="registro"),
]