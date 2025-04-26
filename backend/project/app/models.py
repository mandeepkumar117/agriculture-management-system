from django.db import models

# Create your models here.
class fertilizer(models.Model):
    product_id = models.CharField(primary_key=True)
    name = models.CharField(max_length=100)
    fertilizer_type = models.CharField(max_length=100)
    nutrients= models.CharField(max_length=200)
    usage= models.CharField(max_length=200)
    application_method= models.CharField(max_length=200)
    dosage= models.CharField(max_length=200)
    benifits= models.CharField(max_length=200)
    precautions= models.CharField(max_length=200)
    suitablecrop= models.CharField(max_length=200)
    manufacturer= models.CharField(max_length=100)

    price = models.DecimalField(max_digits=10, decimal_places=2)
    stotageinstructions= models.CharField(max_length=200)
    dealer= models.CharField(max_length=100)

class seeds(models.Model):
    product_id = models.CharField(primary_key=True)
    seedname = models.CharField(max_length=100)
    crop_type = models.CharField(max_length=100)
    seed_type = models.CharField(max_length=100)
    quantity = models.CharField(max_length=100)
    germination_rate = models.DecimalField(max_digits=5, decimal_places=2)
    seed_treatment = models.CharField(max_length=200)
    quantity = models.CharField(max_length=200)
    manufacture = models.DecimalField(max_digits=5, decimal_places=2)
    spacing = models.CharField(max_length=200)
    harvest_time = models.CharField(max_length=200)
    yield_per_hectare = models.DecimalField(max_digits=10, decimal_places=2)
    dealer= models.CharField(max_length=100)

    price = models.DecimalField(max_digits=10, decimal_places=2)

class pesticide(models.Model):
    product_id = models.CharField(primary_key=True)
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    composition = models.CharField(max_length=100)
    suitablecrop = models.CharField(max_length=200)
    application_method = models.CharField(max_length=200)
    precautions = models.CharField(max_length=200)
    quantity = models.CharField(max_length=200)
    image = models.ImageField(upload_to='irrigation_items/', null=True, blank=True)
    
    manufacturer = models.CharField(max_length=100)

    price = models.DecimalField(max_digits=10, decimal_places=2)
    dealer= models.CharField(max_length=100) 

class IrrigationItem(models.Model):
    product_id = models.CharField(primary_key=True)
    name = models.CharField(max_length=100)            # Item name (e.g., Water Pump)
    description = models.TextField()                   # Detailed description
    price = models.DecimalField(max_digits=10, decimal_places=2)   # Price of item
    stock = models.PositiveIntegerField()              # How many items available
    category = models.CharField(max_length=50)         # e.g., Drip, Sprinkler, Pipes
    image = models.ImageField(upload_to='irrigation_items/', null=True, blank=True)  # Item image

    updated_at = models.DateTimeField(auto_now=True)      
    manufacturer = models.CharField(max_length=100)
    dealer= models.CharField(max_length=100) 

