# -*- coding: utf-8 -*-
# Generated by Django 1.11.24 on 2019-10-21 10:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tec',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('like', models.CharField(max_length=10, verbose_name='喜欢')),
                ('dislike', models.CharField(max_length=10, verbose_name='不喜欢')),
            ],
        ),
    ]
