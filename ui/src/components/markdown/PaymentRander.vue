<template>
  <div>
    <pre v-if="orderInfo">{{ orderInfo }}</pre>
    <el-radio-group v-model="paymentMethod" size="small">
      <el-radio label="ALIPAY">{{ $t('views.applicationWorkflow.nodes.paymentNode.alipay') }}</el-radio>
      <el-radio label="PAYPAL">{{ $t('views.applicationWorkflow.nodes.paymentNode.paypal') }}</el-radio>
    </el-radio-group>
    <el-button
      class="mt-2"
      type="primary"
      :disabled="disabled || isSubmit"
      @click="submit"
    >{{ $t('views.applicationWorkflow.nodes.paymentNode.confirm') }}</el-button>
  </div>
</template>
<script setup lang="ts">
import { createOrder } from '@/api/order'
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
const props = withDefaults(
  defineProps<{
    orderData: string
    disabled?: boolean
    sendMessage?: (question: string, type: 'old' | 'new', other_params_data?: any) => void
    child_node?: any
    chat_record_id?: string
    runtime_node_id?: string
  }>(),
  { disabled: false }
)
const orderSetting = computed(() => {
  if (props.orderData) {
    try {
      return JSON.parse(props.orderData)
    } catch (e) {
      return {}
    }
  }
  return {}
})
const isSubmit = ref(orderSetting.value.is_submit)
const paymentMethod = ref<'ALIPAY' | 'PAYPAL'>('ALIPAY')
const orderInfo = computed(() => JSON.stringify(orderSetting.value.order_data, null, 2))

const totalAmount = computed(() => {
  const data: any = orderSetting.value.order_data || {}
  if (data.total_amount !== undefined) return data.total_amount
  if (Array.isArray(data.items)) {
    return data.items.reduce(
      (sum: number, item: any) => sum + Number(item.unit_price) * Number(item.quantity),
      0
    )
  }
  return 0
})

const openApp = () => {
  const amount = totalAmount.value
  let url = ''
  if (paymentMethod.value === 'ALIPAY') {
    url = `alipays://platformapi/startapp?amount=${amount}`
  } else {
    url = `paypal://pay?amount=${amount}`
  }
  window.location.href = url
}

const submit = async () => {
  if (isSubmit.value) return
  try {
    const data = { ...orderSetting.value.order_data, payment_method: paymentMethod.value }
    const res = await createOrder(data)
    isSubmit.value = true
    openApp()
    if (props.sendMessage) {
      props.sendMessage('', 'old', {
        child_node: props.child_node,
        runtime_node_id: props.runtime_node_id,
        chat_record_id: props.chat_record_id,
        node_data: data
      })
    }
    ElMessage.success('支付成功')
  } catch (e) {
    ElMessage.error('支付失败')
  }
}
</script>
<style lang="scss" scoped></style>
