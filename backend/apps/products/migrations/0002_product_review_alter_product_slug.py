# Generated by Django 5.0.3 on 2024-06-16 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='review',
            field=models.PositiveSmallIntegerField(blank=True, null=True, verbose_name='Avaliação'),
        ),
        migrations.AlterField(
            model_name='product',
            name='slug',
            field=models.SlugField(help_text='Url amigável. Por exemplo: pao-integral', max_length=255, unique=True, verbose_name='Slug'),
        ),
    ]
