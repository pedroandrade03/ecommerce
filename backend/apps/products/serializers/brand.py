from rest_framework import serializers
from apps.products import models


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Brand
        fields = '__all__'
