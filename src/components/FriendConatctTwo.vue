<template>
  <li>
    <h2>{{ name }} {{ isFavroute }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
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

  //   props: ['name', 'phoneNumber', 'email', 'isFavroute'],
  // 1
  // as we discuss before there are multiple ways to define props in your component
  //  so this way we define a prop as array is not good when we work in big projects and also with teams because we don't know types we want to use in props and it make it dificult to use it to other so we can define new way to define props 

  // props: {
  //     name: String,
  //     phoneNumber: String,
  //     email: String,
  //     isFavroute: Boolean
  // },
  // now hear we are documenting our component in a way that we and also others can use it batterway by converting the [] to {} and passing propname as key and type they require as value there are many types which we can use hear go through doc for that

  // 2 
  // but we can do more batter in documenting and crerating props by providing {} as value of prope name and we can pass some configrations to it which vue will understand
  props: {
    name: {
      type: String,
      require: true
    },
    phoneNumber: {
      type: String,
      require: true,
      validator(val) {
        return val.length >= 10
      }
      // we can use validator function where we return boolean at end which will help us to validate prop value which we pass is valid of not
    },
    email: {
      type: String,
      require: true,
    },
    isFavroute: {
      type: Boolean,
      require: false,
      // we have to give default whene we define prop as not require
      default: false
      // hear false is a value which that prop will hold as default
    }

    // default also can be funcatin which will return somthing when we want to calculate defaylt by some logic default() and when we use default() in prop type function then whole default function will be set as default for that prop

    // propB: [String, Number], we can aslo except multiple types as wll
    // when you want to define default for object of array you have to do it
    // this way default(){ return {} } or default(){ return [] }  
  },


  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

  }
};
</script>