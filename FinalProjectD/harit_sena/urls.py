from django.contrib import admin
from django.urls import path,include
from harit_sena import views

urlpatterns = [
   path('',views.index,name = 'index'),
   path('about/',views.about,name = 'about'),
   path('contact/',views.contact,name = 'contact'),
   path('login/',views.login,name = 'login'),
   path('pickreq/',views.pickreq,name = 'pickreq'),
   path('register/',views.register,name = 'register'),
   path('request/',views.request,name = 'request'),
   path('rewards/',views.rewards,name = 'rewards'),

]
