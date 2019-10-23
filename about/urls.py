from django.conf.urls import url

from about import views

urlpatterns = [
    url(r'^about$',views.about_page),
    url(r'^danmu$',views.Danmu)
]