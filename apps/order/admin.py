# coding=utf-8
"""
    @project: maxkb
    @Author：虎
    @file： admin.py
    @date：2024/12/19 10:00
    @desc: 订单管理模块后台配置
"""
from django.contrib import admin
from order.models import Order, OrderItem


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'order_number', 'user', 'total_amount', 'status', 'payment_status', 'created_time']
    list_filter = ['status', 'payment_status', 'created_time']
    search_fields = ['order_number', 'user__username', 'user__email']
    readonly_fields = ['order_number', 'created_time', 'updated_time']
    ordering = ['-created_time']


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ['id', 'order', 'product_name', 'quantity', 'unit_price', 'total_price']
    list_filter = ['created_time']
    search_fields = ['order__order_number', 'product_name']
    readonly_fields = ['created_time', 'updated_time'] 