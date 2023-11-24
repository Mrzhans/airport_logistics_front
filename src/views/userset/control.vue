<template>
  <el-row>
    <el-col :span="24">
      <el-card class="box-card">
        <div slot="header" style="display: flex; justify-content: space-between; align-items: center;">
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchUser"
            placeholder="请输入查询用户名称"
            @select="handleSelect"
          />
          <el-button size="small" type="primary" @click="showAdd">添加用户</el-button>
        </div>
        <!-- 这个表单会根据data的值动态生成内容 -->
        <el-table :data="list" style="width: 100%">
          <el-table-column type="selection" width="55" />
          <el-table-column type="index" label="#" />
          <el-table-column label="头像" prop="img">
            <template slot-scope="scope">
              <el-image style="width: 30px; height: 30px" :src="scope.row.img" fit="cover" class="img-circle" />
            </template>
          </el-table-column>
          <el-table-column label="用户名" prop="username" />
          <el-table-column label="邮箱" prop="email" />
          <el-table-column label="电话" prop="phone" />
          <el-table-column label="创建日期" prop="createDate" />
          <!-- 其他列 -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="showEdit(scope.row.userId)">编辑</el-button>
              <el-button size="mini" type="warning" @click="resetPassword(scope.row.userId)">重置密码</el-button>
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
          img: 'avatar1.png',
          username: 'Yang',
          email: 'xxx',
          phone: '1111',
          createDate: 'xxx'
        },
        {
          userId: 1,
          img: 'avatar1.png',
          username: 'Li',
          email: 'xxx',
          phone: '2222',
          createDate: 'xxx'
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
