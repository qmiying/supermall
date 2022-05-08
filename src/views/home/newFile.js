import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: 'home',
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,

    HomeSwiper,
    RecommendView,
    FeatureView,
    Scroll
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 1, list: [] },
        'new': { page: 1, list: [] },
        'sell': { page: 1, list: [] },
      },
      currentType: 'pop',
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 页面加载出来时调用请求数据
    this.getHomeMultidata();
    // 页面加载出来时调用请求的商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  methods: {
    /**
     * 事件监听方法
     */
    tabClick(index) {
      console.log(index);
      // 监听到点击谁就将index替换为字符串
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },

    /**
     * 网络请求方法
     */
    // 封装首页的轮播图数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list,
          this.recommends = res.data.recommend.list;
      });
    },
    // 封装首页商品数据的请求方法
    getHomeGoods(type) {
      // 获取当前商品页面的类型页码，并为下一页请求做准备
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        // 添加商品数据到全局中存放
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  },
  props: {
    msg: String
  }
};