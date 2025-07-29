<template>
  <div class="application-list-container p-24" style="padding-top: 16px">
    <div class="flex-between mb-16">
      <h4 style="white-space: nowrap;padding-right: 10px;">{{ $t('views.application.title') }}</h4>
      <div class="flex-between">
        <el-select
            v-model="selectUserId"
            class="mr-12"
            @change="searchHandle"
            style="max-width: 240px; width: 150px"
        >
          <el-option
              v-for="item in userOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
        <el-input
            v-model="searchValue"
            @change="searchHandle"
            :placeholder="$t('views.application.searchBar.placeholder')"
            prefix-icon="Search"
            class="w-240"
            style="min-width: 240px"
            clearable
        />
      </div>
    </div>
    <div v-loading.fullscreen.lock="paginationConfig.current_page === 1 && loading">
      <InfiniteScroll
          :size="applicationList.length"
          :total="paginationConfig.total"
          :page_size="paginationConfig.page_size"
          v-model:current_page="paginationConfig.current_page"
          @load="getList"
          :loading="loading"
      >
        <el-row :gutter="15">
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" class="mb-16">
            <el-card shadow="hover" class="application-card-add" style="--el-card-padding: 8px">
              <div class="card-add-button flex align-center cursor p-8" @click="openCreateDialog">
                <AppIcon iconName="app-add-application" class="mr-8"></AppIcon>
                {{ $t('views.application.createApplication') }}
              </div>
              <el-divider style="margin: 8px 0"/>
              <el-upload
                  ref="elUploadRef"
                  :file-list="[]"
                  action="#"
                  multiple
                  :auto-upload="false"
                  :show-file-list="false"
                  :limit="1"
                  :on-change="(file: any, fileList: any) => importApplication(file)"
                  class="card-add-button"
              >
                <div class="flex align-center cursor p-8">
                  <AppIcon iconName="app-import" class="mr-8"></AppIcon>
                  {{ $t('views.application.importApplication') }}
                </div>
              </el-upload>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" class="mb-16">
            <!--创建AI的教程视频-->
            <!-- 在原有CardBox结构中添加以下内容 -->
            <CardBox
                title="Demo create my AI"
                description="Read the user manual to create your application"
                class="application-card tutorial-card"
                @click="showTutorialDialog"
            >
            </CardBox>
          </el-col>
          <el-col
              :xs="24"
              :sm="12"
              :md="8"
              :lg="6"
              :xl="6"
              v-for="(item, index) in applicationList"
              :key="index"
              class="mb-16"
          >

            <!--应用-->
            <CardBox
                :title="item.name"
                :description="item.desc"
                class="application-card cursor"
                @click="router.push({ path: `/application/${item.id}/${item.type}/overview` })"
            >
              <template #icon>
                <AppAvatar
                    v-if="isAppIcon(item?.icon)"
                    shape="square"
                    :size="32"
                    style="background: none"
                    class="mr-8"
                >
                  <img :src="item?.icon" alt=""/>
                </AppAvatar>
                <AppAvatar
                    v-else-if="item?.name"
                    :name="item?.name"
                    pinyinColor
                    shape="square"
                    :size="32"
                    class="mr-8"
                />
              </template>
              <template #subTitle>
                <el-text class="color-secondary" size="small">
                  <auto-tooltip :content="item.username">
                    {{ $t('common.creator') }}: {{ item.username }}
                  </auto-tooltip>
                </el-text>
              </template>
              <div class="status-tag">
                <el-tag type="warning" v-if="isWorkFlow(item.type)" style="height: 22px">
                  {{ $t('views.application.workflow') }}
                </el-tag>
                <el-tag class="blue-tag" v-else style="height: 22px">
                  {{ $t('views.application.simple') }}
                </el-tag>
              </div>

              <template #footer>
                <div class="footer-content">
                  <el-tooltip
                      effect="dark"
                      :content="$t('views.application.setting.demo')"
                      placement="top"
                  >
                    <el-button text @click.stop @click="getAccessToken(item.id)">
                      <AppIcon iconName="app-view"></AppIcon>
                    </el-button>
                  </el-tooltip>
                  <el-divider direction="vertical"/>
                  <el-tooltip effect="dark" :content="$t('common.setting')" placement="top">
                    <el-button text @click.stop="settingApplication(item)">
                      <AppIcon iconName="Setting"></AppIcon>
                    </el-button>
                  </el-tooltip>
                  <el-divider direction="vertical"/>
                  <span @click.stop>
                    <el-dropdown trigger="click">
                      <el-button text @click.stop>
                        <el-icon><MoreFilled/></el-icon>
                      </el-button>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item
                              v-if="is_show_copy_button(item)"
                              @click="copyApplication(item)"
                          >
                            <AppIcon iconName="app-copy"></AppIcon>
                            {{ $t('common.copy') }}
                          </el-dropdown-item>
                          <el-dropdown-item @click.stop="exportApplication(item)">
                            <AppIcon iconName="app-export"></AppIcon>

                            {{ $t('common.export') }}
                          </el-dropdown-item>
                          <el-dropdown-item icon="Delete" @click.stop="deleteApplication(item)">{{
                              $t('common.delete')
                            }}</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </span>
                </div>
              </template>
            </CardBox>

          </el-col>

        </el-row>
      </InfiniteScroll>
    </div>
    <!-- 教程弹窗 -->
    <el-dialog
        v-model="showTutorial"
        title="AI Creation Tutorial"
        width="90%"
        top="5vh"
        class="tutorial-dialog"
    >
      <!-- 视频播放区 -->
      <div class="video-section">
        <video
            ref="videoPlayer"
            class="video-js"
            controls
            preload="auto"
            :poster="assetsVideoImage"
            playsinline
        >
          <source :src="assetsVideoSrc" type="video/mp4"/>
        </video>
      </div>
      <div class="tutorial-content">
        <!-- 步骤手册 -->
        <div class="manual-section">
          <el-steps direction="vertical" :active="currentStep" class="custom-steps">
            <el-step
                v-for="(step,index) in tutorialSteps"
                :key="index"
                :class="['step-item', { 'active-step': currentStep >= index }]"
            >
              <template #icon>
                <div class="step-icon-wrapper">
                  <el-icon :class="['step-icon', `step-${index + 1}`]">
                    <component :is="step.icon"/>
                  </el-icon>
                  <div class="step-number">{{ index + 1 }}</div>
                </div>
              </template>
              <template #title>
                <div class="step-title">{{ t(step.title) }}</div>
              </template>
              <template #description>
                <div class="step-description">
                  <p>
                    {{ t(step.description) }}
                  </p>
                  <!-- 添加示例图片 -->
                  <el-image
                      v-if="step.image"
                      :src="step.image"
                      class="step-image"
                      :preview-src-list="[step.image]"
                      :initial-index="0"
                      fit="contain"
                      hide-on-click-modal
                  >
                    <template #error>
                      <div class="image-error">加载失败</div>
                    </template>
                  </el-image>
                </div>
              </template>
            </el-step>
          </el-steps>
        </div>


      </div>
    </el-dialog>
    <CreateApplicationDialog ref="CreateApplicationDialogRef"/>
    <CopyApplicationDialog ref="CopyApplicationDialogRef"/>
  </div>
