from rest_framework import viewsets
from .models import Skill, Metric, Prompt, Rubric, MentorText
from .serializers import SkillSerializer, MetricSerializer, PromptSerializer, RubricSerializer, MentorTextSerializer

# Viewsets for each model
class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class MetricViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Metric.objects.all()
    serializer_class = MetricSerializer

class PromptViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Prompt.objects.all()
    serializer_class = PromptSerializer

class RubricViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Rubric.objects.all()
    serializer_class = RubricSerializer

class MentorTextViewSet(viewsets.ModelViewSet):
    queryset = MentorText.objects.all()
    serializer_class = MentorTextSerializer
