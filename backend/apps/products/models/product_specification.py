from django.db import models
from apps.core.models import BaseModel


class ProductSpecification(BaseModel):
    """
    Model for product specifications
    """
    weight = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True, verbose_name='Peso')
    dimensions = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Dimensões')
    tag = models.CharField(max_length=50, unique=True, verbose_name='Etiqueta')

    def __str__(self):
        return self.tag

    class Meta:
        verbose_name = 'Especificações do Produto'
        verbose_name_plural = 'Especificações dos Produtos'
