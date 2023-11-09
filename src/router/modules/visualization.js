/*
检测结果可视化部分
*/
import Layout from '@/layout'

const Visualization = {
  path: '/visualization',
  component: Layout,
  redirect: 'noRedirect',
  name: 'visualization',
  meta: {
    title: '结果统计',
    icon: 'chart'
  },
  children: [
    {
      path: 'test1',
      component: () => import('@/views/VisualizationOfDetectionResults/test1'),
      name: '测试1',
      meta: { title: 'test1', noCache: true }
    },
    {
      path: 'test2',
      component: () => import('@/views/VisualizationOfDetectionResults/test2'),
      name: '测试2',
      meta: { title: 'test2', noCache: true }
    }
  ]
}

export default Visualization
