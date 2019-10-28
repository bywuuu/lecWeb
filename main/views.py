from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'main/mainpage.html')

def get_showshare(request):
    return render(request,'main/a.html')
def get_showAll(request):
    return render(request,'main/recordrtc_demo.html')

def game_choose(request):
    return render(request,'main/index_game.html')
