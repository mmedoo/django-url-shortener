from django.db import models

class links(models.Model):
    key = models.CharField(max_length=10)
    url = models.CharField(max_length=200)
