# coding=utf-8
"""
    @project: maxkb
    @Author：虎
    @file： order_serializers.py
    @date：2024/12/19 10:00
    @desc: 订单序列化器
"""
from decimal import Decimal
from django.db import transaction
from django.utils.translation import gettext_lazy as _  # type: ignore
from rest_framework import serializers

from order.models import Order, OrderItem, OrderStatusChoices, PaymentStatusChoices, PaymentMethodChoices
from common.util.field_message import ErrMessage
from common.response.result import Page


class OrderItemSerializer(serializers.ModelSerializer):
    """订单项序列化器"""
    
    class Meta:
        model = OrderItem
        fields = ['id', 'product_id', 'product_name', 'product_type', 'quantity', 'unit_price', 'total_price', 'product_meta']


class OrderItemCreateSerializer(serializers.Serializer):
    """创建订单项序列化器"""
    product_id = serializers.CharField(required=True, error_messages=ErrMessage.char(_("商品ID")))
    product_name = serializers.CharField(required=True, max_length=200, error_messages=ErrMessage.char(_("商品名称")))
    product_type = serializers.CharField(required=True, max_length=50, error_messages=ErrMessage.char(_("商品类型")))
    quantity = serializers.IntegerField(required=True, min_value=1, error_messages=ErrMessage.integer(_("数量")))
    unit_price = serializers.DecimalField(required=True, max_digits=10, decimal_places=2, min_value=Decimal('0.01'), error_messages=ErrMessage.decimal(_("单价")))
    product_meta = serializers.JSONField(required=False, default=dict, error_messages=ErrMessage.json(_("商品元数据")))


class OrderSerializer(serializers.ModelSerializer):
    """订单序列化器"""
    items = OrderItemSerializer(many=True, read_only=True, source='orderitem_set')
    items_count = serializers.IntegerField(read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    payment_status_display = serializers.CharField(source='get_payment_status_display', read_only=True)
    payment_method_display = serializers.CharField(source='get_payment_method_display', read_only=True)

    class Meta:
        model = Order
        fields = [
            'id', 'order_number', 'user', 'total_amount', 'status', 'status_display',
            'payment_status', 'payment_status_display', 'payment_method', 'payment_method_display',
            'payment_time', 'shipping_address', 'contact_phone', 'contact_name',
            'notes', 'items', 'items_count', 'created_time', 'updated_time'
        ]
        read_only_fields = ['id', 'order_number', 'total_amount', 'created_time', 'updated_time']


class OrderCreateSerializer(serializers.Serializer):
    """创建订单序列化器"""
    user_id = serializers.UUIDField(required=True, error_messages=ErrMessage.uuid(_("用户ID")))
    shipping_address = serializers.CharField(required=False, allow_blank=True, error_messages=ErrMessage.char(_("收货地址")))
    contact_phone = serializers.CharField(required=False, allow_blank=True, max_length=20, error_messages=ErrMessage.char(_("联系电话")))
    contact_name = serializers.CharField(required=False, allow_blank=True, max_length=100, error_messages=ErrMessage.char(_("联系人")))
    notes = serializers.CharField(required=False, allow_blank=True, error_messages=ErrMessage.char(_("订单备注")))
    items = OrderItemCreateSerializer(many=True, required=True, error_messages=ErrMessage.list(_("订单项")))

    def validate_items(self, value):
        if not value:
            raise serializers.ValidationError(_("订单项不能为空"))
        return value

    @transaction.atomic
    def create(self, validated_data):
        items_data = validated_data.pop('items')
        user_id = validated_data.pop('user_id')
        
        # 创建订单
        order = Order.objects.create(user_id=user_id, **validated_data)
        
        # 创建订单项
        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)
        
        # 计算总金额
        order.calculate_total()
        order.save()
        
        return order


class OrderUpdateSerializer(serializers.Serializer):
    """更新订单序列化器"""
    status = serializers.ChoiceField(required=False, choices=OrderStatusChoices.choices, error_messages=ErrMessage.char(_("订单状态")))
    payment_status = serializers.ChoiceField(required=False, choices=PaymentStatusChoices.choices, error_messages=ErrMessage.char(_("支付状态")))
    payment_method = serializers.ChoiceField(required=False, choices=PaymentMethodChoices.choices, allow_null=True, error_messages=ErrMessage.char(_("支付方式")))
    shipping_address = serializers.CharField(required=False, allow_blank=True, error_messages=ErrMessage.char(_("收货地址")))
    contact_phone = serializers.CharField(required=False, allow_blank=True, max_length=20, error_messages=ErrMessage.char(_("联系电话")))
    contact_name = serializers.CharField(required=False, allow_blank=True, max_length=100, error_messages=ErrMessage.char(_("联系人")))
    notes = serializers.CharField(required=False, allow_blank=True, error_messages=ErrMessage.char(_("订单备注")))


