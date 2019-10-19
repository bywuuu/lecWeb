from django.conf.urls import url
from product import views

urlpatterns = [
    url(r'^$', views.index_view),
    url(r'^register$', views.reg_view),
    url(r'^login$', views.log_view),
    url(r'^list$', views.product_list_view),
    url(r'^all$', views.product_all)
]
