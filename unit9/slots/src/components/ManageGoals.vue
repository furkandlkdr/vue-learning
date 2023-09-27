<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>
        <error-alert v-if="inputIsInvalid">
            <p>Input is invalid</p>
        </error-alert>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default{
    components: {
        ErrorAlert,
    },
    data(){
        return{
            inputIsInvalid: false,
        }
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === ''){
                this.inputIsInvalid = true;
            }
        }
    }
}
</script>