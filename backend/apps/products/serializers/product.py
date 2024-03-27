from rest_framework import serializers
from apps.products import models, serializers as product_serializers


class ProductSerializer(serializers.ModelSerializer):
    categories = product_serializers.CategorySerializer(
        many=True, read_only=True)
    brand = product_serializers.BrandSerializer(read_only=True)

    class Meta:
        model = models.Product
        fields = ('id', 'slug', 'name', 'description', 'price',
                  'stock_quantity', 'is_active', 'brand', 'expiration_at', 'specifications', 'categories', 'images')
        read_only_fields = ('id', 'slug', 'expiration_at',
                            'categories', 'specifications', 'images')
