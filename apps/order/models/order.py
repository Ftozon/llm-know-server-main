# coding=utf-8
"""
    @project: maxkb
    @Author：虎
    @file： order.py
    @date：2024/12/19 10:00
    @desc: 订单数据模型
"""
import uuid
from decimal import Decimal
from django.db import models  # type: ignore
from django.utils.translation import gettext_lazy as _  # type: ignore

from common.mixins.app_model_mixin import AppModelMixin
from users.models import User


class OrderStatusChoices(models.TextChoices):
    """订单状态"""
    PENDING = 'PENDING', _('待处理')
    PROCESSING = 'PROCESSING', _('处理中')
    COMPLETED = 'COMPLETED', _('已完成')
    CANCELLED = 'CANCELLED', _('已取消')
    REFUNDED = 'REFUNDED', _('已退款')


class PaymentStatusChoices(models.TextChoices):
    """支付状态"""
    UNPAID = 'UNPAID', _('未支付')
    PAID = 'PAID', _('已支付')
    PARTIALLY_PAID = 'PARTIALLY_PAID', _('部分支付')
    REFUNDED = 'REFUNDED', _('已退款')


class PaymentMethodChoices(models.TextChoices):
    """支付方式"""
    ALIPAY = 'ALIPAY', _('支付宝')
    PAYPAL = 'PAYPAL', _('PayPal')


class Order(AppModelMixin):
    """
    订单表
    """
    id = models.UUIDField(primary_key=True, max_length=128, default=uuid.uuid1, editable=False, verbose_name="主键id")
    order_number = models.CharField(max_length=50, unique=True, verbose_name="订单号")
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="用户")
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=Decimal('0.00'), verbose_name="订单总金额")
    status = models.CharField(max_length=20, choices=OrderStatusChoices.choices, default=OrderStatusChoices.PENDING, verbose_name="订单状态")
    payment_status = models.CharField(max_length=20, choices=PaymentStatusChoices.choices, default=PaymentStatusChoices.UNPAID, verbose_name="支付状态")
    payment_method = models.CharField(max_length=20, choices=PaymentMethodChoices.choices, null=True, blank=True, verbose_name="支付方式")
    payment_time = models.DateTimeField(null=True, blank=True, verbose_name="支付时间")
    shipping_address = models.TextField(null=True, blank=True, verbose_name="收货地址")
    contact_phone = models.CharField(max_length=20, null=True, blank=True, verbose_name="联系电话")
    contact_name = models.CharField(max_length=100, null=True, blank=True, verbose_name="联系人")
    notes = models.TextField(null=True, blank=True, verbose_name="订单备注")
    is_deleted = models.BooleanField(default=False, verbose_name="是否删除")

    class Meta:
        db_table = "order"
        ordering = ['-created_time']
        verbose_name = _("订单")
        verbose_name_plural = _("订单")

    def __str__(self):
        return f"订单 {self.order_number}"

    def save(self, *args, **kwargs):
        if not self.order_number:
            # 生成订单号：年月日时分秒+4位随机数
            import time
            import random
            timestamp = time.strftime('%Y%m%d%H%M%S')
            random_num = str(random.randint(1000, 9999))
            self.order_number = f"ORD{timestamp}{random_num}"
        super().save(*args, **kwargs)

    @property
    def items_count(self):
        """订单商品数量"""
        return self.orderitem_set.count()

    def calculate_total(self):
        """计算订单总金额"""
        total = sum(item.total_price for item in self.orderitem_set.all())
        self.total_amount = total
        return total


class OrderItem(AppModelMixin):
    """
    订单项表
    """
    id = models.UUIDField(primary_key=True, max_length=128, default=uuid.uuid1, editable=False, verbose_name="主键id")
    order = models.ForeignKey(Order, on_delete=models.CASCADE, verbose_name="订单")
    product_id = models.CharField(max_length=128, verbose_name="商品ID")
    product_name = models.CharField(max_length=200, verbose_name="商品名称")
    product_type = models.CharField(max_length=50, verbose_name="商品类型")
    quantity = models.IntegerField(default=1, verbose_name="数量")
    unit_price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="单价")
    total_price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="总价")
    product_meta = models.JSONField(default=dict, verbose_name="商品元数据")

    class Meta:
        db_table = "order_item"
        verbose_name = _("订单项")
        verbose_name_plural = _("订单项")

    def __str__(self):
        return f"{self.product_name} x {self.quantity}"

    def save(self, *args, **kwargs):
        # 自动计算总价
        self.total_price = self.unit_price * self.quantity
        super().save(*args, **kwargs)
        # 更新订单总金额
        self.order.calculate_total()
        self.order.save() 