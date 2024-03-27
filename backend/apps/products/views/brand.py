from rest_framework import (
    viewsets,
    mixins
)

from apps.products import models, serializers


class BrandViewSet(viewsets.ModelViewSet):
    '''View for manage ticket APIs.'''
    serializer_class = serializers.BrandSerializer
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    queryset = models.Brand.objects.all().order_by('created_at')
