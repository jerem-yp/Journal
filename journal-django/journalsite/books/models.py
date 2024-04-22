from django.db import models

# Create your models here.
# class GeneralEntry(models.Model):
#     id = models.AutoField(primary_key=True)
#     entry_title = models.CharField(max_length = 256)
#     image = models.BinaryField()
#     entry = models.TextField()
#     timestamp = models.DateTimeField(auto_now_add=True)
#
#     def __str__(self):
#         return self.entry_title

class Book(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length = 100, null = False)
    author = models.CharField(max_length = 100, null = False)

    def __str__(self):
        return self.title

# class BookEntry(models.Model):
#     book_id = models.ForeignKey(Book,  on_delete = models.CASCADE)
#     general_entry_id = models.ForeignKey(GeneralEntry, on_delete = models.CASCADE)
#
#     def __str__(self):
#         return f"{self.book_id} {self.general_entry_id}"
