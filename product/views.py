from django.http import HttpResponse
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
                return render(request, 'product/register.html', {'info': '请输入正确的邮箱格式'})
            res = render(request, 'product/product_list.html')
            res.set_cookie('username', username)
            return res

        return render(request, 'product/register.html', {'info': '账号已被注册'})

    elif request.method == 'GET':
        return render(request, 'product/register.html')


def log_view(request):
    if request.method == 'GET':
        return render(request, 'product/login.html')
    elif request.method == 'POST':
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        if not username or not password:
            return render(request, 'product/login.html', {'info': '请输入用户名和密码'})
        user = User.objects.filter(username=username)
        if not user:
            return render(request, 'product/login.html', {'info': '此用户不存在'})
        else:
            info = 'login'
            res = render(request, 'product/product_list.html', locals())
            res.set_cookie('username', username)
            return res


def product_list_view(request):
    is_login = request.COOKIES.get('username', '')
    if is_login:
        info = 'login'
    if request.method == 'GET':
        return render(request, 'product/product_list.html', locals())
    elif request.method == 'POST':
        query = request.POST.get('query')
        ul_data = Product.objects.filter(product_name__contains=query)
        if not ul_data:
            return render(request, 'product/product_list.html', {'info': '没有该产品'})
        else:
            return render(request, 'product/product_list.html', locals())

    return render(request, 'product/product_list.html')


def product_all(request):
    is_login = request.COOKIES.get('username', '')
    if is_login:
        info = 'login'
    if request.method == 'GET':
        ul_data = Product.objects.all()
        return render(request, 'product/product_list.html', locals())
    else:
        return HttpResponse('404 Not Found')


@logging_view('POST')
def product_buy(request, product_id):
    if request.method == 'GET':
        print(product_id)


@logging_view('GET', 'POST')
def change_info(request, username=None):
    if request.method == 'GET':
        user = request.user
        return render(request, 'product/change_info.html', locals())

    elif request.method == 'POST':
        user = request.user
        # 如果用户提交了修改其他用户信息的请求
        if username is None:
            return render(request, 'product/login.html')
        if username != user.username:
            info = 'you have no right change other`s info, please login'
            res = render(request, 'product/login.html', locals())
            res.delete_cookie('username')
            return res
        # 如果用户没有进行任何修改
        username_user = request.POST.get('username', '')
        email = request.POST.get('email', '')
        if user.username == username_user and email == user.email:
            info = 'you haven`t change anything'
            return render(request, 'product/change_info.html', locals())


@logging_view('GET')
def quit_login(request, username=None):
    if request.method == 'GET':
        if username != request.user.username:
            info = 'you have no right'
            return render(request, 'product/change_info.html', locals())
        res = render(request, 'product/product_list.html')
        res.delete_cookie('username')
        return res
    else:
        return render(request, 'product/404.html')


@logging_view('GET', 'POST')
def add_money(request, username=None):
    if request.method == 'GET':
        user = request.user
        return render(request, 'product/add_money.html', locals())
    elif request.method == 'POST':
        user = request.user
        money = request.POST.get('money')
        if not money:
            info = '请输入充值金额'
            return render(request, 'product/add_money.html', locals())
        try:
            money = int(money)
        except Exception as e:
            print(e)
            info = '请输入正确格式的数字'
            return render(request, 'product/add_money.html', locals())
        if money < 0:
            info = '不可为负数！！'
            return render(request, 'product/add_money.html', locals())
        user.money += money
        user.save()
        info = '充值{}元成功'.format(money)
        return render(request, 'product/change_info.html', locals())
    else:
        return render(request, 'product/404.html')


@logging_view('GET', 'POST')
def change_password(request, username):
    user = request.user
    if username != user.username:
        info = '你无权修改他人账号'
        return render(request, 'product/change_info.html', locals())
    if request.method == 'GET':
        return render(request, 'product/change_password.html', locals())
    elif request.method == 'POST':
        old_password = request.POST.get('old_password', '')
        password_1 = request.POST.get('password_1', '')
        password_2 = request.POST.get('password_2', '')
        if not old_password or not password_1 or not password_2:
            info = '密码不得为空'
            return render(request, 'product/change_password.html', locals())
        if password_1 != password_2:
            info = '两次输入的密码不一致'
            return render(request, 'product/change_password.html', locals())
        if len(password_1) < 6:
            info = '密码长度不得小于6'
            return render(request, 'product/change_password.html', locals())
        if old_password == password_1:
            info = '不得与原密码一致'
            return render(request, 'product/change_password.html', locals())
        old_password = md5(old_password)
        if old_password != user.password:
            info = '请输入正确的原密码'
            return render(request, 'product/change_password.html', locals())
        new_password = md5(password_1)
        user.password = new_password
        user.save()
        info = '密码修改成功'
        return render(request, 'product/change_info.html', locals())
    else:
        return render(request, 'product/404.html')





