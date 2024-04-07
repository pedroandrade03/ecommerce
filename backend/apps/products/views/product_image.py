from rest_framework import viewsets

from apps.products import models, serializers
from apps.core import views


class ProductImageViewSet(views.BaseViewSet):
    '''View for manage ticket APIs.'''
    serializer_class = serializers.ProductImageSerializer
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    queryset = models.ProductImage.objects.all().order_by('created_at')
