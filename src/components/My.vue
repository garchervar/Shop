<template>
  <div>
        <van-nav-bar
  title="个人中心"
  left-text="返回购物页"
  left-arrow
  @click-left="onClickLeft"
/>
    <img class="user-poster" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4035691849,1715829876&fm=26&gp=0.jpg">
     <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        猜你喜欢
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        已购买
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        购物车
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
     <router-link to="/shop">  <van-cell icon="wap-home-o" title="账户状态" is-link /></router-link>
      <router-link to="/address">  <van-cell icon="wap-home-o" title="收货地址" is-link @click="runto"/></router-link>
     
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="余额" is-link />
    </van-cell-group>
 
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  props:{
token:""
  },
  data() {
    return {
      ad:'/address',
      cartList: [],
      active:""
    //   totalPrice: 0
    };
  },
  // 和Vuex没有半毛钱关系，之和当前Cart组件有关系
  computed:{
      totalPrice(){
          console.log("#################")
          let price = 0
           this.cartList.forEach(item => {
                price += item.num * item.price;
          });

          return price
      }
  },
  methods:{
    onClickLeft() {
this.active="home";
this.$emit('childFn', this.active);

    },
    runto(){
      if(token==null)
      { this.$router.push('/address');}
     
    }
  },
  created() {
    this.cartList = this.$store.getters.getGoodsList;
console.log(this.cartList)
    // this.cartList.forEach(item => {
    //   this.totalPrice += item.num * item.price;
    // });

    // console.log(this.cartList);
  },
};
</script>

<style lang="less">
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>