<template>
  <div class="order-manage-container">
    <el-card>
      <div class="flex-between mb-16">
        <h2>{{ $t('订单管理') }}</h2>
        <el-input v-model="searchValue" :placeholder="$t('请输入订单号')" class="w-240" clearable @change="fetchOrders" />
      </div>
      <el-table :data="orders" v-loading="loading" style="width: 100%">
        <el-table-column prop="order_number" label="订单号" />
        <el-table-column prop="total_amount" label="总金额" />
        <el-table-column prop="status_display" label="订单状态" />
        <el-table-column prop="payment_status_display" label="支付状态" />
        <el-table-column prop="payment_method_display" label="支付方式" />
        <el-table-column prop="created_time" label="创建时间" />
        <el-table-column prop="user" label="用户ID" v-if="isAdmin" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { getCurrentUser, isAdminUser } from '@/utils/user'
import { getOrderList, getMyOrderList } from '@/api/order'

const orders = ref<any[]>([])
const loading = ref(false)
const searchValue = ref('')
const isAdmin = computed(() => isAdminUser())

const fetchOrders = async () => {
  loading.value = true
  try {
    let res
    if (isAdmin.value) {
      res = await getOrderList({ order_number: searchValue.value })
    } else {
      res = await getMyOrderList({ order_number: searchValue.value })
    }
    orders.value = res.data || []
  } catch (e) {
    ElMessage.error('获取订单失败')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchOrders()
})
</script>

<style scoped>
.order-manage-container {
  padding: 24px;
}
.mb-16 {
  margin-bottom: 16px;
}
.w-240 {
  width: 240px;
}
</style> 