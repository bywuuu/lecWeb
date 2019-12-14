# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2019-10-28 10:21
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import product.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('order_id', models.AutoField(primary_key=True, serialize=False, verbose_name='订单id')),
                ('is_pay', models.BooleanField(verbose_name='是否付款')),
            ],
            options={
                'db_table': 'order',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('product_id', models.AutoField(primary_key=True, serialize=False, verbose_name='产品id')),
                ('product_name', models.CharField(max_length=30, verbose_name='产品名称')),
                ('product_price', models.PositiveIntegerField(default=product.models.random_price, verbose_name='产品定价')),
                ('updated_time', models.DateTimeField(auto_now=True, verbose_name='修改时间')),
                ('pic_url', models.CharField(default='', max_length=50, verbose_name='图片url')),
            ],
            options={
                'db_table': 'product',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False, verbose_name='用户id')),
                ('username', models.CharField(max_length=20, unique=True, verbose_name='用户名')),
                ('password', models.CharField(max_length=32, verbose_name='密码')),
                ('email', models.EmailField(max_length=254, verbose_name='邮箱')),
                ('created_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('money', models.PositiveIntegerField(default=0, verbose_name='账户余额')),
            ],
            options={
                'db_table': 'user',
            },
        ),
        migrations.AddField(
            model_name='order',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.Product', verbose_name='商品id外键'),
        ),
        migrations.AddField(
            model_name='order',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.User', verbose_name='用户id外键'),
        ),
    ]