<template>
<div>
    <H1>ADIVINA</H1>
    <H2></H2>
   <b-container class="bv-example-row">
  <b-row class="text-center">
    <b-col></b-col>
    <b-col cols="8">

    </b-col>
    <b-col></b-col>
  </b-row>

  <b-row class="text-center">
    <b-col>
       
</b-col>
    <b-col cols="4"> <div>
  <b-card
    title="QUESTION"
    img-src="https://image.freepik.com/vector-gratis/cerebro-mecanico_23-2147506867.jpg"
    img-alt="Image"
    img-top: 
    tag="article"
    style="max-width: 20rem;"
    class="Card1"
  >
    <b-card-text>
      <b-form-group v-bind:label="data[currentQue].pregunta">
         <div v-bind:key="item" v-for="item in data[currentQue].AnsInc">
            <b-form-radio v-model="selected" name="some-radios" v-bind:value="item">{{item}}</b-form-radio>
         </div>
     <b-form-radio v-model="selected" name="some-radios" v-bind:value="data[currentQue].AnsC">{{data[currentQue].AnsC}}</b-form-radio>
    </b-form-group>
    </b-card-text>

 <b-button variant="info" @click="checkRadio(data[currentQue].AnsC)">NEXT QUESTION</b-button>
 
  </b-card>
</div></b-col>
    <b-col></b-col>
  </b-row>
</b-container>
<br>
<b-button variant="success" @click="llamarniveles()">SCORE</b-button>   
</div>

</template>
<script>
export default {
    data(){
        return{
    data:[],
    selected:  "",
    currentQue: 0,
    texto:""

};
},
methods:{
    
    llamarniveles(){
      this.$router.push('./nivel')
    },
     
    checkRadio(AnsC){
        if(AnsC == this.selected){
            alert('CORRECTOOO :D')
        }
        else{
           alert('INCORRECTO :(')
        }
        this.currentQue ++;
    
}
},
mounted:function name(params){
    fetch('https://opentdb.com/api.php?amount=10')
   .then(data =>{
       return data.json();
   })
   .then(data => {
       data.results.forEach(element => {
           this.data.push({
               pregunta: element.question,
               AnsC:element.correct_answer,
               AnsInc:element.incorrect_answers
           });
       });
       console.log(this.data);
   });
},
};



</script>
<style >
.Card1{
    background-color: palevioletred;
}
</style>
