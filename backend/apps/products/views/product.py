from rest_framework.decorators import action
from rest_framework import viewsets, status, response
from drf_spectacular.utils import extend_schema

from apps.products import models, serializers
from apps.core import views


class ProductViewSet(views.BaseViewSet):
    '''View for manage ticket APIs.'''
    serializer_class = serializers.ProductSerializer
    queryset = models.Product.objects.all()
    ordering_fields = ['price', 'created_at', 'updated_at', 'name']

    @extend_schema(operation_id='listProductsByCategorySlug')
    @action(detail=False, methods=['get'], url_path=r'category/(?P<category_slug>[\w-]+)')
    def category_by_slug(self, request, category_slug=None):
        """
        Endpoint to get products by category slug
        """
        try:
            category = models.Category.objects.get(slug=category_slug)
        except models.Category.DoesNotExist:
            return response.Response({'message': 'Categoria não encontrada'}, status=status.HTTP_404_NOT_FOUND)

        products = self.queryset.filter(categories=category)
        ordered_products = self.get_ordered_queryset(products, request)
        serializer = self.get_serializer(ordered_products, many=True)
        return response.Response(serializer.data)

    @extend_schema(operation_id='listProductsByCategoryId')
    @action(detail=False, methods=['get'], url_path=r'category/(?P<category_id>[\w-]+)')
    def category_by_id(self, request, category_id=None):
        """
        Endpoint to get products by category id
        """
        try:
            category = models.Category.objects.get(id=category_id)
        except models.Category.DoesNotExist:
            return response.Response({'message': 'Categoria não encontrada'}, status=status.HTTP_404_NOT_FOUND)

        products = self.queryset.filter(categories=category)
        ordered_products = self.get_ordered_queryset(products, request)
        serializer = self.get_serializer(ordered_products, many=True)
        return response.Response(serializer.data)

    @extend_schema(operation_id='listRecommendedProducts')
    @action(detail=False, methods=['get'])
    def recommended(self, request):
        """
        Endpoint to get recommended products
        """
        products = models.Product.objects.filter(is_popular=True)
        ordered_products = self.get_ordered_queryset(products, request)
        serializer = self.get_serializer(ordered_products, many=True)
        return response.Response(serializer.data)

    @extend_schema(operation_id='listProductsByBrand')
    @action(detail=False, methods=['get'], url_path=r'brand/(?P<brand_slug>[\w-]+)')
    def brand(self, request, brand_slug=None):
        """
        Endpoint to get products by brand
        """
        try:
            brand = models.Brand.objects.get(slug=brand_slug)
        except models.Brand.DoesNotExist:
            return response.Response({'message': 'Marca não encontrada'}, status=status.HTTP_404_NOT_FOUND)

        products = self.queryset.filter(brand=brand)
        serializer = self.get_serializer(products, many=True)
        return response.Response(serializer.data)

    # @action(detail=False, methods=['get'], url_path='popular')
    # def popular(self, request):
    #     """
    #     Filtra produtos populares baseado em critérios específicos.
    #     """
    #     on_sale = request.query_params.get('on_sale')
    #     special_diet = request.query_params.get('special_diet')
    #     bulk = request.query_params.get('bulk')

    #     queryset = self.get_queryset()

    #     if on_sale:
    #         queryset = queryset.filter(on_sale=True)
    #     if special_diet:
    #         queryset = queryset.filter(special_diet=True)
    #     if bulk:
    #         queryset = queryset.filter(bulk=True)

    #     serializer = self.get_serializer(queryset, many=True)
    #     return response.Response(serializer.data)
