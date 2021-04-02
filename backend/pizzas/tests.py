from django.test import TestCase
from django.urls import reverse

from pizzas.models import Pizza

class PizzaTestCase(TestCase):
    fixtures = ['pizzas', 'orders', 'orderitems']

    def test_pizzas_list_endpoint(self):
        """
            test to verify pizzas endpoint is working correctly
        """
        response = self.client.get(reverse('pizza-list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Tasty Salami Pizza')
