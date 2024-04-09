from django.db import models
from apps.core.models import BaseModel


class ProductReview(BaseModel):
    product = models.ForeignKey(
        'Product', on_delete=models.CASCADE, related_name='specifications', verbose_name='Produto')
    name = models.CharField(max_length=255, verbose_name='Nome do Usuário')
    title_comment = models.CharField(max_length=50, verbose_name='Título do Comentário')
    comment = models.TextField(max_length=255, blank=True, null=True, verbose_name='Comentário')
    rating = models.PositiveSmallIntegerField(max_digits=1, max_value=5, verbose_name='Classificação')
    
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Avaliação do Produto'
        verbose_name_plural = 'Avaliações dos Produtos'