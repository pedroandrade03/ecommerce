from django.db import models
from apps.core.models import BaseModel


class ProductSpecification(BaseModel):
    """
    Model for product specifications
    """
    product = models.ForeignKey(
        'Product', on_delete=models.CASCADE, related_name='specifications', verbose_name='Produto')
    weight = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True, verbose_name='Peso')
    dimensions = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Dimensões')
    tag = models.CharField(max_length=50, unique=True,
                           verbose_name='Etiqueta', help_text='Ex: Peso, Dimensões (P, M, G)')

    def __str__(self):
        return self.tag

    class Meta:
        verbose_name = 'Especificações do Produto'
        verbose_name_plural = 'Especificações dos Produtos'
