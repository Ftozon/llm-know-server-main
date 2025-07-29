# coding=utf-8
"""
    @project: MaxKB
    @Author：虎
    @file： i_payment_node.py
    @date：2024/11/4
    @desc:
"""
from typing import Type
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers
from application.flow.i_step_node import INode, NodeResult
from common.util.field_message import ErrMessage


class PaymentNodeParamsSerializer(serializers.Serializer):
    order_data = serializers.DictField(required=True, error_messages=ErrMessage.dict(_('订单信息')))


class IPaymentNode(INode):
    type = 'payment-node'
    view_type = 'single_view'

    def get_node_params_serializer_class(self) -> Type[serializers.Serializer]:
        return PaymentNodeParamsSerializer

    def _run(self):
        return self.execute(**self.node_params_serializer.data, **self.flow_params_serializer.data)

    def execute(self, order_data, **kwargs) -> NodeResult:
        pass
