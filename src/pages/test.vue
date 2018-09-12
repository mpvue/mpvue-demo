<template>
  <div class="container">
    <h2 class="title">ID：{{id}}</h2>
    <button @click="gotoPage1"> page1 </button>
    <button @click="gotoPage2"> page2 </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 0
    }
  },
  onLoad () {
    console.log('pages/test onLoad')
    let id = this.$root.$mp.query.id
    console.log('query', this.$root.$root.$mp.query)
    this.id = id
  },
  onShow () {
    console.log('pages/test onShow', this.id)
  },
  onHide () {
    console.log('pages/test onHide', this.id)
  },
  onUnload () {
    console.log('pages/test onUnload', this.id)
  },
  onReady () {
    console.log('pages/test onReady', this.id)
  },
  beforeCreated () {
    console.log('pages/test beforeCreated', this.id)
  },
  created () {
    console.log('pages/test created', this.id)
  },
  beforeMount () {
    console.log('pages/test beforeMount', this.id)
  },
  mounted () {
    console.log('pages/test mounted', this.id)
  },
  beforeUpdate () {
    console.log('pages/test beforeUpdate', this.id)
  },
  updated () {
    console.log('pages/test updated', this.id)
  },
  beforeDestroy () {
    console.log('pages/test beforeDestroy', this.id)
  },
  destroyed () {
    console.log('pages/test destroyed', this.id)
  },

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
