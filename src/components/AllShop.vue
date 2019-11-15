<template>

    <div id="All">
              <van-nav-bar
  title="购物中心"

/>
      <ul>
       <li v-for="(good , index) in fruitList" :key="index">
         <!-- <p>{{index}}</p>
          <img :src="good.url" alt>
          <p>商品名:{{good.name}}</p>
          <p>¥:{{good.price}}</p> -->
                    <van-card 
              :num=good.num
              :price=good.pricegood
             :desc=good.desc
              :title=good.name
             :thumb=good.url
            >
              <div slot="footer">
                <van-button size="mini">立即购买</van-button>
                <van-button size="mini" @click="add2Cart(good)">加入购物车</van-button>
              </div>
            </van-card>
          </li>
        </ul>


    </div>
</template>
<script>
export default {
  name: "searchshop",
  data() {
    return {
      // fruitList:[],
      fruitList: [
        {
          id: 10001,
          num: 1,
          url:
            "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=4ad42080aecc7cd9fa2d33df013a4602/42a98226cffc1e176cf9b75c4790f603738de91d.jpg",
          name: "苹果",
          price: 5,
          desc: "便宜又好吃的苹果"
        },
        {
          id: 10002,
          num: 1,
          url:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=607b103081d6277fe912353e1003780d/5d6034a85edf8db12c69f8ef0f23dd54574e74f2.jpg",
          name: "香蕉",
          price: 2.5,
          desc: "便宜又好吃的苹果"
        },
        {
          id: 10003,
          num: 1,
          url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=12aef9c102082838680ddb1280a2ce3c/8cb1cb1349540923e88531a09758d109b2de497b.jpg",
          name: "哈密瓜",
          price: 20,
          desc: "便宜又好吃的苹果"
        },
        {
          id: 10004,
          num: 1,
          url:
            "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=c708fc0ac41b9d168ac79d67cbe5d3b2/8601a18b87d6277f2fe15ced22381f30e824fc70.jpg",
          name: "榴莲",
          price: 35,
          desc: "便宜又好吃的苹果"
        },
           {
          id: 10001,
          num: 1,
          url:
            "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=4ad42080aecc7cd9fa2d33df013a4602/42a98226cffc1e176cf9b75c4790f603738de91d.jpg",
          name: "苹果",
          price: 5,
          desc: "便宜又好吃的苹果"
        },
           {
          id: 10001,
          num: 1,
          url:
            "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=4ad42080aecc7cd9fa2d33df013a4602/42a98226cffc1e176cf9b75c4790f603738de91d.jpg",
          name: "苹果",
          price: 5,
          desc: "便宜又好吃的苹果"
        },
      ],
    }
 
    
  },
   methods: {
       add2Cart(friut) {
         console.log(friut)

     friut.num = 1

       
      this.$store.commit('addGoods',JSON.parse(JSON.stringify(friut)))
    // this.$store.commit('addGoods',friut)

    // 调用vuex中的actions
    //  this.$store.dispatch('asyncAddGoods',JSON.parse(JSON.stringify(friut)))
   }
   },
      async created(){
       const data=await axios.get("http://localhost:8081/AllShop")
       const data1=await  axios.get('http://localhost:8081/IdAll');
       console.log(data.data)
       this.fruitList=data.data
        console.log(data1.data)
     }
  
};
</script>