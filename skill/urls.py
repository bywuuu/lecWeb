from django.conf.urls import url

from . import views

urlpatterns = [
    #technology首页
    url(r'^tec$',views.tec),
    url(r'^add$',views.tec_add),
    url(r'^get_img_id$',views.img_id),
    url(r'^show$',views.show),
]

