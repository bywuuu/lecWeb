from django.db import models

# Create your models here.
class Tec(models.Model):
    like = models.CharField(verbose_name='喜欢',max_length=10)
    dislike = models.CharField(verbose_name='不喜欢',max_length=10)