from rest_framework import viewsets

from pizzas.models import Pizza
from pizzas.serializers import PizzaSerializer

class PizzaViewSet(viewsets.ModelViewSet):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer
