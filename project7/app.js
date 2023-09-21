const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value){
      if (value>50)
        this.counter = 0;
    }//watch usage for most situation
    // name(newValue, oldValue) {
    //   if (newValue === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = newValue + " " + this.lastName;
    //   }
    //   //when name changes, use it
    // },
    // lastName(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value
    //   }
    // }
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '')
        return '';
      return this.name + ' ' + this.lastName
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
    }, //It will change every keystroke
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
