<template>
  <div v-if="(!menu.meta || !menu.meta.hidden) && showMenu()" class="sidebar-item">
    <el-sub-menu
        v-if="menu?.children && menu?.children.length > 0"
        :index="menu.path"
        popper-class="sidebar-container-popper"
    >
      <template #title>
        <el-icon>
          <AppIcon v-if="menu.meta && menu.meta.icon" :iconName="menuIcon" class="sidebar-icon"/>
        </el-icon>
        <!-- 根据 isMobile 判断是否显示标题 -->
        <span v-if="!isMobile">{{ $t(menu.meta?.title as string) }}</span>
      </template>
      <sidebar-item
          v-hasPermission="child.meta?.permission"
          v-for="(child, index) in menu?.children"
          :key="index"
          :menu="child"
          :activeMenu="activeMenu"
      >
      </sidebar-item>
    </el-sub-menu>
    <el-menu-item
        v-else
        ref="subMenu"
        :index="menu.path"
        popper-class="sidebar-popper"
        @click="clickHandle(menu)"
    >
      <template #title>
        <AppIcon v-if="menu.meta && menu.meta.icon" :iconName="menuIcon" class="sidebar-icon"/>

        <!-- 根据 isMobile 判断是否显示标题 -->
        <span v-if="!isMobile && menu.meta && menu.meta.title">{{ $t(menu.meta?.title as string) }}</span>
      </template>
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, onMounted, onUnmounted} from 'vue'
import {useRouter, useRoute, type RouteRecordRaw} from 'vue-router'
import {isWorkFlow} from '@/utils/application'

const props = defineProps<{
  menu: RouteRecordRaw
  activeMenu: any
}>()

const router = useRouter()
const route = useRoute()
const {
  params: {id, type}
} = route as any

// 是否为移动端
const isMobile = ref(false)

// 检测屏幕尺寸
function checkIsMobile() {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
}

// 初始化和监听窗口变化
onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIsMobile)
})

function showMenu() {
  if (isWorkFlow(type)) {
    return props.menu.name !== 'AppHitTest'
  } else {
    return true
  }
}

function clickHandle(item: any) {
  if (isWorkFlow(type) && item.name === 'AppSetting') {
    router.push({path: `/application/${id}/workflow`})
  }
}

const menuIcon = computed(() => {
  if (props.activeMenu === props.menu.path) {
    return props.menu.meta?.iconActive || props.menu?.meta?.icon
  } else {
    return props.menu?.meta?.icon
  }
})
</script>
<style scoped lang="scss">
.sidebar-item {
  .sidebar-icon {
    font-size: 20px;
    margin-top: -2px;
    display: block; // 确保图标居中
    text-align: center; // 图标居中对齐
  }

  .el-menu-item,
  :deep(.el-sub-menu__title) {
    padding: 13px 12px !important;
    font-weight: 500;
    border-radius: 4px;

    &:hover {
      background: none;
      color: var(--el-color-primary);
    }
  }

  // 针对移动端隐藏文字
  @media (max-width: 768px) {
    span {
      display: none; // 隐藏文字
    }

    .el-menu-item,
    :deep(.el-sub-menu__title) {
      justify-content: center; // 图标居中
      padding: 13px 0 !important; // 调整内边距
    }
  }

  .el-sub-menu {
    .el-menu-item {
      padding-left: 43px !important;
    }
  }

  .el-menu-item.is-active {
    color: var(--el-color-primary);
    background: var(--el-color-primary-light-9);
  }
}
</style>