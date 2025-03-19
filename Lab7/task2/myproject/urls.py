from django.contrib import admin
from django.http import HttpResponse
from django.urls import path

def home(request):
    return HttpResponse("Hello, Django!")

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
]