</template>
<script setup lang="ts">
import {ref, onMounted, reactive} from 'vue'
import applicationApi from '@/api/application'
import CreateApplicationDialog from './component/CreateApplicationDialog.vue'
import CopyApplicationDialog from './component/CopyApplicationDialog.vue'
import {MsgSuccess, MsgConfirm, MsgAlert, MsgError} from '@/utils/message'
import {isAppIcon} from '@/utils/application'
import {useRouter} from 'vue-router'
import {isWorkFlow} from '@/utils/application'
import {ValidType, ValidCount} from '@/enums/common'
import {t} from '@/locales'
import useStore from '@/stores'
import assetsVideoSrc from '@/assets/demo-vedio.mp4'
import assetsVideoImage from '@/assets/demo-vedio-image.png'
import step1Image from '@/assets/step1-create.png'
import step2Image from '@/assets/step2-upload.png'
import step3Image from '@/assets/step3-newapp.png'
import step4Image from '@/assets/step4-config.png'
import step5Image from '@/assets/step5-use.png'
// const step1Image = new URL('@/assets/step1-create.png', import.meta.url).href
// const step2Image = new URL('@/assets/step2-upload.png', import.meta.url).href
// const step3Image = new URL('@/assets/step3-newapp.png', import.meta.url).href
// const step4Image = new URL('@/assets/step4-config.png', import.meta.url).href
// const step5Image = new URL('@/assets/step5-use.png', import.meta.url).href
const elUploadRef = ref<any>()
const {application, user, common} = useStore()
const router = useRouter()

