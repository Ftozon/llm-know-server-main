# coding=utf-8
"""
    @project: MaxKB
    @Author：虎
    @file： base_payment_node.py
    @date：2024/11/4
    @desc:
"""
import json
from application.flow.i_step_node import NodeResult
from application.flow.step_node.payment_node.i_payment_node import IPaymentNode


class BasePaymentNode(IPaymentNode):
    def save_context(self, details, workflow_manage):
        self.context['order_data'] = details.get('order_data')
        self.context['result'] = details.get('result')
        self.context['is_submit'] = details.get('is_submit', False)

    def execute(self, order_data, **kwargs) -> NodeResult:
        payment_setting = {
            'order_data': order_data,
            'runtime_node_id': self.runtime_node_id,
            'chat_record_id': self.flow_params_serializer.data.get('chat_record_id'),
            'is_submit': self.context.get('is_submit', False)
        }
        value = f"<payment_rander>{json.dumps(payment_setting, ensure_ascii=False)}</payment_rander>"
        return NodeResult({'result': value, 'order_data': order_data}, {})
