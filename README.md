# CareFinder

Capstone project for my program at AltSchool Africa.
A web application built with Vue3 with typescript support, Bootstrap, and Firebase.

**[Live here](https://carefinder-web.web.app/)**

<img width="" alt="Screenshot 2023-07-04 at 11 29 08" src="https://github.com/J-Princess/CareFinder/assets/104683810/0ea7ec23-0d12-420c-8ada-f6a2e31432b3">
<img width="" alt="Screenshot 2023-07-04 at 11 42 46" src="https://github.com/J-Princess/CareFinder/assets/104683810/87d13ef9-2cec-409d-b258-70254e8334eb">
<img width="1626" alt="Screenshot 2023-07-04 at 11 43 19" src="https://github.com/J-Princess/CareFinder/assets/104683810/45258772-a03f-4108-8084-01e3f48fa845">
---

## Features

- Firebase Hosting, authentication, and storage
- Reusable Components
- **[Vue.js v3](https://vuejs.org/)** with **[Vue Router](https://router.vuejs.org/)**
- Simple and responsive design
- Google maps and cloud storage

---

## Installation

1. Creating Vue app

`npm create vue@3`

make sure you have the latest version of NodeJs installed and npm package. 2. Adding Google Maps to your app

` npm --save @fawmi/vue-google-maps`

```
<script setup lang=ts>
import VueGoogleMaps from '@fawmi/vue-google-maps';
Vue.use(VueGoogleMaps);
</script>
```

3. Implement firebase authenication




### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
