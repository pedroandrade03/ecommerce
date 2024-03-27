from rest_framework import (
    viewsets,
    mixins
)

from apps.products import models, serializers


class ProductImageViewSet(viewsets.ModelViewSet):
    '''View for manage ticket APIs.'''
    serializer_class = serializers.ProductImageSerializer
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    queryset = models.ProductImage.objects.all().order_by('created_at')
