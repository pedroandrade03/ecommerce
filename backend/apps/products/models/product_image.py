from django.db import models
from apps.core.models import BaseModel


class ProductImage(models.Model):
    """
    Model for product images
    """
    product = models.ForeignKey(
        'Product', on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='product_images/')
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.caption or self.image.url

    class Meta:
        verbose_name = 'Imagem do Produto'
        verbose_name_plural = 'Imagens dos Produtos'
