from rest_framework import serializers
from apps.products import models


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductImage
        fields = '__all__'
