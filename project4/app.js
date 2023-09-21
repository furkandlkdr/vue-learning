const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    addResult(num) {
      this.counter = this.counter + num;
    },
    reduceResult(num) {
      this.counter = this.counter - num;
    },
    inputName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    changeName(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('Submitted!');
    }
  }
});

app.mount('#events');
