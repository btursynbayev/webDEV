from django.db import models
from django.db.models import CASCADE


class Company(models.Model):
  name = models.CharField(max_length=100)
  description = models.TextField()
  city = models.CharField(max_length=100)
  address = models.TextField()

  def __str__(self):
    return self.name


class Vacancy(models.Model):
  name = models.CharField(max_length=100)
  description = models.TextField()
  salary = models.FloatField()
  company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')

  def __str__(self):
    return self.name


class Application(models.Model):
  user_name = models.CharField(max_length=100)
  email = models.EmailField()
  vacancy = models.ForeignKey(Vacancy, on_delete=models.CASCADE, related_name='applications')
  def __str__(self):
    return self.user_name