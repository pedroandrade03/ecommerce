from rest_framework import serializers
from apps.products import models


class CategorySerializer(serializers.ModelSerializer):
    product_count = serializers.SerializerMethodField()

    class Meta:
        model = models.Category
        fields = '__all__'

    def get_product_count(self, obj):
        return obj.products.count()
