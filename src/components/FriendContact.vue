<template>
  <li>
    <h2>{{ name }}  {{ isFavrouteFriend }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavroute">Favroute</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        <!-- hear you can use props just like data -->
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {

  // 2 to achive this we can use props in vue props is just a custome html attribute tag you can say where you can pass diffrent type of data from parent component to child and to aware the vue about those props we can use props property hear
  props: ['name', 'phoneNumber', 'email', 'isFavroute'],
  // in it's simplest form props accept array which conatins names of props as strings and now conider this prop just as data property in your app. as you use data property in computed, methods, watch, template just same way you can use props in your app
  // just keep in mind you should not use same name for prop and data property element because it will conflict and aslo you should not change value of props directly from child component because pops passed from parent component it should be change only from parent  

  // 4
  // as we discussed before we should not change data of props in child component
  // also if you tru to do that vue will give error for that because vue follows 
  // unidirectonal data flow pattern that mins the data of component can only be change when it belongs to that component and hear props are not data that belongs to the child component it's acutally part of parent component and hear we are just using reference of it so changing it hear is not possible 

  // but many times we need such behivour so for that we can use 2 meythods 1) events 2) copy of props in data
  // first one we will discuss letter  

  data() {
    return {
      // 1
      // as you can see we created a friend component and using data property hear to show data in html as we do most of the time in our vue app but the thing is how many times we create this component we will use same data each time
      // but most of time we want to use component such a way that we can pass data to component from outside mostly from the parent component where we are using the component and use that passed data inside the component as we do in functions by passing paramiters. the idea hear is to store data which we use for the component and pass some extra data to use or change behivour of component      
      detailsAreVisible: false,
      isFavrouteFriend: this.isFavroute
      // hear we are just creating copy of the prop and chen we can change that copy but keep in mind
      // 1) when we change that data property it will change for this data propewrty only it wont effect actual propvalue in both parent and child 
      // 2) by doing this we are assignning initeal value of prop to data so when it will change in future our data property will not change it will stay same 3) when we are passing object as prop and using this way when we change data we are also mutating props value because objects are reference type so it's not good
      // so this way of changing prop is vary uncommon and we use it only if we want to store initial value of prop and use it somewere otherwise we use events and spacilly don't use this in objects
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavroute(){
      this.isFavrouteFriend = !this.isFavrouteFriend
    }
  }
};
</script>