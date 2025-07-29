# coding=utf-8
"""
    @project: maxkb
    @Author：虎
    @file： order_views.py
    @date：2024/12/19 10:00
    @desc: 订单视图
"""
from django.utils.translation import gettext_lazy as _  # type: ignore
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import action
from rest_framework.request import Request
from rest_framework.views import APIView

from order.models import Order
from order.serializers.order_serializers import (
    OrderSerializer, OrderCreateSerializer, OrderUpdateSerializer,
    OrderQuerySerializer, OrderStatisticsSerializer
)
from order.swagger_api.order_api import OrderApi
from common.auth import TokenAuth, has_permissions
from common.constants.permission_constants import PermissionConstants, CompareConstants
from common.exception.app_exception import NotFound404
from common.response import result
from common.util.common import query_params_to_single_dict


class OrderView(APIView):
    """订单视图"""
    authentication_classes = [TokenAuth]

    @action(methods=['POST'], detail=False)
    @swagger_auto_schema(operation_summary=_("创建订单"),
                         operation_id=_("创建订单"),
                         request_body=OrderApi.Create.get_request_body_api(),
                         responses=result.get_api_response(OrderApi.get_response_body_api()),
                         tags=[_('订单管理')])
    @has_permissions(PermissionConstants.ORDER_CREATE, compare=CompareConstants.AND)
    def post(self, request: Request):
        """创建订单"""
        serializer = OrderCreateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            order = serializer.save()
            return result.success(OrderSerializer(order).data)

    @action(methods=['GET'], detail=False)
    @swagger_auto_schema(operation_summary=_("获取订单列表"),
                         operation_id=_("获取订单列表"),
                         manual_parameters=OrderApi.get_request_params_api(),
                         responses=result.get_api_array_response(OrderApi.get_response_body_api()),
                         tags=[_('订单管理')])
    @has_permissions(PermissionConstants.ORDER_READ, compare=CompareConstants.AND)
    def get(self, request: Request):
        """获取订单列表"""
        query_data = {**query_params_to_single_dict(request.query_params)}
        serializer = OrderQuerySerializer(data=query_data)
        if serializer.is_valid(raise_exception=True):
            orders = serializer.list()
            return result.success(orders)

    class Page(APIView):
        """订单分页视图"""
        authentication_classes = [TokenAuth]

        @action(methods=['GET'], detail=False)
        @swagger_auto_schema(operation_summary=_("获取订单分页列表"),
                             operation_id=_("获取订单分页列表"),
                             manual_parameters=result.get_page_request_params(OrderApi.get_request_params_api()),
                             responses=result.get_page_api_response(OrderApi.get_response_body_api()),
                             tags=[_('订单管理')])
        @has_permissions(PermissionConstants.ORDER_READ, compare=CompareConstants.AND)
        def get(self, request: Request, current_page: int, page_size: int):
            """获取订单分页列表"""
            query_data = {**query_params_to_single_dict(request.query_params)}
            serializer = OrderQuerySerializer(data=query_data)
            if serializer.is_valid(raise_exception=True):
                page_data = serializer.page(current_page, page_size)
                return result.success(page_data)

    class Operate(APIView):
        """订单操作视图"""
        authentication_classes = [TokenAuth]

        @action(methods=['GET'], detail=False)
        @swagger_auto_schema(operation_summary=_("获取订单详情"),
                             operation_id=_("获取订单详情"),
                             manual_parameters=OrderApi.Operate.get_request_params_api(),
                             responses=result.get_api_response(OrderApi.get_response_body_api()),
                             tags=[_('订单管理')])
        @has_permissions(PermissionConstants.ORDER_READ, compare=CompareConstants.AND)
        def get(self, request: Request, order_id: str):
            """获取订单详情"""
            try:
                order = Order.objects.get(id=order_id, is_deleted=False)
                return result.success(OrderSerializer(order).data)
            except Order.DoesNotExist:
                raise NotFound404(404, _("订单不存在"))

        @action(methods=['PUT'], detail=False)
        @swagger_auto_schema(operation_summary=_("更新订单"),
                             operation_id=_("更新订单"),
                             manual_parameters=OrderApi.Operate.get_request_params_api(),
                             request_body=OrderApi.Update.get_request_body_api(),
                             responses=result.get_api_response(OrderApi.get_response_body_api()),
                             tags=[_('订单管理')])
        @has_permissions(PermissionConstants.ORDER_EDIT, compare=CompareConstants.AND)
        def put(self, request: Request, order_id: str):
            """更新订单"""
            try:
                order = Order.objects.get(id=order_id, is_deleted=False)
                serializer = OrderUpdateSerializer(data=request.data, partial=True)
                if serializer.is_valid(raise_exception=True):
                    for attr, value in serializer.validated_data.items():
                        setattr(order, attr, value)
                    order.save()
                    return result.success(OrderSerializer(order).data)
            except Order.DoesNotExist:
                raise NotFound404(404, _("订单不存在"))

        @action(methods=['DELETE'], detail=False)
        @swagger_auto_schema(operation_summary=_("删除订单"),
                             operation_id=_("删除订单"),
                             manual_parameters=OrderApi.Operate.get_request_params_api(),
                             responses=result.get_default_response(),
                             tags=[_('订单管理')])
        @has_permissions(PermissionConstants.ORDER_DELETE, compare=CompareConstants.AND)
        def delete(self, request: Request, order_id: str):
            """删除订单（软删除）"""
            try:
                order = Order.objects.get(id=order_id, is_deleted=False)
                order.is_deleted = True
                order.save()
                return result.success(True)
            except Order.DoesNotExist:
                raise NotFound404(404, _("订单不存在"))

    class Statistics(APIView):
        """订单统计视图"""
        authentication_classes = [TokenAuth]

        @action(methods=['GET'], detail=False)
        @swagger_auto_schema(operation_summary=_("获取订单统计"),
                             operation_id=_("获取订单统计"),
                             manual_parameters=OrderApi.Statistics.get_request_params_api(),
                             responses=result.get_api_response(OrderApi.Statistics.get_response_body_api()),
                             tags=[_('订单管理')])
        @has_permissions(PermissionConstants.ORDER_READ, compare=CompareConstants.AND)
        def get(self, request: Request):
            """获取订单统计"""
            query_data = {**query_params_to_single_dict(request.query_params)}
            serializer = OrderStatisticsSerializer(data=query_data)
            if serializer.is_valid(raise_exception=True):
                statistics = serializer.get_statistics()
                return result.success(statistics)

    class MyOrders(APIView):
        """我的订单视图"""
        authentication_classes = [TokenAuth]

        @action(methods=['GET'], detail=False)
        @swagger_auto_schema(operation_summary=_("获取我的订单列表"),
                             operation_id=_("获取我的订单列表"),
                             manual_parameters=OrderApi.get_request_params_api(),
                             responses=result.get_api_array_response(OrderApi.get_response_body_api()),
                             tags=[_('订单管理')])
        @has_permissions(PermissionConstants.ORDER_READ, compare=CompareConstants.AND)
        def get(self, request: Request):
            """获取我的订单列表"""
            query_data = {**query_params_to_single_dict(request.query_params), 'user_id': request.user.id}
            serializer = OrderQuerySerializer(data=query_data)
            if serializer.is_valid(raise_exception=True):
                orders = serializer.list()
                return result.success(orders)

        class Page(APIView):
            """我的订单分页视图"""
            authentication_classes = [TokenAuth]

            @action(methods=['GET'], detail=False)
            @swagger_auto_schema(operation_summary=_("获取我的订单分页列表"),
                                 operation_id=_("获取我的订单分页列表"),
                                 manual_parameters=result.get_page_request_params(OrderApi.get_request_params_api()),
                                 responses=result.get_page_api_response(OrderApi.get_response_body_api()),
                                 tags=[_('订单管理')])
            @has_permissions(PermissionConstants.ORDER_READ, compare=CompareConstants.AND)
            def get(self, request: Request, current_page: int, page_size: int):
                """获取我的订单分页列表"""
                query_data = {**query_params_to_single_dict(request.query_params), 'user_id': request.user.id}
                serializer = OrderQuerySerializer(data=query_data)
                if serializer.is_valid(raise_exception=True):
                    page_data = serializer.page(current_page, page_size)
                    return result.success(page_data) 