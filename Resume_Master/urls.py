"""CvMaker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.conf import settings

from django.contrib import admin
from django.urls import path, include
from CVapplication.views import MainPageView, ResumeCreator, GeneratePdf
from register.views import LoginView, LogoutView, RegisterView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', MainPageView.as_view(), name='main_page'),
    path('create', ResumeCreator.as_view(), name='cv_maker'),
    path('pdf', GeneratePdf.as_view(), name='pdf'),
    path('accounts/login', LoginView.as_view(), name='login'),
    path('accounts/logout', LogoutView.as_view(), name='logout'),
    path('accounts/register', RegisterView.as_view(), name='register')
]
urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

