from django.db import models

# Create your models here.
class Barrage(models.Model):
    time = models.DateTimeField('时间',auto_now_add=True)
    text = models.CharField('弹幕',max_length=100)
