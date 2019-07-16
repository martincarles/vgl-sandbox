<template>
  <golden-layout
    ref="goldenLayout"
    class="fullscreen"
    v-model="glState"
    @state="handleResize"
    :reorderEnabled="true"
  >
  <gl-router
    ref='glrouter'
  />
</golden-layout>
</template>

<script>
// import dynamic from '@/components/vis/dynamicComponent'
export default {
  components: {},
  data () {
    return {
      window: {
        index: 0,
        type: 'dummy'
      },
      gl: null, // register the goldenlayout refs object for convenience
      glState: null, // state item, used later for persistence
      glEvents: [
        'itemCreated',
        'stackCreated',
        'rowCreated',
        'tabCreated',
        'columnCreated',
        'componentCreated',
        'selectionChanged',
        'windowOpened',
        'windowClosed',
        'itemDestroyed',
        'initialised',
        'activeContentItemChanged'
      ]
    }
  },
  computed: {
    windowList () { return this.windowArray } // list to show vis windows
  },
  watch: {
    glState: {
      handler () {
        localStorage.setItem('goldenState', JSON.stringify(this.glState))
      },
      deep: true
    }
  },
  mounted () {
    // retrieve golden layout state from localStorage
    if (!this.glState) {
      if (localStorage.getItem('goldenState')) {
        this.glState = JSON.parse(localStorage.getItem('goldenState'))
      }
    }
    this.gl = this.$refs.goldenLayout
    // this.gl.onResize(() => console.log('test on resize'))
  },
  methods: {
    handleResize () {
      window.dispatchEvent(new Event('resizeGL'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fullscreen {
  width: 100%;
  height: 100%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
