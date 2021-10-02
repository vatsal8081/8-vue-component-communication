<template>
    <div>
        <form @submit.prevent>
            name : <input type="text"  v-model="user.name" />
            age : <input type="text"  v-model="user.age" />
            <button @click="updateUser">Update</button>
        </form>
    </div>
</template>


<script>

export default {

    emits: ['update-user'],

    data(){
        return{
            user:{
                name: "",
                age: ""
            }
        };
    },

    methods: {
        updateUser(){
            this.$emit('update-user', this.user)
        }
    }


}
</script>