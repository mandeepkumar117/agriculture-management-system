# Generated by Django 5.2 on 2025-05-14 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0012_labour_registration_city_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='owner',
            name='city',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
