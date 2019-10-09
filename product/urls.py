from django.conf.urls import url
from product import views

urlpatterns = [
    url(r'^$', views.index_view),
]
