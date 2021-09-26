<template>
  <div class="wrapper">
      <article class="fruits">
          <p   v-for="(fruit,index) of fruits" :key=index> <button id="pButton" @click="copy(fruit)">Press</button>{{fruit}}</p>
          </article>
          <article class="fruits">
          <ul>
            <li  v-for="(fruit,index) of bowl" :key=index>
            {{fruit}}
         </li>
         </ul>
          </article>
  </div>
</template>

<script>
export default {
    data:()=>{
        return {
         fruits:["apple","banana","pineapple","orange", "peach","raspberry","kiwi"],
         bowl:[],
        }
    },
    methods:{
        copy(fruit){
            this.bowl.push(fruit);
        }
    }
}
</script>

<style>
article {
    border: 1px solid black;
    width: 50%;
}
ul {
    list-style: none;
}
</style>