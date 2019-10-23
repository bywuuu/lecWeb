from django.conf.urls import url

from soluation import views

urlpatterns = {
    url(r'^test$', views.test),
    url(r'^index$', views.solutions_Integrated_commercial),
    url(r'^register$', views.register, name='register'),
    url(r'^video_player$', views.video_player, name='video_player'),
    # soluation首页
    # http://127.0.0.1:8000/soluation/conten1
    url(r'^conten1$', views.conten1),
    # http://127.0.0.1:8000/soluation/reg
    url(r'^reg$', views.reg),
    # 负责存储信息
    # http://127.0.0.1:8000/soluation/server
    url(r'^server$', views.server),
}
