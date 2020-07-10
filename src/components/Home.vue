<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt />
        <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '50px' : '200px'">
        <div class="toggle-button" @click="togleCollapse">|||</div>
        <el-menu unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath" background-color="#333744" text-color="#fff" active-text-color="#409FFF">
          <el-submenu :index="item.menuid" v-for="item in menuList" :key="item.menuid">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <i :class="item.icon"></i>
              <span class="menu-color">{{ item.menuname}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item v-for="subItem in item.children" :key="subItem.menuid">
              <template slot="title">
                <i :class="subItem.icon"></i>
                <router-link :to="subItem.url"> <span style="color:#fff;">{{subItem.authName}}</span></router-link>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      // 左侧菜单数据
      menuList: [],
      // 默认不折叠
      isCollapse: false,
      // 被激活导航地址
      activePath: '2-1'
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    logout () {
      this.$router.push('/login')
    },
    // 获取请求菜单
    async getMenuList () {
      const res = [
        {          "menuid": "01", "menuname": "用户管理", "icon": "el-icon-user", "url": "/User/Index",
          "children": [
            { "menuid": "1-1", "authName": "用户注册", "icon": "el-icon-user", "url": "/users", }
          ]
        },
        {          "menuid": "02", "menuname": "组织机构管理", "icon": "icon-organ", "url": "/OU/Index",
          "children": [
            { "menuid": "2-1", "authName": "组织管理", "icon": "el-icon-coffee", "url": "/manner", }
          ]
        },
        { "menuid": "03", "menuname": "角色管理", "icon": "icon-group-key", "url": "/Role/Index" },
        { "menuid": "04", "menuname": "功能管理", "icon": "icon-key", "url": "/Function/Index" },
        { "menuid": "05", "menuname": "登陆日志", "icon": "icon-view", "url": "/LoginLog/Index" }
      ]
      this.menuList = res
      console.log(res)
    },
    // 菜单的折叠与展开
    togleCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373f41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      height: 40px;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;

  .el-menu {
    border: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.menu-color {
  color: #f00;
}
</style>
