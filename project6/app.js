const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  computed: {//we will use as data but it's a method
    fullname() {
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'VueSon'
    }
  },
  methods: {
    addResult(num) {
      this.counter = this.counter + num;
    },
    reduceResult(num) {
      this.counter = this.counter - num;
    },
    inputName(event, lastName) {
      this.name = event.target.value;
    },//It will change every keystroke
    resetInput() {
      this.name = '';
    },
  }
});

app.mount('#events');
