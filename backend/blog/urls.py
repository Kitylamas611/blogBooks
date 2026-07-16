
from rest_framework import routers
from .views import BooksView

router = routers.DefaultRouter()
router.register("books", BooksView)

urlpatterns = router.urls
