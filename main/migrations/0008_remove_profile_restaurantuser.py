# Generated by Django 3.0.4 on 2020-04-14 20:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_auto_20200414_1905'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='restaurantUser',
        ),
    ]