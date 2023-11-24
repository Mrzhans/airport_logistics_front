<template>
  <el-row>
    <el-col :span="24">
      <el-card class="box-card">
        <div slot="header" style="display: flex; justify-content: space-between; align-items: center;">
          <h3>违禁品报警类型设置</h3>
          <el-button size="small" type="warning" @click="showAdd">添加违禁品</el-button>
        </div>
        <!-- 这个表单会根据data的值动态生成内容 -->
        <el-table :data="list" style="width: 100%">
          <el-table-column type="selection" width="55" />
          <el-table-column type="index" label="#" />
          <el-table-column label="违禁品名称" prop="contrabandName" />
          <el-table-column label="状态">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                class="ml-2"
                style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
                @change="handleSwitchChange(scope.row)"
              />
            </template>
          </el-table-column>
          <!-- 其他列 -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="showEdit(scope.row.userId)">编辑</el-button>
              <el-button size="mini" type="danger" @click="remove(scope.row.userId)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :current-page="query.pageNum"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="query.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          background="True"
          :total="query.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          userId: 0,
          contrabandName: '火机',
          status: true
        },
        {
          userId: 0,
          contrabandName: '充电宝',
          status: true
        }
      ], // 数据列表
      query: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    showAdd() {
      // 添加新用户的逻辑
    },
    showEdit(userId) {
      // 编辑用户的逻辑
      console.log(userId)
    },
    resetPassword(userId) {
      // 重置密码的逻辑
    },
    remove(userId) {
      // 删除用户的逻辑
    },
    handleSizeChange(newSize) {
      this.query.pageSize = newSize
      this.getList()
    },
    handleCurrentChange(newPage) {
      this.query.pageNum = newPage
      this.getList()
    },
    getList() {
      // 获取列表数据的逻辑
    }
  }
}
</script>
