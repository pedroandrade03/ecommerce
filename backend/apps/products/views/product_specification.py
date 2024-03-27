from rest_framework import (
    viewsets,
    mixins
)

from apps.products import models, serializers


class ProductSpecificationViewSet(viewsets.ModelViewSet):
    '''View for manage ticket APIs.'''
    serializer_class = serializers.ProductSpecificationSerializer
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    queryset = models.ProductSpecification.objects.all().order_by('created_at')
