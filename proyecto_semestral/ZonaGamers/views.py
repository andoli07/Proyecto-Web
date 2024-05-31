from django.shortcuts import render

# Create your views here.
def index(request):
    context = {}
    return render(request,'pages/index.html',context)

def about(request):
    context = {}
    return render(request,'pages/about.html',context)

def carrito(request):
    context = {}
    return render(request,'pages/carrito.html',context)

def catalogo(request):
    context = {}
    return render(request,'pages/catalogo.html',context)

def formulario(request):
    context = {}
    return render(request,'pages/formulario.html',context)

def login(request):
    context = {}
    return render(request,'pages/login.html',context)

def producto_sm(request):
    context = {}
    return render(request,'pages/producto_spider',context)