from django.db import models
import random
# Create your models here.


def random_price():
    random_int = [x for x in range(5000, 30000, 1000)]
    return random.choice(random_int)


class User(models.Model):
    user_id = models.AutoField(primary_key=True, verbose_name='用户id')
    username = models.CharField(unique=True, max_length=20, verbose_name='用户名')
    password = models.CharField(max_length=32, verbose_name='密码')
    email = models.EmailField(verbose_name='邮箱')
    created_time = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    money = models.PositiveIntegerField(default=0, verbose_name='账户余额')

    class Meta:
        db_table = 'user'


class Product(models.Model):
    product_id = models.AutoField(primary_key=True, verbose_name='产品id')
    product_name = models.CharField(max_length=30, verbose_name='产品名称')
    product_price = models.PositiveIntegerField(default=random_price, verbose_name='产品定价')
    updated_time = models.DateTimeField(auto_now=True, verbose_name='修改时间')
    pic_url = models.CharField(default='', max_length=50, verbose_name='图片url')

    def __repr__(self):
        return str(self.product_id).center(3) +  self.product_name.center(15) + str(self.product_price).center(7) + self.pic_url.center(30)

    class Meta:
        db_table = 'product'
#
#
# class Order(models.Model):
#     order_id = models.AutoField(primary_key=True,verbose_name='订单id')
#     user_id = models.ForeignKey(User,verbose_name='用户id外键')
#     product_id = models.ForeignKey(Product,verbose_name='商品id外键')
#     invalid_time = models.DateTimeField(verbose_name='订单失效时间')
#     is_pay = models.BooleanField(verbose_name='是否付款')

