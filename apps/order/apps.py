# coding=utf-8
"""
    @project: maxkb
    @Author：虎
    @file： apps.py
    @date：2024/12/19 10:00
    @desc: 订单管理模块应用配置
"""
from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class OrderConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'order'
    verbose_name = _('订单管理') 