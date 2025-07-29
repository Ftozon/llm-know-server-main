# coding=utf-8
"""
    @project: maxkb
    @Author：虎
    @file： 0001_initial.py
    @date：2024/12/19 10:00
    @desc: 订单模块初始迁移
"""
import uuid
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid1, editable=False, max_length=128, primary_key=True, serialize=False, verbose_name='主键id')),
                ('order_number', models.CharField(max_length=50, unique=True, verbose_name='订单号')),
                ('total_amount', models.DecimalField(decimal_places=2, default=0.0, max_digits=10, verbose_name='订单总金额')),
                ('status', models.CharField(choices=[('PENDING', '待处理'), ('PROCESSING', '处理中'), ('COMPLETED', '已完成'), ('CANCELLED', '已取消'), ('REFUNDED', '已退款')], default='PENDING', max_length=20, verbose_name='订单状态')),
                ('payment_status', models.CharField(choices=[('UNPAID', '未支付'), ('PAID', '已支付'), ('PARTIALLY_PAID', '部分支付'), ('REFUNDED', '已退款')], default='UNPAID', max_length=20, verbose_name='支付状态')),
                ('payment_method', models.CharField(blank=True, choices=[('ALIPAY', '支付宝'), ('PAYPAL', 'PayPal')], max_length=20, null=True, verbose_name='支付方式')),
                ('payment_time', models.DateTimeField(blank=True, null=True, verbose_name='支付时间')),
                ('shipping_address', models.TextField(blank=True, null=True, verbose_name='收货地址')),
                ('contact_phone', models.CharField(blank=True, max_length=20, null=True, verbose_name='联系电话')),
                ('contact_name', models.CharField(blank=True, max_length=100, null=True, verbose_name='联系人')),
                ('notes', models.TextField(blank=True, null=True, verbose_name='订单备注')),
                ('is_deleted', models.BooleanField(default=False, verbose_name='是否删除')),
                ('created_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('updated_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user', verbose_name='用户')),
            ],
            options={
                'verbose_name': '订单',
                'verbose_name_plural': '订单',
                'db_table': 'order',
                'ordering': ['-created_time'],
            },
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid1, editable=False, max_length=128, primary_key=True, serialize=False, verbose_name='主键id')),
                ('product_id', models.CharField(max_length=128, verbose_name='商品ID')),
                ('product_name', models.CharField(max_length=200, verbose_name='商品名称')),
                ('product_type', models.CharField(max_length=50, verbose_name='商品类型')),
                ('quantity', models.IntegerField(default=1, verbose_name='数量')),
                ('unit_price', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='单价')),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='总价')),
                ('product_meta', models.JSONField(default=dict, verbose_name='商品元数据')),
                ('created_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('updated_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='order.order', verbose_name='订单')),
            ],
            options={
                'verbose_name': '订单项',
                'verbose_name_plural': '订单项',
                'db_table': 'order_item',
            },
        ),
    ] 