from rest_framework import routers
from.views import *
from django.urls import path,include
<<<<<<< HEAD
from .views import Login



from .views import ProtectedViewSet
=======
>>>>>>> a4cd8abfc985100c1ef22abcdbf6d3506a268054



router = routers.DefaultRouter()
router.register(r'fertilizer', Fertilizer)
router.register(r'pesticide', Pesticide)
router.register(r'IrrigationItem',Irrigation )
router.register(r'owner', Owner)
router.register(r'machinery', Machinery)
router.register(r'rent_machinery', Rentmachinery)
router.register(r'hiredMachinery', Hiredmachinery)
router.register(r'labour_registration', Labourregistration)
router.register(r'hired_labour', Hiredlabour)
router.register(r'dealer_registration', Dealer)
router.register(r'sales_report', Salesreport)
router.register(r'cart', Cart)
<<<<<<< HEAD
router.register(r'login', Login, basename='login')
router.register(r'registration', Registration)
router.register(r'userdetail', Userdetail)
router.register(r'admindetail', Admindetail)

router.register(r'protected-route', ProtectedViewSet, basename='protected')
=======
router.register(r'login', Login)
router.register(r'registration', Registration)
router.register(r'userdetail', Userdetail)
router.register(r'admindetail', Admindetail)
>>>>>>> a4cd8abfc985100c1ef22abcdbf6d3506a268054
#######
