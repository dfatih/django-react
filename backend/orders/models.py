from django.db import models

from orders.choices import STATUSCHOICES
from pizzas.choices import PIZZASIZES
from pizzas.models import Pizza

class Order(models.Model):
    """
        model to manage orders
    """
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField("Full name", max_length=1024)
    address1 = models.CharField("Address line 1", max_length=1024)
    address2 = models.CharField("Address line 2", blank=True, null=True, max_length=1024)
    zip_code = models.CharField("ZIP / Postal code", max_length=12)
    city = models.CharField("City", max_length=1024)
    status = models.CharField("Status", choices = STATUSCHOICES, default='accepted', max_length=20)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return 'Order %s: %s' % (self.id, self.name)

class OrderItem(models.Model):
    """
        model to manage orderitems
    """
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    order = models.ForeignKey(Order, null=True, blank=True, on_delete = models.CASCADE, related_name="items")
    pizza = models.ForeignKey(Pizza, null=True, blank=True, on_delete = models.SET_NULL, related_name="orderitems")
    size = models.CharField('Size', choices = PIZZASIZES, max_length=30)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    @property
    def choosen(self):
        "Returns the person's choosen pizza with size."
        return '%s %s' % (self.pizza.name, self.size)


    def __str__(self):
        return 'OrderItem for %s: %s %s' % (self.order.id, self.pizza.name, self.size)

    class Meta:
        ordering = ['-price']
