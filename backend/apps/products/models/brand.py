from django.db import models
from apps.core.models import BaseModel


class Brand(BaseModel):
    """
    Model for brands	
    """
    name = models.CharField(max_length=255, unique=True, verbose_name='Nome')
    slug = models.SlugField(max_length=255, unique=True,
                            verbose_name='Slug', help_text='Url amigável por exemplo vem-da-terra')
    description = models.TextField(
        blank=True, null=True, verbose_name='Descrição')

    def __str__(self):
        return self.slug or self.name

    class Meta:
        verbose_name = "Marca"
        verbose_name_plural = "Marcas"
