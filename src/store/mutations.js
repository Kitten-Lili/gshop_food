// 直接更新state的对象
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER_INFO,RESET_USER_INFO,RECEIVE_GOODS,RECEIVE_INFO,RECEIVE_RATINGS,INCREMENT_FOOD_COUNT,DECREMENT_FOOD_COUNT,CLEAR_CART,RECEIVE_SEARCH_SHOPS} from './mutation-types'
import Vue from 'vue'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },

  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },

  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },

  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },

  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if(!food.count){
      // food.count = 1  // 属性新增了，但是没有绑定
      // 对象，属性名，属性值  
      Vue.set(food, 'count', 1)  // 用来给有数据绑定的对象，添加新的绑定属性的
      state.cartFoods.push(food)
    }else{
      food.count++
    }
  },

  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if(food.count){
      food.count--
      if(food.count===0){
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },

  [CLEAR_CART](state){
    // 清除food中的count
    state.cartFoods.forEach(food => food.count = 0)
    // 移除购物车中所有购物项
    state.cartFoods = []
  },

  [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
    state.searchShops = searchShops
  }
}