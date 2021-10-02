<template>

<div>
    <p>Component One</p>

    <component-two></component-two>
</div>

</template>


<script>
export default {
    data(){
        return {
            userNames: ['vatsal', 'shivam']
        };
    },
    // we can provide data like this but when we do it like that we will not get the reactivity feactue because it's just simple object  
    // provide: {
    //     userNames: ['vatsal', 'shivam']
    // }    

// by this we are refering the acutal data property so when we change data this provide will also change and key name of this can be any thing
    provide(){
        return {
            userNames : this.userNames,

            // in provide inject child to parent communication works diffrent way insted of emiting from child and instern it in parent we create callback function in parent and pass it to childs in provide and when childs want to communicate they call that specific provided callback 
            userClickEmit: this.onClickOfUser
        };
    },

    methods: {
        onClickOfUser(user){
            console.log('emit get user click : ', user);
        }
    }
}
</script>

<style scoped>
div {
    height: 500px;
    width: 500px;
    border-color: black;
}
</style>