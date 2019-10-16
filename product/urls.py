from django.conf.urls import url
from product import views

urlpatterns = [
    url(r'^$', views.index_view),
    url(r'^register$',views.reg_view),
]
