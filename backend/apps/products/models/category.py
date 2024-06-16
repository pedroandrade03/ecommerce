from django.db import models
from apps.core.models import BaseModel


class Category(BaseModel):
    name = models.CharField(max_length=255, unique=True, verbose_name='Nome')
    image = models.ImageField(
        upload_to='categories', blank=True, null=True, verbose_name='Imagem')
    slug = models.SlugField(max_length=255, unique=True,
                            verbose_name='Slug', help_text='Url amigável por exemplo sem-gluten')
    description = models.TextField(
        blank=True, null=True, verbose_name='Descrição')
    parent = models.ForeignKey(
        'self', on_delete=models.CASCADE, null=True, blank=True, related_name='children', verbose_name='Categoria Pai')
    background_color = models.CharField(
        max_length=50, blank=True, null=True, verbose_name='Cor de fundo', help_text='Cor Tailwind CSS')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"
