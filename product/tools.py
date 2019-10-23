import hashlib

from django.shortcuts import render

from product.models import User


def md5(password):
    if isinstance(password, str):
        password = password.encode()
    md5 = hashlib.md5()
    md5.update(password)
    return md5.hexdigest()


def logging_view(*method):
    def wrapper(func):
        def _wrapper(request, *args, **kwargs):
            if request.method not in method:
                return func(request, *args, **kwargs)
            else:
                cookie = request.COOKIES.get('username', '')
                if not cookie:
                    return render(request, 'product/login.html')
                else:
                    try:
                        user = User.objects.get(username=cookie)
                        request.user = user
                        return func(request, *args, **kwargs)
                    except Exception as e:
                        print(e)
                        info = 'this user does not exists'
                        return render(request, 'product/login.html', locals())
        return _wrapper
    return wrapper