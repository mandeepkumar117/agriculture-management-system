from rest_framework import viewsets
from .models import *
from .serializers import *


# Create your views her


class Fertilizer(viewsets.ModelViewSet):

    queryset = fertilizer.objects.all()
    serializer_class = stu_serializers1

class Pesticide(viewsets.ModelViewSet):
     
    queryset = pesticide.objects.all()
    serializer_class = stu_serializers2

   
class Seeds(viewsets.ModelViewSet):
     
    queryset = seeds.objects.all()
    serializer_class = stu_serializers3


class Irrigation(viewsets.ModelViewSet):
     
    queryset = IrrigationItem.objects.all()
    serializer_class = stu_serializers4


    
class Owner(viewsets.ModelViewSet):
     
    queryset = owner.objects.all()
    serializer_class = stu_serializers5

class Machinery(viewsets.ModelViewSet):
     
    queryset = machinery.objects.all()
    serializer_class = stu_serializers6

class Rentmachinery(viewsets.ModelViewSet):
     
    queryset = rent_machinery.objects.all()
    serializer_class = stu_serializers7
class Hiredmachinery(viewsets.ModelViewSet):
     
    queryset = hiredMachinery.objects.all()
    serializer_class = stu_serializers8


class Labourregistration(viewsets.ModelViewSet):
     
    queryset = labour_registration.objects.all()
    serializer_class = stu_serializers9
class Hiredlabour(viewsets.ModelViewSet):
     
    queryset = hired_labour.objects.all()
    serializer_class = stu_serializers10
class Dealer(viewsets.ModelViewSet):
     
    queryset = dealer_registration.objects.all()
    serializer_class = stu_serializers11

class Salesreport(viewsets.ModelViewSet):
     
    queryset = sales_report.objects.all()
    serializer_class = stu_serializers12
class Cart(viewsets.ModelViewSet):
     
    queryset = cart.objects.all()
    serializer_class = stu_serializers13
class Login(viewsets.ModelViewSet):
     
    queryset = login.objects.all()
    serializer_class = stu_serializers14  

class Registration(viewsets.ModelViewSet):
     
    queryset = registration.objects.all()
    serializer_class = stu_serializers15      

#####
         



