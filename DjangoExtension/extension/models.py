from django.db import models

# Create your models here.

class Zapatillas(models.Model):
    idZapatilla = models.IntegerField(primary_key=True, verbose_name='Id de Zapatilla')
    tallaZapatilla = models.CharField(max_length=5, verbose_name='Talla Zapatilla')
    def __str__(self):
        return(self.tallaZapatilla)

class Ropa(models.Model):
    idRopa = models.IntegerField(primary_key=True, verbose_name='Id de Ropa')
    tallaRopa = models.CharField(max_length=5, verbose_name='Talla Ropa')
    def __str__(self):
        return(self.tallaRopa)