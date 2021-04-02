from rest_framework import serializers

from orders.models import Order, OrderItem

class OrderItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['choosen', 'price']

class OrderSerializer(serializers.HyperlinkedModelSerializer):
    items = OrderItemSerializer(many=True, required=False)

    class Meta:
        model = Order
        fields = ['name', 'address1', 'address2', 'zip_code', 'city', 'status', 'items']
