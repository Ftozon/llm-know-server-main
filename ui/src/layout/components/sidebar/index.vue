<template>

  <div class="sidebar p-8">
    <div class="show-breadcrumb" v-if="showBreadcrumb">
      <AppBreadcrumb/>
    </div>

    <el-scrollbar wrap-class="scrollbar-wrapper">

      <el-menu :default-active="activeMenu" router>
        <sidebar-item
            v-hasPermission="menu.meta?.permission"
            v-for="(menu, index) in subMenuList"
            :key="index"
            :menu="menu"
            :activeMenu="activeMenu"
        >
        </sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {getChildRouteListByPathAndName} from '@/router/index'
import SidebarItem from './SidebarItem.vue'
import AppBreadcrumb from './../breadcrumb/index.vue'

// const isCollapse = ref(true)
const route = useRoute()

const showBreadcrumb = computed(() => {
  const {meta} = route as any
  return (
      meta?.activeMenu &&
      (meta?.activeMenu.includes('dataset') || meta?.activeMenu.includes('application'))
  )
})

const subMenuList = computed(() => {
  const {meta} = route
  return getChildRouteListByPathAndName(meta.parentPath, meta.parentName)
})

const activeMenu = computed(() => {
  const {path, meta} = route
  return meta.active || path
})
</script>


<style lang="scss">
//@media (max-width: 768px) {
//  .breadcrumb-hover-hhhhh{
//    display: none;
//  }
//}
.sidebar {
  @media (max-width: 768px) {
    //width: 100%;
    height: 100vh;
    padding: 16px;
    width: auto;
    .show-breadcrumb, .el-scrollbar {
      width: auto;
    }
    .el-menu {
      --el-menu-item-height: 48px;

      &-item, .el-sub-menu__title {
        font-size: 14px;
        padding: 0 12px !important;
      }

      .el-icon {
        margin-right: 8px;
      }
    }

    .scrollbar-wrapper {
      max-height: calc(100vh - 60px);
    }

    // 隐藏面包屑在移动端
    .app-breadcrumb {
      display: none;
    }
  }
}
</style>