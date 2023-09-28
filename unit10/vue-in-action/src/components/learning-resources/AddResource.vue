<template>
    <base-dialog v-if="isInputInvalid" title="Invalid Input" @close="isInputInvalid = false">
        <template #default>
            <p>Unfortunately, at least one input value is invalid.</p>
            <p>Please check all inputs!</p>
        </template>
        <template #actions>
            <base-button @click="isInputInvalid = false">OK</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput" />
            </div>
            <div class="form-control">
                <label for="destription">Destription</label>
                <textarea name="destription" id="destription" rows="3" v-model="descInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" v-model="linkInput" />
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    data() {
        return {
            titleInput: '',
            descInput: '',
            linkInput: '',
            isInputInvalid: false,
        }
    },
    inject: ['addResource'],
    methods: {
        submitData() {
            const newResource = {
                title: this.$refs.titleInput.value, //you can use that instead of v-model
                description: this.descInput,
                link: this.linkInput,
            };
            this.isInputInvalid = Object.values(newResource)
                .some(element => element.trim() === '');
            if (this.isInputInvalid) {
                return;
            }

            this.addResource(newResource.title, newResource.description, newResource.link);
        },
    }
}
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>