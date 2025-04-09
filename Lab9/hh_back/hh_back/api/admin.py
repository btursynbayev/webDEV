from django.contrib import admin
from .models import Company, Vacancy, VacancyClick


# Register your models here.

class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name','city')
    search_fields = ('name','city')
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name','company','salary')
    list_filter = ('company',)
    search_fields = ('name','description')
class VacancyClickAdmin(admin.ModelAdmin):
    list_display = ('full_name','email','vacancy','create_date')
admin.site.register(Company, CompanyAdmin)
admin.site.register(Vacancy, VacancyAdmin)
admin.site.register(VacancyClick, VacancyClickAdmin)