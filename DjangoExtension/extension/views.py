from django.shortcuts import render, redirect
from .forms import ZapatillaForm, RopaForm
# Create your views here.
def registro(request):
    return render (request, 'Registro.html')
def zapatillas(request):
    return render (request, 'zapatillas.html')
def productos(request):
    return render (request, 'form_crearZapatilla.html')

def form_zapatilla(request):
    if request.method =='POST':
        zapatilla_form=ZapatillaForm(request.POST)
        if zapatilla_form.is_valid():
            zapatilla_form.save()
            return redirect('zapatillas')
    else:
        zapatilla_form=ZapatillaForm()
    return render(request, 'form_crearZapatilla.html', {'zapatilla_form': zapatilla_form})

def form_Ropa(request):
    if request.method =='POST':
        ropa_form=RopaForm(request.POST)
        if ropa_form.is_valid():
            ropa_form.save()
            return redirect('zapatillas')
    else:
        ropa_form=RopaForm()

    return render(request, 'form_crearZapatilla.html', {'ropa_form': ropa_form})