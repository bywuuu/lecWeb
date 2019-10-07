from django.conf.urls import url

from soluation import views

urlpatterns = [
    url(r'^test$', views.test),
    url(r'^index$', views.solutions_Integrated_commercial),
]
