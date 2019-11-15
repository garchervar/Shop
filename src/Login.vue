<template>
    <section >
      
        <van-cell-group style="margin-top:60px;">
            <van-field
                label="唯一Id"
                v-model="form.cardID"
            />
            <van-field
                label="用户名"
                v-model="form.name"
            />
            <van-field
                label="密码"
                v-model="form.offerID"
                type="password"
            />
        </van-cell-group>
        <p class="text-center">
            <van-button @click="login" type="primary">登录</van-button>
        </p>
    </section>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        name: '',
        cardID: '',
        offerID: '',
      },
    };
  },
  methods: {
    async login() {
         var  token="wqe";
    // const data=await  axios.get('http://localhost:8081/IdAll');
    // console.log(data.data[0])
    //    if(this.form.name==data.data[0].username&&this.form.offerID==data.data[0].password)
   
    //  {
    //     this.$store.commit('set_token', token);
    //     this.$router.push("/");
    //     localStorage.setItem("user","test");
    //     // localStorage.setItem("userId",this,form.cardID);
    //     this.$toast.success("登陆成功");
    //   }
    if(this.form.name=="test"&&this.form.offerID==123)
   
     {
        this.$store.commit('set_token', token);
        this.$router.push("/");
        localStorage.setItem("user","test");
        // localStorage.setItem("userId",this,form.cardID);
        this.$toast.success("登陆成功");
      }
      else{
          this.$toast.fail("用户名密码错误,请重新输入")
      }
    },
  },
  async created() {
    const { token } = this.$store.state;
    if (token) this.$router.replace('/');
     
  },
};
</script>
<style lang="less" scoped>
section {
    margin: 40px 0;
}
</style>