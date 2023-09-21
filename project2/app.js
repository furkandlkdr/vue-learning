const app = Vue.createApp({
    data() {
        return {
            messageA: 'Finish the course,',
            messageB: '<h3>Master all elements!</h3>',
            vueLink: 'https://vuejs.org',
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5)//this. for app's data
                return this.messageA;
            else
                return this.messageB;
        }
    }
});

app.mount('#user-goal');