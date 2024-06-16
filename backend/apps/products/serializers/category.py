from rest_framework import serializers
from apps.products import models


class CategorySerializer(serializers.ModelSerializer):
    itemCount = serializers.SerializerMethodField()
    title = serializers.CharField(source='name')

    class Meta:
        model = models.Category
        fields = '__all__'

    def get_itemCount(self, obj):
        return obj.products.count()
