from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.Serializer):

    id = serializers.IntegerField(read_only = True)
    title = serializers.CharField(max_length = 100)
    author = serializers.CharField(max_length = 100)

    def create(self, data):
        new_row = Book.objects.create(**data)
        return new_row
