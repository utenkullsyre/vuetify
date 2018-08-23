<template lang="html">
  <transition name="fade">
    <div id="wrapper" v-if="modalsynlig">
      <div class="test" v-for="(n, i) in 4" :key="i" @click="testFunc" @mouseover="test=true" @mouseout="test=false">

        <transition name="fade" mode="out-in">
          <span v-if="!test">{{ n }}</span>
          <h1 v-if="test">FAEN</h1>
        </transition>

      </div>

    </div>
  </transition>


</template>

<script>
import { mapState, mapMutations} from 'vuex'
export default {
  name: 'Gigal',
  data() {
    return {
      test: false
    }
  },
  computed: {
    ...mapState(['modalsynlig'])
  },
  methods: {
    ...mapMutations(['TOGGLE_MODAL']),
    testFunc(verdi) {
      this.TOGGLE_MODAL(false);
    },
  }
}
</script>

<style lang="css" scoped>
#wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  background-color: rgb(169, 186, 178);
  display: flex;
  flex-flow: row wrap;
  z-index: 50;
  overflow-y: scroll;
}

.test{
  width: 50%;
  height: 50vh;
  font-family: sans-serif;
  color: white;
  font-size: 3em;
  display:flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  transition: background-color .2s;
  cursor: pointer;
  }
.test:hover{
  background-color:  rgb(211, 221, 216)
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 450px) {
.test {
  width: 100%;
  height: auto;
  min-height: 150px;
}
}
</style>
