<template>
  <div class="top-menu-container flex align-center h-full">
    <MenuItem
        :menu="menu"
        v-hasPermission="menu.meta?.permission"
        v-for="(menu, index) in topMenuList"
        :key="index"
    >
    </MenuItem>
    <div class="menu-item-container" @click="$router.push('/order-manage')">
      <span>{{ $t('订单管理') }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import {computed} from 'vue'
import {getChildRouteListByPathAndName} from '@/router/index'
import MenuItem from './MenuItem.vue'

const topMenuList = computed(() => {
  return getChildRouteListByPathAndName('/', 'home')
})
</script>
<style lang="scss" scope>
@media screen and (max-width: 768px) {
  .top-menu-container {

    padding: 0 0px;


    .menu-item-container {
      font-size: 14px;
      margin-right: 8px;
    }

    overflow-x: auto;
    -webkit-overflow-scrolling: touch; // 流畅滚动

    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none;
    }

    // 菜单项间距调整
    .menu-item-container {
      margin-right: 5px;
      margin-left: 5px;

      flex-shrink: 0; // 防止挤压变形
    }
  }
}

// MenuItem 组件样式修改
.menu-item-container {
  // 原有桌面样式
  font-size: 16px;

  @media screen and (max-width: 768px) {
    // 移动端样式
    font-size: 14px;
    padding: 8px 8px; // 增大点击区域
    margin-right: 12px;

    // 隐藏图标
    .icon {
      display: none;
    }

    // 激活状态调整
    &.active::after {
      height: 1px; // 更细的指示线
      border-bottom-width: 2px;
    }
  }

  // 移动端悬停状态优化
  @media (hover: none) {
    &:hover {
      color: inherit;

      &.active {
        color: var(--el-color-primary);
      }
    }
  }
}
</style>
