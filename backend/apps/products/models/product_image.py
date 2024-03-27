from django.db import models
from apps.core.models import BaseModel


class ProductImage(BaseModel):
    """
    Model for product images
    """
    product = models.ForeignKey(
        'Product', on_delete=models.CASCADE, related_name='images', verbose_name='Produto')
    image = models.ImageField(
        upload_to='product_images/', verbose_name='Imagem')
    caption = models.CharField(
        max_length=255, blank=True, null=True, verbose_name='Legenda')
    is_primary = models.BooleanField(
        default=False, verbose_name='Principal')

    def __str__(self):
        return self.caption or self.image.url

    class Meta:
        verbose_name = 'Imagem do Produto'
        verbose_name_plural = 'Imagens dos Produtos'
