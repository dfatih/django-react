from django.db import models

class Pizza(models.Model):
    """
        model to manage pizza types
    """
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField(verbose_name='name', max_length=100, unique=False)
    description = models.TextField(verbose_name='description', blank=True)
    image = models.ImageField(upload_to="pizza_images", blank=True)

    def __str__(self):
        return 'Pizza %s' % (self.name)
