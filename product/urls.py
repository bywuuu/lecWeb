from django.conf.urls import url
from product import views

urlpatterns = [
    url(r'^$', views.index_view),
    url(r'^register$', views.reg_view),
    url(r'^login$', views.log_view),
    url(r'^list$', views.product_list_view),
    url(r'^all$', views.product_all),
    url(r'^buy/(?P<product_id>\d+)$', views.product_buy),
    url(r'^change_info$', views.change_info),
    url(r'^change_info/(?P<username>\w+)$', views.change_info),
    url(r'^quit_login/(?P<username>\w+)$', views.quit_login),
    url(r'^add_money/(?P<username>\w+)$', views.add_money)
]
