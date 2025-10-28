from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SkillViewSet, MetricViewSet, PromptViewSet, RubricViewSet, MentorTextViewSet

router = DefaultRouter()
router.register(r'skills', SkillViewSet)
router.register(r'metrics', MetricViewSet)
router.register(r'prompts', PromptViewSet)
router.register(r'rubrics', RubricViewSet)
router.register(r'mentor-texts', MentorTextViewSet)

urlpatterns = [
    path('', include(router.urls)),
]