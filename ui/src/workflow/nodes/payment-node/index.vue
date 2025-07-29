<template>
  <NodeContainer :nodeModel="nodeModel">
    <p>{{ $t('views.applicationWorkflow.nodes.paymentNode.text') }}</p>
  </NodeContainer>
</template>
<script setup lang="ts">
import NodeContainer from '@/workflow/common/NodeContainer.vue'
const props = defineProps<{ nodeModel: any }>()
</script>
<style lang="scss" scoped></style>
