from django.shortcuts import render

#史飞飞
import json

from django.http import JsonResponse
from django.shortcuts import render
#立即免费体验
def conten1(request):
    if request.method == 'GET':
        return render(request,'soluation/soluation.html')
def login1(request):
    if request.method =='GET':
        result = {'code': 1000, 'error': '请求方式错误'}
        # result=json.dumps(result)
        return JsonResponse(result)
    elif request.method == 'POST':
        # if not request.token:
        #     result={'code':1001,'error':'请登录'}
        #     return JsonResponse(result)
        print(request,type(request),11111111111111111111111111111111111111111)
        result = {'code': 200}
        return JsonResponse(result)
#登录
def login(request):
    if request.method =='GET':
        return render(request,'soluation/1.html')
def login_server(request):
    if request.method =='GET':
        result = {'code':1200,'error':'请求方式错误'}
        return JsonResponse(result)
    elif request.method=='POST':
        users = request.body

#注册
def reg(request):
    if request.method =="GET":
        return render(request,'soluation/register.html')
def reg_server(request):
    if request.method =="GET":
        result = {'code':1300,'error':'请求方式错误'}
        return JsonResponse(result)
    elif request.method == "POST":
        result = {'code':200}
        return JsonResponse(result)
#form
def form(request):
    if request.method =='GET':
        return render(request,'soluation/form.html')




from .models import *
def server(request):
    if request.method =='GET':
        result = {'code':1002,'error':'请求方式错误'}
        return JsonResponse(result)
    elif request.method =='POST':
        data_str = request.body
        if not data_str:
            result = {'code':1000,'error':'没有数据'}
            return JsonResponse(result)
        data_obj=json.loads(data_str)
        mobileNum = data_obj['mobilenum']
        db_mobilenum = Users.objects.filter(mobilenum=mobileNum)
        if db_mobilenum:
            result = {'code':1001,'error':'手机号以注册'}
            return JsonResponse(result)
        try:
            Users.objects.create(mobilenum=mobileNum)
            result = {'code':200,'error':'OK'}
            return JsonResponse(result)
        except Exception as e:
            reslut = {'code':1002,'error':e}
            return JsonResponse(reslut)
#以上是史飞飞的
# Create your views here.
def solutions_Integrated_commercial(request):
    return render(request, 'soluation/solutions_Integrated_commercial.html')

def test(request):
    pass
