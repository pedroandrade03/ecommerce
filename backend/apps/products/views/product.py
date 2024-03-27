from rest_framework import (
    viewsets,
    mixins
)

from apps.products import models, serializers


class ProductViewSet(viewsets.ModelViewSet):
    '''View for manage ticket APIs.'''
    serializer_class = serializers.ProductSerializer
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    queryset = models.Product.objects.all().order_by('created_at')
