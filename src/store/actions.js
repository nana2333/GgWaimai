/*
 Vuex最核心的管理对象
 */
import {
  reqAddress,
  reqShops,
  reqFoodCategorys,
<<<<<<< HEAD
  reqUserInfo
=======
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
>>>>>>> zn
} from '../api'
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
<<<<<<< HEAD
  RECEIVE_USER
=======
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
>>>>>>> zn
} from './mutation-types'

export default {
  
  // 异步获取地址信息的异步action
  async getAddress ({commit, state}) {
    // 发ajax请求
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    // 根据结果提交mutation
<<<<<<< HEAD
    if(result.code===0) {
      // console.log(result.data);
=======
    if (result.code === 0) {
>>>>>>> zn
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  
  // 异步获取食品分类列表的异步action
  async getFoodCategorys ({commit}) {
    // 发ajax请求
    const result = await reqFoodCategorys()
    // 根据结果提交mutation
    if (result.code === 0) {
      const foodCategorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys: foodCategorys})
    }
  },
  
  // 异步获取商家列表的异步action
  async getShops ({commit, state}) {
    // 发ajax请求
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    // 根据结果提交mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
<<<<<<< HEAD
   saveUser ({commit, user}) {
      commit(RECEIVE_USER, {user})
    },
  async getUserInfo ({commit}) {
    // 发ajax请求
    const result = await reqUserInfo()
    // 根据结果提交mutation
    if(result.code===0) {
=======
  
  // 保存user的同步action
  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },
  
  // 获取当前用户信息的异步action
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
>>>>>>> zn
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },
<<<<<<< HEAD
=======
  
  // 退出登陆的异步action
  async logout({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER)
    }
  },
  
  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      // info.score = 3.5
      commit(RECEIVE_INFO, {info})
    }
  },

// 异步获取商家评价列表
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },

// 异步获取商家商品列表
  async getShopGoods({commit}, cb) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      typeof cb === 'function' && cb()
      
    }
  },
  updateFoodCount({commit},{food,isAdd}) {
    if (isAdd) {
      commit(ADD_FOOD_COUNT, {food})
    }else {
      commit(REDUCE_FOOD_COUNT, {food})
    }
  },
  
>>>>>>> zn
}
