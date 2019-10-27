from django.shortcuts import render
import json
from django.http import JsonResponse, HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from .models import Tec
def tec(request):
    if request.method == 'GET':
        return render(request,'technology/technology.html')

def tec_add(request):
    if request.method == 'GET':
        return render(request,'technology/add.html')

def img_id(request):
    if request.method == 'GET':
        # myset:(id,id,like)
        myset = request.GET.get('params')#'9,zzz,false'
        myset = myset.split(',')
        islike = True
        if myset[2]=='false':
            islike=False
        else:
            islike=True
        Tec.objects.create(img_id=myset[0],username=myset[1],like=islike)
        #Tec.objects.create(img_id='123',username='xuyue',like=True)
    return HttpResponse('ok')
def show(request):
    show_pic = Tec.objects.all()
    return render(request, 'technology/show.html', locals())
