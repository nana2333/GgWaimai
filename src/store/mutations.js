/*
 包含n个直接更新状态数据的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,

  RECEIVE_USER

  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  ADD_FOOD_COUNT,

  REDUCE_FOOD_COUNT,
  CLEAR_CART

  REDUCE_FOOD_COUNT

} from './mutation-types'

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

  [RECEIVE_USER] (state, {user}) {
    state.user = user

  
  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },
  [RESET_USER] (state) {
    state.user = {}
  },
  
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [ADD_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count++
    }else {
      Vue.set(food,'count',1),
      
      state.cartFoods.push(food)
    }
  },
  [REDUCE_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--
      if(food.count===0){
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }

  },
  
  [CLEAR_CART](state) {
    // 清除food中的count
    state.cartFoods.forEach(food => food.count = 0)
    //清空购物车数组
    state.cartFoods = []
  },

  }
}
