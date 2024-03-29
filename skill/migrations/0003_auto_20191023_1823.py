# -*- coding: utf-8 -*-
# Generated by Django 1.11.24 on 2019-10-23 10:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skill', '0002_auto_20191023_1354'),
    ]

    operations = [
        migrations.AddField(
            model_name='tec',
            name='img_id',
            field=models.CharField(default=None, max_length=10, verbose_name='图片id'),
        ),
        migrations.AddField(
            model_name='tec',
            name='username',
            field=models.CharField(default=None, max_length=32, verbose_name='用户名'),
        ),
        migrations.AlterField(
            model_name='tec',
            name='like',
            field=models.BooleanField(verbose_name='like/dislike'),
        ),
    ]
