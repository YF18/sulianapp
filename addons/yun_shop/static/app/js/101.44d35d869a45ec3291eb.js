webpackJsonp([101],{"+95e":function(t,i,n){var e=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"\n#earning_list[data-v-f581d898] {\n  height: 41.6875rem;\n  background-color: #fff;\n}\n#earning_list #list_box .tab[data-v-f581d898] {\n    background-color: #fafafa;\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-weight: bold;\n    font-size: 15px;\n}\n#earning_list #list_box .tab li[data-v-f581d898]:first-child {\n      width: 9.8125rem;\n}\n#earning_list #list_box .tab li[data-v-f581d898]:nth-child(2) {\n      width: 6.875rem;\n}\n#earning_list #list_box .tab li[data-v-f581d898]:nth-child(3) {\n      width: 4.375rem;\n}\n#earning_list #list_box .list[data-v-f581d898] {\n    padding: 0.625rem 0;\n}\n#earning_list #list_box .list .item[data-v-f581d898] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 2.75rem;\n      line-height: 2.75rem;\n      font-size: 13px;\n      color: #8c8c8c;\n}\n#earning_list #list_box .list .item li[data-v-f581d898]:first-child {\n        width: 9.8125rem;\n}\n#earning_list #list_box .list .item li[data-v-f581d898]:nth-child(2) {\n        width: 6.875rem;\n}\n#earning_list #list_box .list .item li[data-v-f581d898]:nth-child(3) {\n        width: 4.375rem;\n        padding: 0 0.625rem;\n}\n#earning_list #list_box .list .item li:nth-child(3) button[data-v-f581d898] {\n          height: 1.625rem;\n          border-radius: 1rem;\n          background-color: #ff8b4a;\n          color: #fff;\n          border: none;\n}\n#earning_list #list_box .list .bg_img[data-v-f581d898] {\n      height: 41.6875rem;\n      /*background-image: url(../../../assets/images/applySuccessBg.png);*/\n      /*background-repeat: no-repeat;*/\n      /*background-position: center;*/\n      /*background-size: 23.4375rem 41.6875rem;*/\n}\n#earning_list #list_box .list .adv_img[data-v-f581d898] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n}\n#earning_list #list_box .list .bg_color[data-v-f581d898] {\n      width: 23.4375rem;\n      height: 41.6875rem;\n      background-color: rgba(0, 0, 0, 0.5);\n      position: relative;\n}\n#earning_list #list_box .list .receive[data-v-f581d898] {\n      position: absolute;\n      top: 24%;\n      left: calc(50% - 9.0625rem);\n      width: 18.125rem;\n      height: 18.75rem;\n      margin: 0 auto;\n      border-radius: 0.75rem;\n      background-image: url("+e(n("Hn5O"))+");\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: 18.125rem 18.75rem;\n}\n#earning_list #list_box .list .receive .text[data-v-f581d898] {\n        color: #feca5d;\n        padding-top: 1.25rem;\n}\n#earning_list #list_box .list .receive .text li[data-v-f581d898]:first-child {\n          font-size: 18px;\n          width: 100%;\n}\n#earning_list #list_box .list .receive .text li[data-v-f581d898]:nth-child(2) {\n          font-size: 28px;\n          width: 100%;\n          margin-top: 2.5rem;\n}\n#earning_list #list_box .list .receive .text li[data-v-f581d898]:nth-child(3) {\n          font-size: 16px;\n          width: 100%;\n          color: #781a16;\n          line-height: 1.625rem;\n}\n#earning_list #list_box .list .receive button[data-v-f581d898] {\n        margin-top: 3rem;\n        width: 8.75rem;\n        height: 2.25rem;\n        background-color: #fccb4e;\n        color: #b24615;\n        font-size: 16px;\n        border-radius: 1.25rem;\n        border: none;\n}\n",""])},Hn5O:function(t,i,n){t.exports=n.p+"static/app/img/income_f.5862283.png"},qj5z:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("Pexp"),a=n("Tg7E"),o=document.documentElement,s=document.body,l={data:function(){return{show1:!1,earningList:[],isLoadMore:!0,page:1,total_page:0,plugin_type:"",adv_thumb:"",adv_url:"",income:0,income_name_text:""}},activated:function(){this.initData(),this.plugin_type=this.$route.query.plugin_type,this.plugin_type||this.$router.push(this.fun.getUrl("extension",{})),this.getData(),window.addEventListener("scroll",this.handleScroll),this.customizeIncome()},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{toAdvertising:function(){this.adv_url&&(window.location.href=this.adv_url),this.show1=!1},getAdvertising:function(t){var i=this;this.adv_thumb="",this.adv_url="",this.income=0,$http.get("finance.plugin-settle.income-receive",{plugin_type:i.plugin_type,id:t},"加载中...").then(function(t){1===t.result?(i.adv_thumb=t.data.adv_thumb,i.adv_url=t.data.adv_url,i.income=t.data.income_data.amount,i.show1=!0,i.getData()):Object(a.Toast)(t.msg)},function(t){console.log(t)})},getData:function(){var t=this;t.isLoadMore=!1,t.page=1,$http.get("finance.plugin-settle.get-not-settle-list",{plugin_type:t.plugin_type},"加载中...").then(function(i){1===i.result?(t.isLoadMore=!0,t.total_page=i.data.last_page,t.total_page||(t.total_page=0),t.earningList=i.data.data):t.earningList=i.data},function(t){console.log(t)})},getMoreData:function(){var t=this;t.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.get("finance.plugin-settle.get-not-settle-list",{plugin_type:t.plugin_type,page:t.page},"加载中...").then(function(i){if(t.isLoadMore=!0,1!==i.result)return t.page=t.page-1,void(t.isLoadMore=!1);var n=i.data.data;t.earningList=t.earningList.concat(n)},function(t){}))},getScrollTop:function(){var t=0;return o&&o.scrollTop?t=o.scrollTop:s&&(t=s.scrollTop),t},getClientHeight:function(){return s.clientHeight&&o.clientHeight?Math.min(s.clientHeight,o.clientHeight):Math.max(s.clientHeight,o.clientHeight)},getScrollHeight:function(){return Math.max(s.scrollHeight,o.scrollHeight)},handleScroll:function(){this.getScrollTop()+this.getClientHeight()+5>this.getScrollHeight()&&(this.isLoadMore?this.getMoreData():console.log("没有更多数据"))},initData:function(){this.page=1,this.total_page=0,this.isLoadMore=!0,this.show1=!1,this.earningList=[]},customizeIncome:function(){var t=this.fun.initMailLanguage();this.income_name_text=t.income.income_name}},components:{cTitle:e.a}},r={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"earning_list"}},[n("c-title",{attrs:{hide:!1,text:"领取收益"}}),t._v(" "),n("div",{staticStyle:{height:"40px"}}),t._v(" "),n("div",{attrs:{id:"list_box"}},[t._m(0),t._v(" "),n("div",{staticClass:"list"},[t._l(t.earningList,function(i,e){return n("ul",{key:e,staticClass:"item"},[n("li",[t._v(t._s(i.order_sn))]),t._v(" "),n("li",[t._v(t._s(i.amount))]),t._v(" "),n("li",[n("yd-button",{attrs:{type:"hollow"},nativeOn:{click:function(n){return t.getAdvertising(i.id)}}},[t._v("领取")])],1)])}),t._v(" "),n("yd-popup",{attrs:{position:"center",height:"100%",width:"100%"},model:{value:t.show1,callback:function(i){t.show1=i},expression:"show1"}},[n("div",{staticClass:"bg_img"},[n("img",{staticClass:"adv_img",attrs:{src:t.adv_thumb,alt:"图片"}}),t._v(" "),n("div",{staticClass:"bg_color"},[n("div",{staticClass:"receive"},[n("ul",{staticClass:"text"},[n("li",[t._v("已成功领取分销佣金")]),t._v(" "),n("li",[t._v(t._s(t.income)+"元")]),t._v(" "),n("li",[t._v("已存入"+t._s(t.income_name_text))])]),t._v(" "),n("yd-button",{attrs:{type:"hollow"},nativeOn:{click:function(i){return t.toAdvertising(i)}}},[t._v("我知道了")])],1)])])])],2)])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("ul",{staticClass:"tab"},[i("li",[this._v("订单编号")]),this._v(" "),i("li",[this._v("金额")]),this._v(" "),i("li",[this._v("领取")])])}]};var d=n("VU/8")(l,r,!1,function(t){n("zExM")},"data-v-f581d898",null);i.default=d.exports},zExM:function(t,i,n){var e=n("+95e");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("7720b912",e,!0,{})}});