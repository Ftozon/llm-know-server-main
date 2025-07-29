import PaymentNodeVue from './index.vue'
import { AppNode, AppNodeModel } from '@/workflow/common/app-node'
class PaymentNode extends AppNode {
  constructor(props: any) {
    super(props, PaymentNodeVue)
  }
}
export default {
  type: 'payment-node',
  model: AppNodeModel,
  view: PaymentNode
}
