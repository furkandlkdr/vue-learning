const app = Vue.createApp({
    data() {
        return {
            name: '',
            output1: 'OUTPUT',
            output2: 'OUTPUT',
        };
    },
    methods: {
        showAlert() {
            alert("YES PRESS THE RED BUTTON!");
        },
        changeOutput1(event) {
            this.output1 = event.target.value;
        },
        changeOutput2(event) {
            this.output2 = event.target.value;
        },
    }
})

app.mount('#assignment');