class OrderQuerySerializer(serializers.Serializer):
    """订单查询序列化器"""
    order_number = serializers.CharField(required=False, error_messages=ErrMessage.char(_("订单号")))
    status = serializers.ChoiceField(required=False, choices=OrderStatusChoices.choices, error_messages=ErrMessage.char(_("订单状态")))
    payment_status = serializers.ChoiceField(required=False, choices=PaymentStatusChoices.choices, error_messages=ErrMessage.char(_("支付状态")))
    start_time = serializers.DateTimeField(required=False, error_messages=ErrMessage.datetime(_("开始时间")))
    end_time = serializers.DateTimeField(required=False, error_messages=ErrMessage.datetime(_("结束时间")))
    user_id = serializers.UUIDField(required=False, error_messages=ErrMessage.uuid(_("用户ID")))

    def get_query_set(self):
        from order.models import Order
        queryset = Order.objects.filter(is_deleted=False)
        
        if self.validated_data.get('order_number'):
            queryset = queryset.filter(order_number__icontains=self.validated_data['order_number'])
        
        if self.validated_data.get('status'):
            queryset = queryset.filter(status=self.validated_data['status'])
        
        if self.validated_data.get('payment_status'):
            queryset = queryset.filter(payment_status=self.validated_data['payment_status'])
        
        if self.validated_data.get('user_id'):
            queryset = queryset.filter(user_id=self.validated_data['user_id'])
        
        if self.validated_data.get('start_time'):
            queryset = queryset.filter(created_time__gte=self.validated_data['start_time'])
        
        if self.validated_data.get('end_time'):
            queryset = queryset.filter(created_time__lte=self.validated_data['end_time'])
        
        return queryset

    def list(self, with_valid=True):
        if with_valid:
            self.is_valid(raise_exception=True)
        
        queryset = self.get_query_set()
        orders = []
        for order in queryset:
            order_data = OrderSerializer(order).data
            orders.append(order_data)
        
        return orders

    def page(self, current_page: int, page_size: int, with_valid=True):
        if with_valid:
            self.is_valid(raise_exception=True)
        
        queryset = self.get_query_set()
        total = queryset.count()
        start = (current_page - 1) * page_size
        end = start + page_size
        
        orders = []
        for order in queryset[start:end]:
            order_data = OrderSerializer(order).data
            orders.append(order_data)
        
        return Page(total, orders, current_page, page_size)


class OrderStatisticsSerializer(serializers.Serializer):
    """订单统计序列化器"""
    user_id = serializers.UUIDField(required=False, error_messages=ErrMessage.uuid(_("用户ID")))
    start_time = serializers.DateTimeField(required=False, error_messages=ErrMessage.datetime(_("开始时间")))
    end_time = serializers.DateTimeField(required=False, error_messages=ErrMessage.datetime(_("结束时间")))

    def get_statistics(self):
        from django.db.models import Count, Sum, Avg
        from order.models import Order
        
        queryset = Order.objects.filter(is_deleted=False)
        
        if self.validated_data.get('user_id'):
            queryset = queryset.filter(user_id=self.validated_data['user_id'])
        
        if self.validated_data.get('start_time'):
            queryset = queryset.filter(created_time__gte=self.validated_data['start_time'])
        
        if self.validated_data.get('end_time'):
            queryset = queryset.filter(created_time__lte=self.validated_data['end_time'])
        
        # 统计信息
        total_orders = queryset.count()
        total_amount = queryset.aggregate(total=Sum('total_amount'))['total'] or Decimal('0.00')
        avg_amount = queryset.aggregate(avg=Avg('total_amount'))['avg'] or Decimal('0.00')
        
        # 按状态统计
        status_stats = queryset.values('status').annotate(count=Count('id'))
        
        # 按支付状态统计
        payment_stats = queryset.values('payment_status').annotate(count=Count('id'))
        
        return {
            'total_orders': total_orders,
            'total_amount': total_amount,
            'avg_amount': avg_amount,
            'status_statistics': list(status_stats),
            'payment_statistics': list(payment_stats)
        } 