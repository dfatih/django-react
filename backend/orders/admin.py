from django.contrib import admin
from orders.models import Order, OrderItem

class OrderItemAdminInline(admin.TabularInline):
    model = OrderItem

class OrderAdmin(admin.ModelAdmin):
    inlines = (OrderItemAdminInline, )

admin.site.register(Order, OrderAdmin)
