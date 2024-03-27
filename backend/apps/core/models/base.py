from django.db import models
import uuid


class BaseModel(models.Model):
    """
    Base model for all models in the application
    """
    id = models.UUIDField(
        default=uuid.uuid4, editable=False, unique=True, primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ['-created_at']

    def __str__(self):
        return str(self.id)
