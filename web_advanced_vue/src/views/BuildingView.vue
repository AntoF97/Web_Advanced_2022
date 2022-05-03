<template>
  <h1>Buildings</h1>
  <!--<building-item v-bind:title="titleToPass"/>-->
  <div v-for="building in buildings">
    <building-item v-bind:title="building.title" :key="building.id"/>
  </div>
</template>

<script>
import BuildingItem from "@/components/BuildingItem";

export default {
  name: "BuildingView",
  components: {
    BuildingItem
  },
  data(){
    return{
      titleToPass: "Imperial Barracks",
      buildings:[
        {id: 1, title: "Imperial Barracks"},
        {id: 2, title: "Astartes Barracks"},
        {id: 3, title: "Psyker Barracks"}
      ]
    }
  }
}
</script>

<style scoped>

</style>
