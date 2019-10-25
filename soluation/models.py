from django.db import models
#12958328.61328125,4822451.171875
# Create your models here.
# Create your models here.
class Users(models.Model):
    mobilenum = models.CharField(max_length=32,verbose_name='手机号',null=True)
    createDate = models.DateTimeField(null=True,auto_now_add=True)