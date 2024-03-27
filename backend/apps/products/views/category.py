from rest_framework import (
    viewsets,
    mixins
)

from apps.products import models, serializers


class CategoryViewSet(viewsets.ModelViewSet):
    '''View for manage ticket APIs.'''
    serializer_class = serializers.CategorySerializer
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    queryset = models.Category.objects.all().order_by('created_at')
