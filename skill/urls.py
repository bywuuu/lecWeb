from django.conf.urls import url

from soluation import views

urlpatterns = [
    #technology首页
    #http://127.0.0.1:8000/technology/
    url(r'^tec$',views.tec),

]
