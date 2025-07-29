# coding=utf-8
"""
    @project: maxkb
    @Author：虎
    @file： tests.py
    @date：2024/12/19 10:00
    @desc: 订单模块测试
"""
from decimal import Decimal
from django.test import TestCase
from django.contrib.auth import get_user_model
from order.models import Order, OrderItem, OrderStatusChoices, PaymentStatusChoices, PaymentMethodChoices

User = get_user_model()


class OrderModelTest(TestCase):
    """订单模型测试"""

    def setUp(self):
        """测试前准备"""
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass123'
        )

    def test_create_order(self):
        """测试创建订单"""
        order = Order.objects.create(
            user=self.user,
            shipping_address='测试地址',
            contact_phone='13800138000',
            contact_name='测试用户'
        )
        
        self.assertIsNotNone(order.order_number)
        self.assertEqual(order.user, self.user)
        self.assertEqual(order.status, OrderStatusChoices.PENDING)
        self.assertEqual(order.payment_status, PaymentStatusChoices.UNPAID)
        self.assertEqual(order.total_amount, Decimal('0.00'))

    def test_create_order_item(self):
        """测试创建订单项"""
        order = Order.objects.create(user=self.user)
        
        item = OrderItem.objects.create(
            order=order,
            product_id='PROD001',
            product_name='测试商品',
            product_type='SERVICE',
            quantity=2,
            unit_price=Decimal('99.99')
        )
        
        self.assertEqual(item.total_price, Decimal('199.98'))
        self.assertEqual(order.total_amount, Decimal('199.98'))

    def test_order_calculate_total(self):
        """测试订单总金额计算"""
        order = Order.objects.create(user=self.user)
        
        # 创建多个订单项
        OrderItem.objects.create(
            order=order,
            product_id='PROD001',
            product_name='商品1',
            product_type='SERVICE',
            quantity=1,
            unit_price=Decimal('100.00')
        )
        
        OrderItem.objects.create(
            order=order,
            product_id='PROD002',
            product_name='商品2',
            product_type='SERVICE',
            quantity=2,
            unit_price=Decimal('50.00')
        )
        
        # 重新计算总金额
        order.calculate_total()
        order.save()
        
        self.assertEqual(order.total_amount, Decimal('200.00'))

    def test_order_status_choices(self):
        """测试订单状态选择"""
        self.assertEqual(len(OrderStatusChoices.choices), 5)
        self.assertIn(('PENDING', '待处理'), OrderStatusChoices.choices)
        self.assertIn(('COMPLETED', '已完成'), OrderStatusChoices.choices)

    def test_payment_status_choices(self):
        """测试支付状态选择"""
        self.assertEqual(len(PaymentStatusChoices.choices), 4)
        self.assertIn(('UNPAID', '未支付'), PaymentStatusChoices.choices)
        self.assertIn(('PAID', '已支付'), PaymentStatusChoices.choices)

    def test_payment_method_choices(self):
        """测试支付方式选择"""
        self.assertEqual(len(PaymentMethodChoices.choices), 2)
        self.assertIn(('ALIPAY', '支付宝'), PaymentMethodChoices.choices)
        self.assertIn(('PAYPAL', 'PayPal'), PaymentMethodChoices.choices)


class OrderSerializerTest(TestCase):
    """订单序列化器测试"""

    def setUp(self):
        """测试前准备"""
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass123'
        )

    def test_order_serializer(self):
        """测试订单序列化器"""
        order = Order.objects.create(
            user=self.user,
            order_number='ORD202412191234567890',
            total_amount=Decimal('199.99'),
            status=OrderStatusChoices.COMPLETED,
            payment_status=PaymentStatusChoices.PAID
        )
        
        from order.serializers.order_serializers import OrderSerializer
        serializer = OrderSerializer(order)
        data = serializer.data
        
        self.assertEqual(data['order_number'], 'ORD202412191234567890')
        self.assertEqual(data['total_amount'], '199.99')
        self.assertEqual(data['status'], 'COMPLETED')
        self.assertEqual(data['status_display'], '已完成')
        self.assertEqual(data['payment_status'], 'PAID')
        self.assertEqual(data['payment_status_display'], '已支付') 