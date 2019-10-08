from django.conf.urls import url

from soluation import views

urlpatterns=[
    #soluation首页
    #http://127.0.0.1:8000/soluation/conten1
    url(r'^conten1$',views.conten1),
    # http://127.0.0.1:8000/soluation/reg
    url(r'^reg$', views.reg),
    # 负责存储信息
    # http://127.0.0.1:8000/soluation/server
    url(r'^server$', views.server),
]