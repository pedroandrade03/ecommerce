from django.db import models
from apps.core.models import BaseModel
from django.core.validators import MinValueValidator, MaxValueValidator


class Product(BaseModel):
    """
    Model for products
    """
    name = models.CharField(max_length=255, verbose_name='Nome')
    slug = models.SlugField(
        max_length=255, unique=True,
        verbose_name='Slug', help_text='Url amigável. Por exemplo: pao-integral')
    description = models.TextField(verbose_name='Descrição')
    price = models.DecimalField(
        max_digits=10, decimal_places=2, verbose_name='Preço')
    stock_quantity = models.IntegerField(
        verbose_name='Quantidade em estoque', default=0)
    is_active = models.BooleanField(default=True, verbose_name='Ativo')
    is_popular = models.BooleanField(default=False, verbose_name='Popular')
    brand = models.ForeignKey(
        'Brand', on_delete=models.CASCADE, related_name='products', verbose_name='Marca')
    categories = models.ManyToManyField(
        "Category", blank=True, related_name='products', verbose_name='Categorias')
    expiration_at = models.DateField(
        blank=True, null=True, verbose_name='Data de validade')
    review = models.PositiveSmallIntegerField(blank=True, null=True, verbose_name='Avaliação', validators=[
                                              MinValueValidator(1), MaxValueValidator(5)])

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Produto'
        verbose_name_plural = 'Produtos'
