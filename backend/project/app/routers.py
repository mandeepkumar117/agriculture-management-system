from rest_framework import routers
from.views import *
from django.urls import path,include
from .views import Login



from .views import ProtectedViewSet



router = routers.DefaultRouter()
router.register(r'fertilizer', Fertilizer)
router.register(r'pesticide', Pesticide)
router.register(r'IrrigationItem',Irrigation )
router.register(r'seeds',Seeds )
router.register(r'owner', Owner)
router.register(r'machinery', Machinery)
router.register(r'rent_machinery', Rentmachinery)
router.register(r'hiredMachinery', Hiredmachinery)
router.register(r'labour_registration', Labourregistration)
router.register(r'hired_labour', Hiredlabour)
router.register(r'dealer_registration', Dealer)
router.register(r'sales_report', Salesreport)
router.register(r'cart', Cart)
router.register(r'login', Login, basename='login')
router.register(r'registration', Registration)
router.register(r'userdetail', Userdetail)
router.register(r'admindetail', Admindetail)


router.register(r'protected-route', ProtectedViewSet, basename='protected')
#######
