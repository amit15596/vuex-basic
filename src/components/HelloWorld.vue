<template>
  <div class="hello">
    <h1>{{ msg }} - {{countProduct}} - {{message}} </h1>
    <button v-on:click="addProduct()">Add New Item</button>
    <ul>
      <li v-for="item in getProducts" v-bind:key="item.id">
        {{ item.id }} {{ item.name}} {{item.price}}
      </li>
    </ul>
  </div>
</template>

<script>

import {mapState,mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    ...mapActions(["addProduct"]),
    ...mapMutations([{"newProduct":"addProduct"}])
  },
  computed:{
    ...mapState({message:state => state.product.message }),
    ...mapGetters(["countProduct","getProducts"]),

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
