from django.db import models

# Create your models here.


from django.utils.text import slugify

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    

class Book(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)

    image = models.ImageField(
        upload_to="books/",
        blank=True,
        null=True
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="books"
    )

    class Meta:
        ordering = ["-id"]
        verbose_name = "Book"
        verbose_name_plural = "Books"

    def __str__(self):
        return self.title
    
