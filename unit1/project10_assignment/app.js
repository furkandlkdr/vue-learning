const app = Vue.createApp({
  data() {
    return {
      inputData1: "",
      inputData2: "",
      isParagraphHidden: false,
    };
  },
  methods: {
    addClass() {
      if (this.inputData1 === "user1") return { user1: true };
      else if (this.inputData1 === "user2") return { user2: true };
      return "";
    },
    toggleParagraph() {
      this.isParagraphHidden = !this.isParagraphHidden;
    },
  },
  computed: {
    hideParagraph() {
      return this.isParagraphHidden ? { hidden: true } : { visible: true };
    },
  },
});

app.mount("#assignment");
