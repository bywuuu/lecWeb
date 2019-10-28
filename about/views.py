import json

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse


# Create your views here.
from .models import Barrage


def about_page(request):
    return render(request,'about/aboutpage.html')

def Danmu(request):
    if request.method =="GET":
        print('111111111111')
        return render(request,'about/danmu.html')

    elif request.method == 'POST':
        result = request.POST.get('txt')
        if not result:
            text_error = '输入为空请重新输入'
            return render(request,'about/danmu.html',locals())
        else:
            print(result)
            Barrage.objects.create(text=result)
            # history = Barrage.objects.all()

            request.session['txt'] = result
            return render(request,'about/danmu.html')





