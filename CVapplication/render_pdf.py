from io import BytesIO
from django.http import HttpResponse
from django.template.loader import get_template
import os
from django.conf import settings

from xhtml2pdf import pisa
#from reportlab.pdfbase.ttfonts import TTFont

def fetch_pdf_resources(uri, rel):
    if uri.find(settings.MEDIA_URL) != -1:
        path = os.path.join(settings.MEDIA_ROOT, uri.replace(settings.MEDIA_URL, ''))
    elif uri.find(settings.STATIC_URL) != -1:
        path = os.path.join(settings.STATIC_ROOT, uri.replace(settings.STATIC_URL, ''))
    else:
        path = None
    return path

def render_to_pdf(template_src, context_dict={}):
    """
    Function that takes a html file and returns it as a pdf.

    :param template_src: Name of the template
    :param context_dict:  Dictionary with data
    :return: Pdf file from HTML, with error None
    """
    template = get_template(template_src)
    html = template.render(context_dict)
    result = BytesIO()
    pdf = pisa.pisaDocument(BytesIO(html.encode("utf-8")), result, encoding='utf-8', link_callback=fetch_pdf_resources)
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return None
