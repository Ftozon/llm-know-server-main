# coding=utf-8
"""
    @project: maxkb
    @Author：虎
    @file： order_api.py
    @date：2024/12/19 10:00
    @desc: 订单API文档定义
"""
from drf_yasg import openapi  # type: ignore
from django.utils.translation import gettext_lazy as _  # type: ignore


class OrderApi:
    """订单API文档"""

    @staticmethod
    def get_request_params_api():
        """获取请求参数API"""
        return [
            openapi.Parameter(name='order_number', in_=openapi.IN_QUERY, type=openapi.TYPE_STRING,
                              description=_("订单号")),
            openapi.Parameter(name='status', in_=openapi.IN_QUERY, type=openapi.TYPE_STRING,
                              description=_("订单状态")),
            openapi.Parameter(name='payment_status', in_=openapi.IN_QUERY, type=openapi.TYPE_STRING,
                              description=_("支付状态")),
            openapi.Parameter(name='start_time', in_=openapi.IN_QUERY, type=openapi.TYPE_STRING,
                              description=_("开始时间")),
            openapi.Parameter(name='end_time', in_=openapi.IN_QUERY, type=openapi.TYPE_STRING,
                              description=_("结束时间")),
            openapi.Parameter(name='user_id', in_=openapi.IN_QUERY, type=openapi.TYPE_STRING,
                              description=_("用户ID")),
        ]

    @staticmethod
    def get_response_body_api():
        """获取响应体API"""
        return openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'id': openapi.Schema(type=openapi.TYPE_STRING, title=_("订单ID")),
                'order_number': openapi.Schema(type=openapi.TYPE_STRING, title=_("订单号")),
                'user': openapi.Schema(type=openapi.TYPE_STRING, title=_("用户ID")),
                'total_amount': openapi.Schema(type=openapi.TYPE_NUMBER, title=_("订单总金额")),
                'status': openapi.Schema(type=openapi.TYPE_STRING, title=_("订单状态")),
                'status_display': openapi.Schema(type=openapi.TYPE_STRING, title=_("订单状态显示")),
                'payment_status': openapi.Schema(type=openapi.TYPE_STRING, title=_("支付状态")),
                'payment_status_display': openapi.Schema(type=openapi.TYPE_STRING, title=_("支付状态显示")),
                'payment_method': openapi.Schema(type=openapi.TYPE_STRING, title=_("支付方式")),
                'payment_method_display': openapi.Schema(type=openapi.TYPE_STRING, title=_("支付方式显示")),
                'payment_time': openapi.Schema(type=openapi.TYPE_STRING, title=_("支付时间")),
                'shipping_address': openapi.Schema(type=openapi.TYPE_STRING, title=_("收货地址")),
                'contact_phone': openapi.Schema(type=openapi.TYPE_STRING, title=_("联系电话")),
                'contact_name': openapi.Schema(type=openapi.TYPE_STRING, title=_("联系人")),
                'notes': openapi.Schema(type=openapi.TYPE_STRING, title=_("订单备注")),
                'items_count': openapi.Schema(type=openapi.TYPE_INTEGER, title=_("订单项数量")),
                'created_time': openapi.Schema(type=openapi.TYPE_STRING, title=_("创建时间")),
                'updated_time': openapi.Schema(type=openapi.TYPE_STRING, title=_("更新时间")),
            }
        )

    class Create:
        """创建订单API"""
        @staticmethod
        def get_request_body_api():
            return openapi.Schema(
                type=openapi.TYPE_OBJECT,
                required=['user_id', 'items'],
                properties={
                    'user_id': openapi.Schema(type=openapi.TYPE_STRING, title=_("用户ID")),
                    'shipping_address': openapi.Schema(type=openapi.TYPE_STRING, title=_("收货地址")),
                    'contact_phone': openapi.Schema(type=openapi.TYPE_STRING, title=_("联系电话")),
                    'contact_name': openapi.Schema(type=openapi.TYPE_STRING, title=_("联系人")),
                    'notes': openapi.Schema(type=openapi.TYPE_STRING, title=_("订单备注")),
                    'items': openapi.Schema(
                        type=openapi.TYPE_ARRAY,
                        items=openapi.Schema(
                            type=openapi.TYPE_OBJECT,
                            required=['product_id', 'product_name', 'product_type', 'quantity', 'unit_price'],
                            properties={
                                'product_id': openapi.Schema(type=openapi.TYPE_STRING, title=_("商品ID")),
                                'product_name': openapi.Schema(type=openapi.TYPE_STRING, title=_("商品名称")),
                                'product_type': openapi.Schema(type=openapi.TYPE_STRING, title=_("商品类型")),
                                'quantity': openapi.Schema(type=openapi.TYPE_INTEGER, title=_("数量")),
                                'unit_price': openapi.Schema(type=openapi.TYPE_NUMBER, title=_("单价")),
                                'product_meta': openapi.Schema(type=openapi.TYPE_OBJECT, title=_("商品元数据")),
                            }
                        ),
                        title=_("订单项列表")
                    ),
                }
            )

    class Update:
        """更新订单API"""
        @staticmethod
        def get_request_body_api():
            return openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties={
                    'status': openapi.Schema(type=openapi.TYPE_STRING, title=_("订单状态")),
                    'payment_status': openapi.Schema(type=openapi.TYPE_STRING, title=_("支付状态")),
                    'payment_method': openapi.Schema(type=openapi.TYPE_STRING, title=_("支付方式")),
                    'shipping_address': openapi.Schema(type=openapi.TYPE_STRING, title=_("收货地址")),
                    'contact_phone': openapi.Schema(type=openapi.TYPE_STRING, title=_("联系电话")),
                    'contact_name': openapi.Schema(type=openapi.TYPE_STRING, title=_("联系人")),
                    'notes': openapi.Schema(type=openapi.TYPE_STRING, title=_("订单备注")),
                }
            )

    class Operate:
        """订单操作API"""
        @staticmethod
        def get_request_params_api():
            return [
                openapi.Parameter(name='order_id', in_=openapi.IN_PATH, type=openapi.TYPE_STRING,
                                  required=True, description=_("订单ID")),
            ]

    class Statistics:
        """订单统计API"""
        @staticmethod
        def get_request_params_api():
            return [
                openapi.Parameter(name='user_id', in_=openapi.IN_QUERY, type=openapi.TYPE_STRING,
                                  description=_("用户ID")),
                openapi.Parameter(name='start_time', in_=openapi.IN_QUERY, type=openapi.TYPE_STRING,
                                  description=_("开始时间")),
                openapi.Parameter(name='end_time', in_=openapi.IN_QUERY, type=openapi.TYPE_STRING,
                                  description=_("结束时间")),
            ]

        @staticmethod
        def get_response_body_api():
            return openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties={
                    'total_orders': openapi.Schema(type=openapi.TYPE_INTEGER, title=_("总订单数")),
                    'total_amount': openapi.Schema(type=openapi.TYPE_NUMBER, title=_("总金额")),
                    'avg_amount': openapi.Schema(type=openapi.TYPE_NUMBER, title=_("平均金额")),
                    'status_statistics': openapi.Schema(
                        type=openapi.TYPE_ARRAY,
                        items=openapi.Schema(
                            type=openapi.TYPE_OBJECT,
                            properties={
                                'status': openapi.Schema(type=openapi.TYPE_STRING, title=_("状态")),
                                'count': openapi.Schema(type=openapi.TYPE_INTEGER, title=_("数量")),
                            }
                        ),
                        title=_("状态统计")
                    ),
                    'payment_statistics': openapi.Schema(
                        type=openapi.TYPE_ARRAY,
                        items=openapi.Schema(
                            type=openapi.TYPE_OBJECT,
                            properties={
                                'payment_status': openapi.Schema(type=openapi.TYPE_STRING, title=_("支付状态")),
                                'count': openapi.Schema(type=openapi.TYPE_INTEGER, title=_("数量")),
                            }
                        ),
                        title=_("支付状态统计")
                    ),
                }
            ) 