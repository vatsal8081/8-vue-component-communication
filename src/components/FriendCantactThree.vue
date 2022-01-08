<template>
  <li>
    <h2>{{ name }} | Favroute : {{ isFavroute }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggelFavroute">{{ isFavroute ? 'Unfavroute' : 'Favroute' }}</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
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

  // 1
  // many times we also want to communicate from child to parent 
  // to communicate from parent to child we use props but from child to parent
  // communication we have to use cuatom event
  // by firing event we can listern those events in parent and also do somthing
  // it's just like regustring a click or other event listers on any element
  // for letting parent component know somthing happen in child and pass data we emit event from child and listern it on parent

  props: {
    id: {
      type: Number,
      require: true
    },
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
    },
    email: {
      type: String,
      require: true,
    },
    isFavroute: {
      type: Boolean,
      require: false,
      default: false
    }
  },

  // 4
  // it is also recomended to document the document all emits your component can suppot it is not require and also without that it will work fine but it is good practic to list all your componentas emits so that other don't have to go through your component to find all possible emits for that there are 2 ways
  emits: ['toggle-fav'],
  // hear this code will do natthing it's just array which contains name of supported emits by component to other can easily use your component
  // there is also other detail way to do that 
  // emits:{
  //   'toggle-fav' : (id) => {
  //     if(id){
  //       return true
  //     }
  //     else {
  //       console.warn('id not provided in toggle-fav event')
  //       return false
  //     }
  //   }
  // },
  // hear we are validating emit value before we emit it to protect our app from possible errors which can occure by emiting some wrong data
  // again our code will work perfactlly fine without any of this but it's good practic to list all emits of component in [] format we use {} format only when we want to pufform some validation logic before emiting it 


  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggelFavroute() {
      // 2
      // by using built in emit method we can fire (emit) custome event which we can listern on parent component
      // hear first argument is event name and all other args are data
      // keep in mind you alwase have to use event name in cabab case pascal or camel case not supported
      this.$emit('toggle-fav', this.id)
    }

  }
};
</script>