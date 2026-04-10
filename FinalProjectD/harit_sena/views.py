from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request,'index.html')

def contact(request):
    return render(request,'contact.html')

def about(request):
    return render(request,'about.html')

def login(request):
    return render(request,'login.html')

def pickreq(request):
    return render(request,'pickreq.html')

def register(request):
    return render(request,'register.html')

def request(request):
    return render(request,'request.html')

def rewards(request):
    return render(request,'rewards.html')

