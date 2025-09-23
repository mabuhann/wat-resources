from django.contrib import admin
from .models import Skill, Metric, Prompt, Rubric, MentorText

admin.site.register(Skill)
admin.site.register(Metric)
admin.site.register(Prompt)
admin.site.register(Rubric)
admin.site.register(MentorText)
