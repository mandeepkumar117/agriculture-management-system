from rest_framework import serializers
from .models import *

from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer

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


class stu_serializers16(serializers.ModelSerializer):
    class Meta:
        model=userdetail
        
        fields = '__all__'      

class stu_serializers17(serializers.ModelSerializer):
    class Meta:
        model=admindetail
        
        fields = '__all__'                                         


#============================authentication=============================

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Username already exists.")
        return value

    def validate_email(self, value):
        if value and User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email is already registered.")
        return value

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email'),
            password=validated_data['password']
        )
        return user

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
