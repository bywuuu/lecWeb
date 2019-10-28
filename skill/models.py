from django.db import models

# Create your models here.
class Tec(models.Model):
    img_id = models.CharField(verbose_name='图片id',max_length=10,default=None)
    username = models.CharField(verbose_name='用户名',max_length=32,default=None)
    like =models.BooleanField(verbose_name='like/dislike')