const CopyApplicationDialogRef = ref()
const CreateApplicationDialogRef = ref()
const loading = ref(false)

const applicationList = ref<any[]>([])

const paginationConfig = reactive({
  current_page: 1,
  page_size: 30,
  total: 0
})

interface UserOption {
  label: string
  value: string
}

const userOptions = ref<UserOption[]>([])

const selectUserId = ref('all')

const searchValue = ref('')

const apiInputParams = ref([])


const showTutorial = ref(false)
const currentStep = ref(0)

const tutorialSteps = [
  {
    title: 'Create Knowledge Base',
    description: 'Start by creating a new knowledge base to store your data and documents.',
    icon: 'MagicStick',
    image: step1Image
  },
  {
    title: 'Upload Documents',
    description: 'Upload relevant files and documents to populate your knowledge base.',
    icon: 'UploadFilled',
    image: step2Image
  },
  {
    title: 'Create New Application',
    description: 'Build a new application that will utilize the knowledge base you created.',
    icon: 'CirclePlusFilled',
    image: step3Image
  },
  {
    title: 'Configure Application',
    description: 'Set up the application by configuring its settings and parameters.',
    icon: 'Setting',
    image: step4Image
  },
  {
    title: 'Start Using',
    description: 'Launch the application and start using it to achieve your goals.',
    icon: 'VideoPlay',
    image: step5Image
  }
];

const showTutorialDialog = async () => {
  showTutorial.value = true
}


function copyApplication(row: any) {
  application.asyncGetApplicationDetail(row.id, loading).then((res: any) => {
    if (res?.data) {
      CopyApplicationDialogRef.value.open({...res.data, model_id: res.data.model})
    }
  })
}

const is_show_copy_button = (row: any) => {
  return user.userInfo ? user.userInfo.id == row.user_id : false
}

function settingApplication(row: any) {
  if (isWorkFlow(row.type)) {
    router.push({path: `/application/${row.id}/workflow`})
  } else {
    router.push({path: `/application/${row.id}/${row.type}/setting`})
  }
}

const exportApplication = (application: any) => {
  applicationApi.exportApplication(application.id, application.name, loading).catch((e) => {
    if (e.response.status !== 403) {
      e.response.data.text().then((res: string) => {
        MsgError(`${t('views.application.tip.ExportError')}:${JSON.parse(res).message}`)
      })
    }
  })
}
const importApplication = (file: any) => {
  const formData = new FormData()
  formData.append('file', file.raw, file.name)
  elUploadRef.value.clearFiles()
  applicationApi
      .importApplication(formData, loading)
      .then(async (res: any) => {
        if (res?.data) {
          searchHandle()
        }
      })
      .catch((e) => {
        if (e.code === 400) {
          MsgConfirm(t('common.tip'), t('views.application.tip.professionalMessage'), {
            cancelButtonText: t('common.confirm'),
            confirmButtonText: t('common.professional')
          }).then(() => {
            window.open('https://LLM-Know.cn/pricing.html', '_blank')
          })
        }
      })
}

