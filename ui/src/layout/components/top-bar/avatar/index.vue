<template>
  <el-dropdown trigger="click" type="primary">
    <!-- 头像部分保持不变 -->
    <div class="flex-center cursor app_avatar">
      <AppAvatar v-if="!isMobile" class="app_avatar_images">
        <img src="@/assets/user-icon.svg" style="width: 54%" alt=""/>
      </AppAvatar>
      <span v-if="!isMobile" class="ml-8">{{ user.userInfo?.username }}</span>
      <!--      <span >{{ $t('layout.language') }}</span>-->
      <el-button v-else>
        {{ currentLanguage }}
        <el-icon class="el-icon--right">
          <arrow-down/>
        </el-icon>
      </el-button>
    </div>

    <!-- 下拉菜单 -->
    <template #dropdown>
      <el-dropdown-menu class="avatar-dropdown">
        <!-- 桌面端完整菜单 -->
        <template v-if="!isMobile">
          <div class="userInfo">
            <p class="bold mb-4" style="font-size: 14px">{{ user.userInfo?.username }}</p>
            <p>
              <el-text type="info">{{ user.userInfo?.email }}</el-text>
            </p>
          </div>
          <el-dropdown-item class="border-t p-8" @click="openResetPassword">
            {{ $t('views.login.resetPassword') }}
          </el-dropdown-item>
          <div v-hasPermission="new ComplexPermission([], ['x-pack'], 'OR')">
            <el-dropdown-item class="border-t p-8" @click="openAPIKeyDialog">
              {{ $t('layout.apiKey') }}
            </el-dropdown-item>
          </div>
          <el-dropdown-item class="border-t" style="padding: 0" @click.stop>
            <el-dropdown class="w-full" trigger="hover" placement="left-start">
              <div class="flex-between w-full" style="line-height: 22px; padding: 12px 11px">
                <span>{{ $t('layout.language') }}</span>
                <el-icon>
                  <ArrowRight/>
                </el-icon>
              </div>
              <template #dropdown>
                <el-dropdown-menu style="width: 180px">
                  <el-dropdown-item
                      v-for="(lang, index) in langList"
                      :key="index"
                      @click="changeLang(lang.value)"
                      class="flex-between"
                  >
                    <span :class="lang.value === user.userInfo?.language ? 'primary' : ''">
                      {{ lang.label }}
                    </span>
                    <el-icon
                        v-if="lang.value === user.userInfo?.language"
                        class="primary"
                    >
                      <Check/>
                    </el-icon>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-dropdown-item>
          <el-dropdown-item class="border-t" @click="logout">
            {{ $t('layout.logout') }}
          </el-dropdown-item>
        </template>
        <template v-else>
          <el-dropdown-menu style="width: 180px">
            <el-dropdown-item
                v-for="(lang, index) in langList"
                :key="index"
                :value="lang.value"
                @click="changeLang(lang.value)"
                class="flex-between"
            >
                  <span :class="lang.value === user.getLanguage() ? 'primary' : ''">{{
                      lang.label
                    }}</span>

              <el-icon
                  :class="lang.value === user.getLanguage() ? 'primary' : ''"
                  v-if="lang.value === user.getLanguage()"
              >
                <Check/>
              </el-icon>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>

      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <ResetPassword ref="resetPasswordRef"></ResetPassword>
  <AboutDialog ref="AboutDialogRef"></AboutDialog>
  <APIKeyDialog :user-id="user.userInfo?.id" ref="APIKeyDialogRef"/>
  <UserPwdDialog ref="UserPwdDialogRef"/>
</template>
<script setup lang="ts">
import {ref, onMounted, computed, onUnmounted} from 'vue'
import useStore from '@/stores'
import {useRouter} from 'vue-router'
import ResetPassword from './ResetPassword.vue'
import AboutDialog from './AboutDialog.vue'
import UserPwdDialog from '@/views/user-manage/component/UserPwdDialog.vue'
import APIKeyDialog from './APIKeyDialog.vue'
import {ComplexPermission} from '@/utils/permission/type'
import {langList} from '@/locales/index'
import {useLocale} from '@/locales/useLocale'

const currentLanguage = computed(() => {
  return langList.value?.filter((v: any) => v.value === user.getLanguage())?.[0]?.label
})
const {user} = useStore()
const router = useRouter()

const UserPwdDialogRef = ref()
const AboutDialogRef = ref()
const APIKeyDialogRef = ref()
const resetPasswordRef = ref<InstanceType<typeof ResetPassword>>()
const isMobile = ref(false)
const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 768 // 根据需求调整断点
}

// const { changeLocale } = useLocale()
const changeLang = (lang: string) => {
  user.postUserLanguage(lang)
  // changeLocale(lang)
}
const openAbout = () => {
  AboutDialogRef.value?.open()
}

function openAPIKeyDialog() {
  APIKeyDialogRef.value.open()
}

const openResetPassword = () => {
  resetPasswordRef.value?.open()
}

const logout = () => {
  user.logout().then(() => {
    router.push({name: 'login'})
  })
}

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
  if (user.userInfo?.is_edit_password) {
    UserPwdDialogRef.value.open(user.userInfo)
  }
})
onUnmounted(() => {
  window.removeEventListener('resize', checkIsMobile)
})
</script>
<style lang="scss" scoped>


.avatar-dropdown {
  min-width: 210px;

  .userInfo {
    padding: 12px 11px;
  }

  :deep(.el-dropdown-menu__item) {
    padding: 12px 11px;

    &:hover {
      background: var(--app-text-color-light-1);
    }
  }
}
</style>
