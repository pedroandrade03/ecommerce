from rest_framework import serializers
from apps.products import models


class ProductImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = models.ProductImage
        fields = ('id', 'image', 'caption', 'is_primary')

    def get_image(self, obj):
        if obj.image:
            return "http://127.0.0.1:8000" + obj.image.url
        return None
