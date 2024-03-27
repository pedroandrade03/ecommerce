from django.urls import (
    path,
    include,
)
from rest_framework.routers import DefaultRouter

from apps.products import views

router = DefaultRouter()
router.register('brands', views.BrandViewSet)
router.register('categories', views.CategoryViewSet)
router.register('products', views.ProductViewSet)
router.register('product-images', views.ProductImageViewSet)
router.register('product-specifications', views.ProductSpecificationViewSet)

app_name = 'products'

urlpatterns = [
    path('', include(router.urls)),
]
