from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .serializers import BookSerializer

# Models
from .models import Book

class BookApiView(APIView):

    # authentication_classes = [authentication.TokenAuthentication]
    # permission_classes = [permissions.IsAdminUser]

    def get(self, request):
        """ List all books. """
        books = Book.objects.all()
        for book in books:
            print(book.id, book.title, book.author)
        serializer = BookSerializer(books, many=True)  # Serialize for use
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        """ Add a new Book. """
        data = {
            # 'id': request.data.get('id'),
            'title': request.data.get('title'),
            'author': request.data.get('author')
        }
        serializer = BookSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else: # Not valid
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)