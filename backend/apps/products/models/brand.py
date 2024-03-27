from django.db import models
from core.models import BaseModel


class Brand(BaseModel):
    """
    Model for brands	
    """
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Marca"
        verbose_name_plural = "Marcas"