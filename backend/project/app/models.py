from django.db import models

# Create your models here.
class fertilizer(models.Model):
    product_id = models.CharField(primary_key=True)
    name = models.CharField(max_length=100)
    fertilizer_type = models.CharField(max_length=100)
    nutrients= models.CharField(max_length=200)
    image=models.ImageField(upload_to='images')
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
    image=models.ImageField(upload_to='images')
    price = models.DecimalField(max_digits=10, decimal_places=2)

class pesticide(models.Model):
    product_id = models.CharField(primary_key=True)
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    composition = models.CharField(max_length=100)
    suitablecrop = models.CharField(max_length=200)
    application_method = models.CharField(max_length=200)
    precautions = models.CharField(max_length=200)
    image=models.ImageField(upload_to='images')
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
    image = models.ImageField(upload_to='images')  # Item image

    updated_at = models.DateTimeField(auto_now=True)      
    manufacturer = models.CharField(max_length=100)
    dealer= models.CharField(max_length=100) 


class owner(models.Model):
    owner_id = models.CharField(primary_key=True)
    name = models.CharField(max_length=100)
    contact= models.IntegerField()
    
    
    address = models.CharField(max_length=100)

class machinery(models.Model):
    machine_id= models.CharField(primary_key=True)
    owner= models.ForeignKey(owner, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    image=models.ImageField(upload_to='images')
    specifications = models.CharField(max_length=200)
    usage = models.CharField(max_length=200)
    manufacturer = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    dealer= models.CharField(max_length=100)    



class rent_machinery(models.Model):
    machine_no= models.ForeignKey(machinery, on_delete=models.CASCADE)
    machinename= models.CharField(max_length=20)
    image=models.ImageField(upload_to='images')
    machine_type = models.CharField(max_length=30)
    charge = models.CharField()
    status= models.CharField(max_length=50)
class hiredMachinery(models.Model):
    machine_no= models.ForeignKey(machinery, on_delete=models.CASCADE)
    username= models.CharField(max_length=20)
    image=models.ImageField(upload_to='images')
    contact= models.IntegerField()
    machine_name = models.CharField(max_length=30)
    hired_date = models.DateField()
    useraddress= models.CharField(max_length=50)
    
class labour_registration(models.Model):
    labour_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    contact = models.IntegerField()
    image=models.ImageField(upload_to='images')
    adharno = models.IntegerField(unique=True)
    worktype = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    
class  hired_labour(models.Model):

    username= models.CharField(max_length=20)
    NumberOfLabour= models.IntegerField()
    worktype = models.CharField(max_length=100)
    hired_date = models.DateField()
    image= models.ImageField(upload_to='images')
    address= models.CharField(max_length=50)
    
class dealer_registration(models.Model):
    dealer_id = models.CharField(primary_key=True)
    name = models.CharField(max_length=100)
    contact = models.IntegerField()
    GstNo = models.CharField(max_length=15,unique=True)

    address = models.CharField(max_length=100)


class sales_report(models.Model):
    dealer_id= models.ForeignKey(dealer_registration, on_delete=models.CASCADE)
    name= models.CharField(max_length=30)
    product_type= models.CharField(max_length=30)
    total_sales= models.IntegerField()

class cart(models.Model):
    product_id = models.IntegerField()
    product_name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    image=models.ImageField(upload_to='images')
    dealername = models.CharField ()



class login(models.Model):
    username = models.CharField(max_length=100, primary_key=True)
    password = models.CharField(max_length=100)

class registration(models.Model):
    username = models.CharField(max_length=100, primary_key=True)
    
    email = models.EmailField(max_length=100, unique=True)
    phone_number = models.IntegerField()
    password = models.CharField(max_length=200)
    cpassword = models.IntegerField()
 

    

