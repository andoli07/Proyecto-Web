from django.urls import path
from . import views

urlpatterns=[
    path("",views.index,name="index"),
    path("",views.about,name="about"),
    path("",views.carrito,name="carrito"),
    path("",views.catalogo,name="catalogo"),
    path("",views.formulario,name="formulario"),
    path("",views.login,name="login"),
    path("",views.producto_sm,name="producto_spider")
]