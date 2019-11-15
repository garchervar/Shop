<template>
  <div>
        <van-nav-bar
  title="我的"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
  
/>
     <van-card

  desc="西西"  
  title="商品标题"
  thumb="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3721990951,2750770129&fm=26&gp=0.jpg"
/>


<van-cell-group>
    
      <van-cell icon="friends-o" title="用户登出" is-link @click="logout" />
      <van-cell icon="gift-o" title="余额" is-link />
    </van-cell-group>
   
 
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
export default {
  data() {
   show:false
  },

  methods: {
   logout(){
     
localStorage.removeItem("as_token");
this.$router.push("/login");


   },

    onClickLeft() {
    
    this.$router.go(-1);

    },
  
  
  },
      created() {
    this.goods = this.$store.getters.getGoodsList;

    // this.cartList.forEach(item => {
    //   this.totalPrice += item.num * item.price;
    // });

    // console.log(this.cartList);
  },
};
</script>

<style lang="less">
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>