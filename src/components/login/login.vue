<template>
  <div class="login-wrap">
    <el-form class="login-form" :model="ruleForm" :rules="rules" ref="ruleForm">
      <h2>用户登陆</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-button class='login-btn' type="primary" @click="submitForm(ruleForm)">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入名字', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      }
    }
  },
  created () {

  },
  methods: {
    submitForm (formName) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log('提交的表单', formName)
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
.login-btn {
  width: 100%;
}
</style>