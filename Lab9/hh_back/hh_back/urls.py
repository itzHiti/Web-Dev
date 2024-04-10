from django.contrib import admin
from django.urls import path
from api.views import (
    CompanyListCreateAPIView,
    CompanyRetrieveAPIView,
    VacancyListByCompanyAPIView,
    VacancyListCreateAPIView,
    VacancyRetrieveAPIView,
    TopTenVacanciesAPIView
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/', CompanyListCreateAPIView.as_view(), name='company-list-create'),
    path('api/companies/<int:id>/', CompanyRetrieveAPIView.as_view(), name='company-retrieve'),
    path('api/companies/<int:id>/vacancies/', VacancyListByCompanyAPIView.as_view(), name='vacancies-by-company'),
    path('api/vacancies/', VacancyListCreateAPIView.as_view(), name='vacancy-list-create'),
    path('api/vacancies/<int:id>/', VacancyRetrieveAPIView.as_view(), name='vacancy-retrieve'),
    path('api/vacancies/top_ten/', TopTenVacanciesAPIView.as_view(), name='top-ten-vacancies'),
]
