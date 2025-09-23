from rest_framework import serializers
from .models import Skill, Metric, Prompt, Rubric, MentorText

# Serializers for each model
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'title', 'description']

class MetricSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metric
        fields = ['id', 'title', 'description', 'category']

class PromptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prompt
        fields = ['id', 'title', 'description', 'category']

class RubricSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rubric
        fields = ['id', 'title', 'description', 'category']

class MentorTextSerializer(serializers.ModelSerializer):
    skill = SkillSerializer(read_only=True)  # Optional: Shows Skill details instead of just ID

    class Meta:
        model = MentorText
        fields = ['id', 'title', 'description', 'category', 'skill', 'created_on']
