from django.db import models
from apps.core.models import BaseModel


class Product(BaseModel):
    """
    Model for products
    """
    name = models.CharField(max_length=255, verbose_name='Nome')
    description = models.TextField(verbose_name='Descrição')
    price = models.DecimalField(
        max_digits=10, decimal_places=2, verbose_name='Preço')
    stock_quantity = models.IntegerField(verbose_name='Quantidade em estoque')
    is_active = models.BooleanField(default=True, verbose_name='Ativo')
    brand = models.ForeignKey(
        'Brand', on_delete=models.CASCADE, related_name='products', verbose_name='Marca')
    especifications = models.OneToOneField(
        'ProductSpecification', on_delete=models.CASCADE, related_name='product', verbose_name='Especificações')
    categories = models.ManyToManyField(
        "Category", blank=True, related_name='products', verbose_name='Categorias')
    expiration_at = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Produto'
        verbose_name_plural = 'Produtos'
