var app = new Vue({
  el: "#app",
  data: {
    questionsArray: []
  },
  mounted() {
    var self = this

    axios.get('./js/data.json').then(function (response) {
      self.questionsArray = response.data.questions
    })
  }
})