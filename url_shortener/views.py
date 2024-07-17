from django.shortcuts import render , redirect
from .models import links
import string
import secrets , re


def generate_key(length):
    characters = string.ascii_letters + string.digits
    random_string = ''.join(secrets.choice(characters) for _ in range(length))
    return random_string

def is_valid_url(url):
    url_pattern = re.compile(
        r'^(https?:\/\/)?'  # optional scheme
        r'((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'  # domain
        r'((\d{1,3}\.){3}\d{1,3}))'  # or ip
        r'(\:\d+)?(\/[-a-z\d%_.~+]*)*'  # optional port and path
        r'(\?[;&a-z\d%_.~+=-]*)?'  # optional query string
        r'(\#[-a-z\d_]*)?$', re.IGNORECASE)  # optional fragment
    return re.match(url_pattern, url) is not None


def index(request):
    params = {'link': False,'mess': 'Just make sure it\'s a full URL.'}
    return render(request, 'url_shortener/index.html', params)


def handleShort(request , key):
    try:
        obj = links.objects.get(key = key)
        return render(request, 'url_shortener/middle.html', {'seconds': 6, 'url': obj.url})
    except:
        return render(request, 'url_shortener/index.html', {'link': False, 'mess': 'Sorry, I couldn\'t find it.'})
    

def createShort(request):
    url = request.GET.get('url')
    try:
        key = links.objects.get(url = url).key
        params = {'link': True , 'key': key}
    except:
        if (is_valid_url(url)):
            key = generate_key(5)
            links(key = key , url = url).save()
            params = {'link': True , 'key': key}
        else:
            mess = ""
            params = {'link': False, 'snuck': True}
    return render(request, 'url_shortener/index.html', params)

