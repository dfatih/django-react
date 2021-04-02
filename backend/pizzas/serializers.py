from rest_framework import serializers

from pizzas.models import Pizza

class PizzaSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.ImageField()

    class Meta:
        model = Pizza
        fields = ['name', 'description', 'image']
