from django.http import HttpResponse
from django.views import View
from django.shortcuts import render
from CVapplication.models import Profile
from CVapplication.render_pdf import render_to_pdf


class MainPageView(View):
    """
    Main page view
    """
    def get(self, request):
        response = render(request, 'main_page.html')
        return response


class ResumeCreator(View):
    """
    Cv creator view with form and
    saving data to database
    """
    def get(self, request):
        response = render(request, 'profile_add.html')
        return response

    def post(self, request):
        profile = Profile()
        # First form part
        profile.picture = request.FILES['photo']
        profile.first_name = request.POST['first_name']
        profile.last_name = request.POST['last_name']
        profile.city = request.POST['city']
        profile.street = request.POST['street']
        profile.title = request.POST['position']
        profile.phone_number = request.POST['phone_number']
        profile.email = request.POST['email']
        # Second form part
        profile.school = request.POST['school']
        profile.degree = request.POST['degree']
        profile.subject = request.POST['subject']
        profile.started = request.POST['started']
        profile.ended = request.POST['ended']
        # Third form part
        profile.certificate_name = request.POST.getlist('certificate_name')
        profile.certificate_institution = request.POST.getlist('certificate_institution')
        profile.certificate_ended = request.POST.getlist('certificate_ended')
        # Fourth form part
        profile.language_name = request.POST.getlist('language_name')
        profile.language_level = request.POST.getlist('language_level')
        # Fifth form part
        profile.about_me = request.POST['about_me']
        profile.link = request.POST.getlist('link')
        # Sixth form part
        profile.company = request.POST.getlist('company')
        profile.function = request.POST.getlist('company_function')
        profile.company_started = request.POST.getlist('company_started')
        profile.company_ended = request.POST.getlist('company_ended')
        profile.description = request.POST.getlist('description')
        # Seventh form step
        profile.skill = request.POST.getlist('skill')
        profile.user = request.user
        profile.save()
        return HttpResponse("Збережено")


class GeneratePdf(View):
    """
    View that generates html file with resume template to pdf
    """
    def get(self, request, *args, **kwargs):
        user = request.user
        data = {
            'profiles': Profile.objects.all().filter(user=user)
        }
        pdf = render_to_pdf('pdf/template_1.html', data)
        if pdf:
            return HttpResponse(pdf, content_type='application/pdf')
        return HttpResponse("Ups, something bad had happened")
