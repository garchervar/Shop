<template>
  <div>
        <van-nav-bar
  title="购物车"
  left-text="返回购物页"
  right-text="清空"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="(item,index) in goods"
        :key="item.id"
        :name="item.id"
      >
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
           :thumb="item.url"
        >          <div slot="footer">
    <van-button size="mini" @click="delet(index)">删除</van-button>
    
  </div>
        </van-card>
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: [ 10001],
      goods: []
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length-3;
      return '结算' + ( '');
    },
    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.num : 0)*100, 0);
    }
  },
  methods: {
    formatPrice(price) {
      return price;
    },
    onSubmit() {
      const num=this.checkedGoods.length
      Toast('结算提交');
      console.log(this.checkedGoods)
      // this.onClickRight();
         let price=0
      this.goods.forEach(item => {
                price += item.num * item.price;
               
             }
                );
      for(let i=0;i<num;i++){
        this.checkedGoods.pop()
      }
    },
    onClickLeft() {
    this.active="home";
    this.$emit('childFn', this.active);

    },
    onClickRight() {
      console.log(this.goods.splice(0,this.goods.length)  )  
     },delet(index){
     this.goods.splice(index,1)

    }
  
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