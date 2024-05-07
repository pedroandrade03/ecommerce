from rest_framework import serializers
from apps.products import models


class ProductSpecificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductSpecification
        fields = ('id', 'name', 'title_comment', 'comment', 'rating')
