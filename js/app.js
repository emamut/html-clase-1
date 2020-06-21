var app = new Vue({
  el: "#app",
  data: {
    questionsArray: [{}],
    activeQuestion: 0,
    activeSection: 0
  },
  mounted() {
    var self = this

    axios.get('./js/data.json').then(function (response) {
      self.questionsArray = response.data.questions
    })
  },
  methods: {
    checkActiveQuestion: function () {
      if(this.activeQuestion < this.questionsArray.length - 1)
        this.activeQuestion ++
      else
        this.activeSection ++
    },
    isActive: function (sectionID) {
      if (sectionID == this.activeSection)
        return 'd-block'
      else
        return 'd-none'
    }
  }
})