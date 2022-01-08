import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import FriendConatctTwo from './components/FriendConatctTwo.vue';
import FriendCantactThree from './components/FriendCantactThree.vue';
// practic
import ActiveUser from './components/prac/ActiveUser.vue';
import UserData from './components/prac/UserData.vue';

// provide inject
import ComponentOne from './components/provide-inject/ComponentOne.vue';
import ComponentTwo from './components/provide-inject/ComponentTwo.vue';
import ComponentThree from './components/provide-inject/ComponentThree.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('friend-contact-two', FriendConatctTwo);
app.component('friend-contact-three', FriendCantactThree);

// practic
app.component('active-user', ActiveUser);
app.component('user-data', UserData)

// provide inject
app.component('component-one', ComponentOne);
app.component('component-two', ComponentTwo);
app.component('component-three', ComponentThree);

app.mount('#app');
