<template>
  <div class="login-wrap">
    <el-form class="login-form" :model="ruleForm" :rules="rules" ref="ruleForm">
      <div class="login-form-wrap">
        <h2>用户登陆</h2>
        <h4 style="color:#0f33f0;cursor:pointer;" @click="dialogFormVisible = true">注册</h4>
      </div>
      <el-form-item label="用户名" prop="user_name">
        <el-input v-model="ruleForm.user_name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="user_password">
        <el-input type="password" v-model="ruleForm.user_password"></el-input>
      </el-form-item>
      <el-button class='login-btn' type="primary" @click="submitForm(ruleForm)">登陆</el-button>
    </el-form>
    <!-- //弹出框 -->
    <el-dialog title="请注册您的用户信息" :visible.sync="dialogFormVisible">
      <el-form :model="formdata">
        <el-form-item label="用户名" prop="user_name">
          <el-input v-model="formdata.user_name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="user_password">
          <el-input type="password" v-model="formdata.user_password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="register">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      dialogFormVisible: false,
      formdata: {
        user_name: '',
        user_password: '',
      },
      ruleForm: {
        user_name: '',
        user_password: '',
      },
      rules: {
        user_name: [
          { required: true, message: '请输入名字', trigger: 'blur' },
        ],
        user_password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      }
    }
  },
  created () {

  },
  methods: {
    register () {
      //注册方法
      this.$http.post('https://result.eolinker.com/s5CFVvec061dcb0e6ae9baadf5562c84c31ff313b21578e?uri=/demo/user/register', this.formdata).then(res => {
        console.log('success', res)
        this.dialogFormVisible = false
      }).catch((err) => {
        console.log('error', err)
      });
    },
    async handlelogin () {
      //登陆方法
      const url = 'https://mockapi.eolinker.com/s5CFVvec061dcb0e6ae9baadf5562c84c31ff313b21578e/demo/user/login'
      const res = await this.$http.post(url, this.ruleForm)
      const { data } = res.data
      if (status === 200) {
        this.$router.push('/home')
        console.log(data)
      } else {
        //   
        console.log('msg')
      }
      //   this.$http.post('https://mockapi.eolinker.com/s5CFVvec061dcb0e6ae9baadf5562c84c31ff313b21578e/demo/user/login', this.ruleForm).then(res => {
      //     console.log(res)
      //     this.$router.push('/home')
      //   }).catch((err) => {
      //     console.log('error', err)
      //   });
    },

    submitForm () {
      //提交方法
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log('提交的表单', this.ruleForm)
          const { user_name, user_password } = this.ruleForm
          if (user_name == 'admin' && user_password == '12345') {
            this.$router.push('/home')
          } else {
            alert('用户名或者密码错误')
          }
          //   this.handlelogin()
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style>
.login-wrap {
  height: 100%;
  background: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  width: 400px;
  background: #ffffff;
  padding: 30px;
}
.login-form-wrap {
  display: flex;
  justify-content: space-between;
}
.login-btn {
  width: 100%;
}
</style>