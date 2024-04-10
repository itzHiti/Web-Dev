from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from api.models import Product, Category
from django.views.decorators.http import require_http_methods

@require_http_methods(["GET"])
def product_list(request):
    products = Product.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)

@require_http_methods(["GET"])
def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = {'product': {
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active
        }}
    return JsonResponse(data)

@require_http_methods(["GET"])
def category_list(request):
    categories = Category.objects.all()
    data = {'categories': list(categories.values())}
    return JsonResponse(data)

@require_http_methods(["GET"])
def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {'category': {'name': category.name}}
    return JsonResponse(data)

@require_http_methods(["GET"])
def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.product_set.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)

# FOR TEST PURPOSES:

@require_http_methods(["POST"])
def add_category(request):
    name = request.POST.get('name')
    category = Category(name=name)
    category.save()
    return JsonResponse({'category': {'name': category.name}})

@require_http_methods(["POST"])
def add_product(request):
    name = request.POST.get('name')
    price = request.POST.get('price')
    description = request.POST.get('description')
    count = request.POST.get('count')
    is_active = request.POST.get('is_active')
    category_id = request.POST.get('category_id')
    product = Product(name=name, price=price, description=description, count=count, is_active=is_active, category_id=category_id)
    product.save()
    return JsonResponse({'product': {
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active
        }})