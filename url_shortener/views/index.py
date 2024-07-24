from django.shortcuts import render


# Home page
def index(request):
	params = {'link': False,'mess': 'Just make sure it\'s a full URL.'}
	return render(request, 'url_shortener/index.html', params)
