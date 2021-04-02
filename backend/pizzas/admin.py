from django.contrib import admin
from pizzas.models import Pizza

class PizzaAdmin(admin.ModelAdmin):
    pass

admin.site.register(Pizza, PizzaAdmin)
