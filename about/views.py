from django.shortcuts import render
from .models import Barrage
from django.http import HttpResponse, HttpResponseRedirect
# Create your views here.
def about_page(request):
    return render(request,'about/aboutpage.html')
import time
def Danmu(request):

    if request.method =='POST':
        t = time.time()
        text = request.POST.get('danmu')
        if not text:
            text_error = '输入为空请重新输入'
            return render(request,'about/aboutpage.html',locals())
        Barrage.objects.create(text=text,t = t)
        history = Barrage.objects.all()
        html = "发送成功"
        request.session['text'] = text
        return HttpResponse(html)
    elif request.method =='GET':
        return render(request,'about/aboutpage.html',locals())