function openCreateDialog() {
  common
      .asyncGetValid(ValidType.Application, ValidCount.Application, loading)
      .then(async (res: any) => {
        if (res?.data) {
          CreateApplicationDialogRef.value.open()
        } else if (res?.code === 400) {
          MsgConfirm(t('common.tip'), t('views.application.tip.professionalMessage'), {
            cancelButtonText: t('common.confirm'),
            confirmButtonText: t('common.professional')
          }).then(() => {
            window.open('https://LLM-Know.cn/pricing.html', '_blank')
          })
        }
      })
}

function searchHandle() {
  if (user.userInfo) {
    localStorage.setItem(user.userInfo.id + 'application', selectUserId.value)
  }
  applicationList.value = []
  paginationConfig.current_page = 1
  paginationConfig.total = 0
  getList()
}

function mapToUrlParams(map: any[]) {
  const params = new URLSearchParams()

  map.forEach((item: any) => {
    params.append(encodeURIComponent(item.name), encodeURIComponent(item.value))
  })

  return params.toString() // 返回 URL 查询字符串
}

function getAccessToken(id: string) {
  applicationList.value
      .filter((app) => app.id === id)[0]
      ?.work_flow?.nodes?.filter((v: any) => v.id === 'base-node')
      .map((v: any) => {
        apiInputParams.value = v.properties.api_input_field_list
            ? v.properties.api_input_field_list.map((v: any) => {
              return {
                name: v.variable,
                value: v.default_value
              }
            })
            : v.properties.input_field_list
                ? v.properties.input_field_list
                    .filter((v: any) => v.assignment_method === 'api_input')
                    .map((v: any) => {
                      return {
                        name: v.variable,
                        value: v.default_value
                      }
                    })
                : []
      })

  const apiParams = mapToUrlParams(apiInputParams.value)
      ? '?' + mapToUrlParams(apiInputParams.value)
      : ''
  application.asyncGetAccessToken(id, loading).then((res: any) => {
    window.open(application.location + res?.data?.access_token + apiParams)
  })
}

function deleteApplication(row: any) {
  MsgConfirm(
      // @ts-ignore
      `${t('views.application.delete.confirmTitle')}${row.name} ?`,
      t('views.application.delete.confirmMessage'),
      {
        confirmButtonText: t('common.confirm'),
        cancelButtonText: t('common.cancel'),
        confirmButtonClass: 'danger'
      }
  )
      .then(() => {
        applicationApi.delApplication(row.id, loading).then(() => {
          const index = applicationList.value.findIndex((v) => v.id === row.id)
          applicationList.value.splice(index, 1)
          MsgSuccess(t('common.deleteSuccess'))
        })
      })
      .catch(() => {
      })
}

function getList() {
  const params = {
    ...(searchValue.value && {name: searchValue.value}),
    ...(selectUserId.value &&
        selectUserId.value !== 'all' && {select_user_id: selectUserId.value})
  }
  applicationApi.getApplication(paginationConfig, params, loading).then((res) => {
    res.data.records.forEach((item: any) => {
      if (user.userInfo && item.user_id === user.userInfo.id) {
        item.username = user.userInfo.username
      } else {
        item.username = userOptions.value.find((v) => v.value === item.user_id)?.label
      }
    })
    applicationList.value = [...applicationList.value, ...res.data.records]
    paginationConfig.total = res.data.total
  })
}

function getUserList() {
  applicationApi.getUserList('APPLICATION', loading).then((res) => {
    if (res.data) {
      userOptions.value = res.data.map((item: any) => {
        return {
          label: item.username,
          value: item.id
        }
      })
      if (user.userInfo) {
        const selectUserIdValue = localStorage.getItem(user.userInfo.id + 'application')
        if (selectUserIdValue && userOptions.value.find((v) => v.value === selectUserIdValue)) {
          selectUserId.value = selectUserIdValue
        }
      }
      getList()
    }
  })
}

