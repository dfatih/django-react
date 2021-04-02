from django.urls import path, include
from rest_framework import routers

from pizzas.viewsets import PizzaViewSet

router = routers.DefaultRouter()
router.register(r'pizzas', PizzaViewSet)


urlpatterns = [
    path('', include(router.urls))
]
