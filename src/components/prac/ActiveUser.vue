<template>
    <div>
        <p>User Name:  {{ name }}</p>
        <p>User Age:   {{ age }}</p>
    </div>    
</template>



<script>
export default {

    props: {
        name: {
            require: true,
            type: String
        },
        age: {
            require: true,
            type: Number
        }
    }
    
}
</script>