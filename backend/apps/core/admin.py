from django.contrib import admin


class AdminBase(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at', 'id')
