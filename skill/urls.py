from django.conf.urls import url

from skill import views

urlpatterns = [
    #technology首页
    #http://127.0.0.1:8000/technology/
    url(r'^tec$',views.tec),

]
