const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    showResult() {
      if (this.number < 37) return "Not there yet!";
      else if (this.number > 37) return "Too much!";
      else return this.number;
    },
  },
  watch: {
    number(value){
        console.log ('result changed');
        const that = this;
        setTimeout(function () {
            that.number = 0;
        }, 5000)
    }
  },
  methods: {
    increaseResult(value) {
      this.number += value;
    },
  },
});

app.mount("#assignment");
