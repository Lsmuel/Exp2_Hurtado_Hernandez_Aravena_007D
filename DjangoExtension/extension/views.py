from django.shortcuts import render

# Create your views here.
def registro(request):
    return render (request, 'Registro.html')
def zapatillas(request):
    return render (request, 'zapatillas.html')