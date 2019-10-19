<template>
  <div class="Temas">
    <HelloWorld msg="CUANTO SABES DE?"/>
    <h1>CUANTO SABES DE?</h1>
    <h2>Elige un tema</h2>
<div>
  <div>
  <b-dropdown id="config" text="Tecnologia" variant="primary" class="m-2">
    <b-dropdown-item href="#" @click="TecnologiaFacil()" >Facil</b-dropdown-item>
  </b-dropdown>
   <b-dropdown id="config" text="Lenguaje Español" variant="dark" class="m-2">
    <b-dropdown-item href="#" @click="llamarlenguaje()">Facil</b-dropdown-item>
  </b-dropdown>
     <b-dropdown id="config" text="Deportes" variant="success" class="m-2">
    <b-dropdown-item href="#" >Facil</b-dropdown-item>
  </b-dropdown>
     <b-dropdown id="config" text="Religion" variant="danger" class="m-2">
    <b-dropdown-item href="#" >Facil</b-dropdown-item>
  </b-dropdown>
       <b-dropdown id="config" text="Historia" variant="info" class="m-2">
    <b-dropdown-item href="#">Facil</b-dropdown-item>
  </b-dropdown>
  <p>
    <img src="https://static.vecteezy.com/system/resources/previews/000/130/124/non_2x/trivia-quiz-element-vector.jpg">
  </p>
</div>
</div>
</div>
</template>
<style >
body { background-image: url("https://st.depositphotos.com/1000167/3391/i/950/depositphotos_33917365-stock-photo-vintage-blue-background-wood-wall.jpg") }

img{
  width: 550px;
  height: 330px;
  margin-top: 10px;
}
</style>

<script>
export default {
  name: 'nivel',
  methods:{
     llamarlenguaje(){
      this.$router.push('./Lenguaje1')
    },
    llamarniveles(){
      this.$router.push('./nivel')
    },
    TecnologiaFacil(){
      this.$router.push('./informaticafacil')
    }
  }
  }

</script>