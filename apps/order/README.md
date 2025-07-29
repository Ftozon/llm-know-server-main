# 订单管理模块

## 概述

订单管理模块是MaxKB系统的一个核心功能模块，提供了完整的订单管理功能，包括订单创建、查询、更新、删除和统计等功能。

## 功能特性

### 1. 订单管理
- ✅ 创建订单
- ✅ 查询订单列表（支持分页）
- ✅ 获取订单详情
- ✅ 更新订单信息
- ✅ 删除订单（软删除）
- ✅ 订单状态管理

### 2. 订单项管理
- ✅ 自动计算订单总金额
- ✅ 支持多种商品类型
- ✅ 商品元数据存储

### 3. 支付管理
- ✅ 多种支付方式支持
- ✅ 支付状态跟踪
- ✅ 支付时间记录

### 4. 统计功能
- ✅ 订单数量统计
- ✅ 订单金额统计
- ✅ 状态分布统计
- ✅ 支付状态统计

### 5. 权限控制
- ✅ 基于角色的权限控制
- ✅ 用户只能查看自己的订单
- ✅ 管理员可以查看所有订单

## 数据模型

### Order（订单表）
| 字段 | 类型 | 说明 |
|------|------|------|
| id | UUID | 主键ID |
| order_number | CharField | 订单号（自动生成） |
| user | ForeignKey | 用户ID |
| total_amount | DecimalField | 订单总金额 |
| status | CharField | 订单状态 |
| payment_status | CharField | 支付状态 |
| payment_method | CharField | 支付方式 |
| payment_time | DateTimeField | 支付时间 |
| shipping_address | TextField | 收货地址 |
| contact_phone | CharField | 联系电话 |
| contact_name | CharField | 联系人 |
| notes | TextField | 订单备注 |
| is_deleted | BooleanField | 是否删除 |

### OrderItem（订单项表）
| 字段 | 类型 | 说明 |
|------|------|------|
| id | UUID | 主键ID |
| order | ForeignKey | 订单ID |
| product_id | CharField | 商品ID |
| product_name | CharField | 商品名称 |
| product_type | CharField | 商品类型 |
| quantity | IntegerField | 数量 |
| unit_price | DecimalField | 单价 |
| total_price | DecimalField | 总价 |
| product_meta | JSONField | 商品元数据 |

## API接口

### 1. 创建订单
```
POST /api/order/
```

### 2. 获取订单列表
```
GET /api/order/
```

### 3. 获取订单分页列表
```
GET /api/order/page/{current_page}/{page_size}/
```

### 4. 获取订单详情
```
GET /api/order/{order_id}/
```

### 5. 更新订单
```
PUT /api/order/{order_id}/
```

### 6. 删除订单
```
DELETE /api/order/{order_id}/
```

### 7. 获取订单统计
```
GET /api/order/statistics/
```

### 8. 获取我的订单列表
```
GET /api/order/my/
```

### 9. 获取我的订单分页列表
```
GET /api/order/my/page/{current_page}/{page_size}/
```

## 订单状态

| 状态 | 说明 |
|------|------|
| PENDING | 待处理 |
| PROCESSING | 处理中 |
| COMPLETED | 已完成 |
| CANCELLED | 已取消 |
| REFUNDED | 已退款 |

## 支付状态

| 状态 | 说明 |
|------|------|
| UNPAID | 未支付 |
| PAID | 已支付 |
| PARTIALLY_PAID | 部分支付 |
| REFUNDED | 已退款 |

## 支付方式

| 方式 | 说明 |
|------|------|
| ALIPAY | 支付宝 |
| PAYPAL | PayPal |

## 权限说明

### 订单权限
- `ORDER_READ`: 读取订单权限
- `ORDER_CREATE`: 创建订单权限
- `ORDER_EDIT`: 编辑订单权限
- `ORDER_DELETE`: 删除订单权限
- `ORDER_MANAGE`: 管理订单权限（仅管理员）

### 角色权限
- **普通用户**: 可以创建、查看、编辑、删除自己的订单
- **管理员**: 可以查看、编辑、删除所有订单

## 数据库迁移

运行以下命令创建数据库表：

```bash
python manage.py makemigrations order
python manage.py migrate
```

## 测试

运行测试命令：

```bash
python manage.py test order.tests
```

## 注意事项

1. 订单号会自动生成，格式为：`ORD + 年月日时分秒 + 4位随机数`
2. 订单项的总价会自动计算：`总价 = 单价 × 数量`
3. 订单的总金额会自动计算：`总金额 = 所有订单项总价之和`
4. 删除订单采用软删除方式，不会真正删除数据
5. 用户只能查看和操作自己的订单，管理员可以查看所有订单 