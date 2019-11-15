<template>
  <div id="shop" >  
            
            <!-- <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option" />
        <van-dropdown-item title="筛选" ref="item">
          <van-switch-cell v-model="switch1" title="包邮" />
          <van-switch-cell v-model="switch2" title="团购" />
          <van-button block type="info" @click="onConfirm">确认</van-button>
        </van-dropdown-item>
        </van-dropdown-menu> -->
       <div >
        <div v-if="this.active==='home'">
       <div style="margin-bottom:60px"> <all-shop></all-shop></div>  
        </div>
        <div v-if="this.active==='setting'">
          <list-car @childFn="change_active"></list-car>
        </div>
        <div v-if="this.active==='friends'">
          <my :token="this.token"></my>
          </div>
       </div>
      <van-tabbar v-model="active" >
        <van-tabbar-item name="home" icon="home-o">商品</van-tabbar-item>
        <van-tabbar-item name="search" icon="search">发现</van-tabbar-item>
         <van-tabbar-item name="setting" icon="setting-o">购物车</van-tabbar-item>
         <van-tabbar-item name="friends" icon="friends-o">我的</van-tabbar-item>
       
      </van-tabbar>
  </div>
  
</template>
<script>
import AllShop from "@/components/AllShop.vue";
import ListCar from "@/components/ListCar.vue";
import My from "@/components/My.vue";

export default {
  data() {
    return {
      token:"",
      active: "home",
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ]
    };
  },
  components: {
    ListCar,
    AllShop,
    My
  },
  methods: {
    change_active(pay) {
      this.active = pay;
    },

    onConfirm() {
      this.$refs.item.toggle();
    }
  },
 async created() {
    this.active = "home";
    this.token=localStorage.getItem('as_token');

  }
};
</script>
<style>
.space{
 margin-bottom: 20px
}
</style>

