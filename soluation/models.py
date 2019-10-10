from django.db import models

# Create your models here.
# Create your models here.
class Users(models.Model):
    mobilenum = models.CharField(max_length=32,verbose_name='手机号',null=True)
    createDate = models.DateTimeField(null=True,auto_now_add=True)