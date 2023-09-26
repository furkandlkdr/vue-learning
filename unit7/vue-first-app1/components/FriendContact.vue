<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }} </h2>
        <button @click="toggleFavorite">
            Toggle Favorite
        </button>
        <button @click="toggleDetails">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>

        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    // props: [
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    // ],
    props: {
        id: {
            type: String,
            requiered: true,
        },
        name: {
            type: String,
            requiered: true,
        },
        phoneNumber: {
            type: String,
            requiered: true,
        },
        emailAddress: {
            type: String,
            requiered: true,
        },
        isFavorite: {
            type: Boolean,
            requiered: false,
            default: false,
        },
    },
    // emits: ['toggle-favorite'],
    emits: {
        'toggle-favorite': function(id) {
            if (id)
                return true;
            else{
                console.warn('Id is missing');
                return false;
            }
        }
    },
    data() {
        return {
            detailsAreVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id);
        }
    },
}
</script>
