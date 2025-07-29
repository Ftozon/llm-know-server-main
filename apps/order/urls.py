# coding=utf-8
"""
    @project: maxkb
    @Author：虎
    @file： urls.py
    @date：2024/12/19 10:00
    @desc: 订单模块URL配置
"""
from django.urls import path

from order.views.order_views import OrderView

urlpatterns = [
    # 订单管理
    path('order/', OrderView.as_view(), name='order'),
    path('order/page/<int:current_page>/<int:page_size>/', OrderView.Page.as_view(), name='order_page'),
    path('order/<str:order_id>/', OrderView.Operate.as_view(), name='order_operate'),
    path('order/statistics/', OrderView.Statistics.as_view(), name='order_statistics'),
    
    # 我的订单
    path('order/my/', OrderView.MyOrders.as_view(), name='my_orders'),
    path('order/my/page/<int:current_page>/<int:page_size>/', OrderView.MyOrders.Page.as_view(), name='my_orders_page'),
] 