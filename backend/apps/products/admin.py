from django.contrib import admin

from apps.products import models
from apps.core.admin import AdminBase


@admin.register(models.Brand)
class BrandAdmin(AdminBase):
    list_display = ('name', 'slug', 'created_at', 'updated_at', 'id')
    search_fields = ('name', 'slug', 'id')
    prepopulated_fields = {'slug': ('name',)}


@admin.register(models.Category)
class CategoryAdmin(AdminBase):
    list_display = ('name', 'slug', 'created_at', 'updated_at', 'id')
    search_fields = ('name', 'slug', 'id')
    prepopulated_fields = {'slug': ('name',)}


@admin.register(models.ProductImage)
class ProductImageAdmin(AdminBase):
    list_display = ('product', 'image', 'caption', 'is_primary', 'id')
    search_fields = ('product', 'caption')
    list_filter = ('is_primary',)


@admin.register(models.ProductSpecification)
class ProductSpecificationInline(AdminBase):
    list_display = ('tag', 'weight', 'dimensions', 'id')
    search_fields = ('tag', 'weight', 'dimensions')


class ProductSpecificationInline(admin.TabularInline):
    model = models.ProductSpecification
    extra = 1


class ProductImageInline(admin.TabularInline):
    model = models.ProductImage
    extra = 1


@admin.register(models.Product)
class ProductAdmin(AdminBase):
    list_display = ('name', 'slug', 'brand',
                    'created_at', 'updated_at', 'id')
    search_fields = ('name', 'slug', 'category', 'brand', 'id')
    prepopulated_fields = {'slug': ('name',)}
    inlines = [ProductSpecificationInline, ProductImageInline]
