import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  VueGoogleMaps from '@fawmi/vue-google-maps'



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAvpqsT3onyvpmNKjXroqbCjtiejHtNZTk",
  authDomain: "carefinder-web.firebaseapp.com",
  projectId: "carefinder-web",
  storageBucket: "carefinder-web.appspot.com",
  messagingSenderId: "329466543248",
  appId: "1:329466543248:web:6157c7586e7203d5066c15"
};



initializeApp(firebaseConfig);



const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAY2ez0sDkoi-3VjuLN98e1EZRsHHX2RqM',
        libraries: ['places']
    },
})
app.use(router)

app.mount('#app')
