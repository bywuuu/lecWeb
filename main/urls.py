
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^games$',views.game_choose),
    url(r'^share$',views.get_showshare),
    url(r'^all$',views.get_showAll),

]