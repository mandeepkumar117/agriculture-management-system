from rest_framework import serializers
from .models import *



class stu_serializers1(serializers.ModelSerializer):
    class Meta:
        model=fertilizer
        
        fields = '__all__' 

class stu_serializers2(serializers.ModelSerializer):
    class Meta:
        model= pesticide
        
        fields = '__all__' 


class stu_serializers3(serializers.ModelSerializer):
    class Meta:
        model=seeds
        
        fields = '__all__' 
class stu_serializers4(serializers.ModelSerializer):
    class Meta:
        model=IrrigationItem
        
        fields = '__all__' 
class stu_serializers5(serializers.ModelSerializer):
    class Meta:
        model=owner
        
        fields = '__all__' 
class stu_serializers6(serializers.ModelSerializer):
    class Meta:
        model=machinery
        
        fields = '__all__' 
class stu_serializers7(serializers.ModelSerializer):
    class Meta:
        model=rent_machinery
        
        fields = '__all__' 



class stu_serializers8(serializers.ModelSerializer):
    class Meta:
        model=hiredMachinery
        
        fields = '__all__' 


class stu_serializers9(serializers.ModelSerializer):
    class Meta:
        model=labour_registration
        
        fields = '__all__' 

class stu_serializers10(serializers.ModelSerializer):
    class Meta:
        model=hired_labour
        
        fields = '__all__' 



class stu_serializers11(serializers.ModelSerializer):
    class Meta:
        model=dealer_registration
        
        fields = '__all__' 
class stu_serializers12(serializers.ModelSerializer):
    class Meta:
        model=sales_report
        
        fields = '__all__' 
class stu_serializers13(serializers.ModelSerializer):
    class Meta:
        model=cart
        
        fields = '__all__' 
class stu_serializers14(serializers.ModelSerializer):
    class Meta:
        model=login
        
        fields = '__all__' 
class stu_serializers15(serializers.ModelSerializer):
    class Meta:
        model=registration
        
        fields = '__all__'                                         
