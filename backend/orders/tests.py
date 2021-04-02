from django.test import TestCase
from django.urls import reverse

from orders.models import Order

class OrderTestCase(TestCase):
    fixtures = ['pizzas', 'orders', 'orderitems']

    def test_orders_list_endpoint(self):
        """
            test to verify orders endpoint is working correctly
        """
        response = self.client.get(reverse('order-list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Bernhard Blumkowski')
