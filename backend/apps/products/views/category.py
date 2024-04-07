from rest_framework.decorators import action
from rest_framework import viewsets, response
from django.db.models import Count

from apps.products import models, serializers
from apps.core import views


class CategoryViewSet(views.BaseViewSet):
    '''View for manage ticket APIs.'''
    serializer_class = serializers.CategorySerializer
    queryset = models.Category.objects.all()
    ordering_fields = ['products', 'created_at', 'updated_at']

    def get_ordered_queryset(self, queryset, request):
        """
        Order queryset based on query params
        """
        ordering = request.query_params.get('ordering', None)

        if ordering == 'product_quantity' or ordering == '-product_quantity':
            return queryset.annotate(product_quantity=Count('products')).order_by(ordering)
        return super().get_ordered_queryset(queryset, request)

    @action(detail=False, methods=['get'], url_path='featured')
    def list_by_product_count(self, request):
        """
        List categories by product count.
        """
        categories = self.queryset
        categories_ordered = self.get_ordered_queryset(categories, request)

        serializer = self.get_serializer(categories_ordered, many=True)
        return response.Response(serializer.data)
