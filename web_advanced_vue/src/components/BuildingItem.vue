<template>
<div class="building-item">
  <h2>{{ title }}</h2>
  <label>Gold: {{gold}}</label>
  <label>Resources needed: {{steel}} steel, {{ammo}} ammo</label>
  <input type="button"
         value="Build this building"
         @click="buyBuilding">
</div>
</template>

<script>
export default {
name: "BuildingItem",
  data(){
    return{
      gold: 5000,
      steel: 100,
      ammo: 100
    }
  },
  props:{
    title: String
  },
  methods:{
    buyBuilding(event){
      alert(`${this.title} Building successfully bought!`)
    }
  }
}

</script>

<style scoped>
.building-item{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
