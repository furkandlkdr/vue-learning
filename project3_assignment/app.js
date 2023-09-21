const app = Vue.createApp({
  data() {
    return {
      myName: "Furkan",
      myAge: 20,
      myImage: "https://picsum.photos/200/300",
      myValue: "Type Something",
    };
  },
  methods: {
    outputNumber() {
      const randomNumber = Math.floor(Math.random() * 10);
      return randomNumber;
    },
  },
});

app.mount("#assignment");
