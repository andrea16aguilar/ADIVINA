<template>
    <div>
        <h1> HOLA API</h1>
        <button @click="llamarAPI()">MOSTRAAAAA</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arrayTrivia:[],
        }
    },
    methods:{
        llamarAPI(){
            this.arrayTrivia.push();
            fetch('https://opentdb.com/api.php?amount&type=boolean')
  .then(function(response) {
      console.log(response)
    return response.json();
  })
  .then(function(questions) {
questions.results.forEach(function(question) {
    this.arrayTrivia.push( {
        pregunta: question.question,
        respuesta: question.answer, 
        tipo: question.type,
    })
  console.log(element);
});
    console.log(question)
  });
        }
    },
}

</script>