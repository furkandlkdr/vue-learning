const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    computed: {
        boxAClassToggle() {
            return { active: this.boxASelected };
        },
    },
    methods: {
        boxSelected(box) {
            switch (box){
                case 'A':
                    this.boxASelected = !this.boxASelected;
                    break;
                case 'B':
                    this.boxBSelected = !this.boxBSelected;
                    break;
                case 'C':
                    this.boxCSelected = !this.boxCSelected;
                    break;
            }
        },
    },
})

app.mount('#styling')