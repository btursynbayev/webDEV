from rest_framework import serializers
from .models import Company, Vacancy, VacancyClick

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'


class VacancyClickSerializer(serializers.ModelSerializer):
    class Meta:
        model = VacancyClick
        fields = '__all__'

