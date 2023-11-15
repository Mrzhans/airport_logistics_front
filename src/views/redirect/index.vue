<script>
// 重定向组件
export default {
  created() {
    // 获取当前想要跳转的路由参数，也就是重定向的url
    const { params, query } = this.$route
    // 对路径获取，再进行拼接操作跳转
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
