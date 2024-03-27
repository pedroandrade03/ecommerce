from rest_framework import (
    viewsets,
    mixins
)

from apps.products import models, serializers


class CategoryViewSet(viewsets.ModelViewSet):
    '''View for manage ticket APIs.'''
    serializer_class = serializers.CategorySerializer
    queryset = models.Category.objects.all()
    ordering_fields = ['products', 'created_at', 'updated_at']
