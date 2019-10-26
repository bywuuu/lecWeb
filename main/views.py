from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'main/mainpage.html')

def game_novel(request):
    # return render(request, 'main/index_novel.html')
    return render(request, 'main/index_novel.html')

def game_car(request):
    return render(request, 'main/index_car.html')

def game_football(request):
    return render(request, 'main/index_football.html')

def game_erget(request):
    return render(request, 'main/index_erget.html')

def game_rpg(request):
    return render(request, 'main/index_rpg.html')
def get_showshare(request):
    return render(request,'main/a.html')

def game_choose(request):
    if request.GET.get('params'):
        p = request.GET['params']
        if p=='novel':
            return game_novel(request)
        elif p=='car':
            return game_car(request)
        elif p=='football':
            return game_football(request)
        elif p=='erget':
            return game_erget(request)
        else:
            return game_rpg(request)
    return render(request,'main/index_game.html')
