from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create the router and register our viewsets
router = DefaultRouter()
router.register(r'skills', views.SkillViewSet)
router.register(r'metrics', views.MetricViewSet)
router.register(r'prompts', views.PromptViewSet)
router.register(r'rubrics', views.RubricViewSet)
router.register(r'mentor-texts', views.MentorTextViewSet)

# Wire up our API using automatic URL routing
urlpatterns = [
    path('', include(router.urls)),
]
