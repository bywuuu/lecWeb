
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^novel$',views.game_novel),
    url(r'^car$',views.game_car),
    url(r'^football$',views.game_football),
    url(r'^erget$',views.game_erget),
    url(r'^rpg$',views.game_rpg),
    url(r'^games$',views.game_choose),
    url(r'^share$',views.get_showshare),

]