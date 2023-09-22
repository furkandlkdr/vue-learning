const app = Vue.createApp({
  data() {
    return {
      inputData: "",
      taskArray: [],
      isListVisible: true,
      buttonText: "Hide List",
    };
  },
  methods: {
    addTask() {
      this.taskArray.push(this.inputData);
      this.inputData = "";
    },
    toggleList() {
      this.isListVisible = !this.isListVisible;
      this.isListVisible
        ? (this.buttonText = "Hide List")
        : (this.buttonText = "Show List");
    },
  },
});

app.mount("#assignment");
