from django.shortcuts import render
from .tools import *
from .models import *

# Create your views here.


def index_view(request):
    return render(request, 'product/index.html')


def reg_view(request):
    if request.method == 'POST':
        username = request.POST.get('username', '')
        password_1 = request.POST.get('password_1', '')
        password_2 = request.POST.get('password_2', '')
        email = request.POST.get('email', '')
        if not username or not password_1 or not password_2 or not email:
            return render(request, 'product/register.html', {'error': '不能输入空的信息'})
        if password_1 != password_2:
            return render(request, 'product/register.html', {'error': '两次密码不一致'})
        try:
            user = User.objects.get(username=username)
        except Exception as e:
            password = md5(password_1)
            try:
                User.objects.create(username=username, password=password, email=email)
            except Exception as e:
                print(e)
                return render(request, 'product/register.html', {'error': '请输入正确的邮箱格式'})
            res = render(request, 'product/register.html', {'error': '注册成功'})
            res.set_cookie('username',username)
            return res

        return render(request, 'product/register.html', {'error': '账号已被注册'})

    elif request.method == 'GET':
        return render(request, 'product/register.html')