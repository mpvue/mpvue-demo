<template>
  <div class="container">
    <h2 class="title">hello mpvue</h2>
    <button @click="gotoPage1"> page1 </button>
    <button @click="gotoPage2"> page2 </button>
  </div>
</template>

<script>
export default {
  methods: {
    gotoPage1 () {
      wx.navigateTo({
        url: '/pages/test?id=1'
      })
    },
    gotoPage2 () {
      wx.navigateTo({
        url: '/pages/test?id=2'
      })
    }
  }
}
</script>

<style>
.title {
  padding-top: 200px;
  text-align: center;
}
</style>
