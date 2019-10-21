from django.shortcuts import render


import json

from django.http import JsonResponse
from django.shortcuts import render
def tec(request):
    if request.method == 'GET':
        return render(request,'technology/technology.html')