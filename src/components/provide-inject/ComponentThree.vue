<template>
  <div>
    <p>Component Two</p>

    <ul>
        <li v-for="user in userNames" :key="user" @click="userClickEmit(user)">
            {{ user }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    inject: ['userNames', 'userClickEmit']
}
</script>

<style scoped>
div {
    height: 200px;
    width: 200px;
    border-color: black;
}
</style>