onMounted(() => {
  getUserList()
})
</script>
<style lang="scss" scoped>
.application-card-add {
  width: 100%;
  font-size: 14px;
  min-height: var(--card-min-height);
  border: 1px dashed var(--el-border-color);
  background: var(--el-disabled-bg-color);
  border-radius: 8px;
  box-sizing: border-box;

  &:hover {
    border: 1px solid var(--el-card-bg-color);
    background-color: var(--el-card-bg-color);
  }

  .card-add-button {
    &:hover {
      border-radius: 4px;
      background: var(--app-text-color-light-1);
    }

    :deep(.el-upload) {
      display: block;
      width: 100%;
      color: var(--el-text-color-regular);
    }
  }
}

.application-card {
  .status-tag {
    position: absolute;
    right: 16px;
    top: 15px;
  }
}

.dropdown-custom-switch {
  padding: 5px 11px;
  font-size: 14px;
  font-weight: 400;

  span {
    margin-right: 26px;
  }
}

// 样式优化
.tutorial-card {
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

    .play-overlay {
      opacity: 1;
    }
  }

  .tutorial-cover {
    position: relative;
    border-radius: 8px;
    overflow: hidden;

    .cover-image {
      width: 100%;
      height: 180px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .play-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      opacity: 0.8;
      transition: opacity 0.3s ease;
    }
  }

  .step-preview {

    padding: 0;
    margin-top: 10px;

    .step-item {
      flex: 1;

      flex-direction: column;
      padding: 8px;
      display: flex;
      flex-direction: row;
      align-items: center;

      .step-text {
        margin-left: 8px;
        text-align: center;
        color: var(--el-text-color-secondary);
      }
    }
  }
}

.video-section {
  flex: 2;
  min-width: 60%;

  video {
    width: 100%;
    border-radius: 8px;
  }
}

.tutorial-content {
  gap: 24px;

  .manual-section {
    flex: 1;
    padding: 20px 0px;
    background: var(--el-fill-color-light);
    border-radius: 8px;

    .el-steps {
      padding: 12px;
    }
  }
}


.tutorial-dialog {
  .tutorial-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .manual-section {
      order: 1; // 移动端优先显示步骤
    }

    .video-section {
      order: 2;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    }

    .custom-steps {
      --el-step-line-color: #e4e7ed;
      padding: 0 1rem;

      :deep(.el-step__head):last-child {
        display: none;
      }

      :deep(.el-step__head) {
        width: auto;
        padding-bottom: 70px;


        &.is-process {
          color: var(--el-color-primary);
          border-color: var(--el-color-primary);
        }
      }

      :deep(.el-step__main) {
        padding-left: 35px;
      }

      .step-item {
        margin-bottom: 2rem;
        transition: all 0.3s ease;

        &:last-child {
          margin-bottom: 0;
        }

        .step-icon-wrapper {
          position: relative;
          width: 40px;
          height: 40px;

          .step-icon {
            width: 100%;
            height: 100%;
            font-size: 25px;
            color: #fff;
            padding: 8px;
            border-radius: 50%;
            background: var(--el-color-primary-light-5);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }

          .step-number {
            position: relative;
            bottom: -25px;
            right: -18px;
            background: #fff;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 600;
            color: var(--el-color-primary);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          .step-number {
            display: none;
          }
        }

        .step-title {
          font-weight: 600;
          margin: 8px 0;
          color: #303133;
          font-size: 15px;
        }

        .step-description {
          color: #606266;
          font-size: 13px;
          line-height: 1.6;
          padding-right: 15px;

          .step-image {
            margin-top: 12px;
            width: 100%;
            max-width: 280px;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
        }

        &.active-step {
          .step-icon {
            background: var(--el-color-primary);
            transform: scale(1.05);
          }
        }
      }

      :deep(.el-step__line) {
        left: 19px;
        top: 40px;
        bottom: -22px;
      }
    }
  }
}

</style>
