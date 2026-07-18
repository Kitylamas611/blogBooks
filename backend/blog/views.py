from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Book
from .serializers import BooksSerializer

class BooksView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BooksSerializer