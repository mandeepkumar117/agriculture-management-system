<<<<<<< HEAD
from rest_framework import viewsets,status
from .models import *
from .serializers import *
from django.contrib.auth.models import User

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
=======
from rest_framework import viewsets
from .models import *
from .serializers import *
>>>>>>> a4cd8abfc985100c1ef22abcdbf6d3506a268054


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
<<<<<<< HEAD

class Login(viewsets.ViewSet):  # ⚠️ yaha ViewSet use kare ModelViewSet ke jagah
    def create(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        try:
            user = registration.objects.get(username=username)
        except registration.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        if check_password(password, user.password):
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED) 

class Registration(viewsets.ModelViewSet):
    queryset = registration.objects.all()
    serializer_class = stu_serializers15      

    def create(self, request, *args, **kwargs):
        data = request.data.copy()        
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')        
        if not User.objects.filter(username=username).exists():
            User.objects.create_user(username=username, email=email, password=password)        
        data['password'] = make_password(password)
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(serializer.data, status=201)
     

=======
class Login(viewsets.ModelViewSet):
     
    queryset = login.objects.all()
    serializer_class = stu_serializers14  

class Registration(viewsets.ModelViewSet):
     
    queryset = registration.objects.all()
    serializer_class = stu_serializers15      

>>>>>>> a4cd8abfc985100c1ef22abcdbf6d3506a268054
         
class Userdetail(viewsets.ModelViewSet):
     
    queryset = userdetail.objects.all()
    serializer_class = stu_serializers16      

class Admindetail(viewsets.ModelViewSet):
     
    queryset = admindetail.objects.all()
<<<<<<< HEAD
    serializer_class = stu_serializers17   


#========================= authentication=============================   

class ProtectedViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request):
        return Response({"message": f"Welcome {request.user.username}, you accessed protected data!"})
=======
    serializer_class = stu_serializers17      


>>>>>>> a4cd8abfc985100c1ef22abcdbf6d3506a268054



