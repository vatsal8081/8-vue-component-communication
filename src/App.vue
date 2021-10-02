<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <!-- 3 -->
      <!-- now you can pass props from parent just like you use attributes in 
      html element -->
      <friend-contact
      name="vatsal"
      phone-number="9104243444"
      email="vatsalpatel8081@gmal.com"
      isFavroute = "false"
      ></friend-contact>
      <friend-contact
      name="shivam"
      phone-number="7172389867"
      email="shivam@gmal.com"
      isFavroute = "true"
      ></friend-contact>

      <!-- keep in mind you can also pass props name phoneNumber like this but 
      in html we use cabab case both for component name and prop name because this is more common in html and vue will automaticall convert it as camel case -->
      <!-- still many peouples same name in hear to get ease of writing and finding the code  -->
      <!-- the choice is yourse -->
      <!-- component and props give use ablity to create parts which works standalone with it's own data and dynamic data like props -->
      <!-- with this we can define our html and logic just once and can able to use that part with diffrent data in many parts of our app -->
      <!-- and you can also use data binding : is props as well see bellow  isFavroute for that -->


      <hr>
      <friend-contact-two
      name="vatsal"
      phone-number="9104243444"
      email="vatsalpatel8081@gmal.com"
      ></friend-contact-two>
      <friend-contact-two
      name="shivam"
      phone-number="7172389867"
      email="shivam@gmal.com"
      :isFavroute = "true"
      ></friend-contact-two>

      <hr>
      <friend-contact-three
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phoneNumber="friend.phoneNumber"
      :email="friend.email"
      :isFavroute="friend.isFavroute"
      @toggle-fav="toggleFav"
      >
      </friend-contact-three>  

        <!-- 3 -->
        <!-- now hear you can listern to that custome event which you define
        in your child component just like you do in event binding of other html
        elements by @ and event name and giving callback method -->
        <!-- hear good thing is whenever prop change in parent component vue automatically detact that change and then pass updated prop in child and also update new value and ui  -->

    </ul>

    <hr>
    <h2>Practic</h2>
    <active-user 
      :name="user.name"
      :age="user.age"
    ></active-user>

    <user-data
    @update-user="updateUser"
    ></user-data>


    <!-- provide injecty -->
    <component-one></component-one> 


  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'test',
          phoneNumber: '9192934959',
          email: 'test@gmail.com',
          isFavroute: true

        }
      ],

      // practic
      user: {name: "tmp", age: 10}
    };
  },

  methods:{
    toggleFav(friendId){
      let friend = this.friends.find((el)=> el.id === friendId)
      friend.isFavroute = !friend.isFavroute
    },

    // practic
    updateUser(user){
      this.user.name = user.name
      this.user.age = Number(user.age) 
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>