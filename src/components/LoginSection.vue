<template>
  <div class="bg-black mx-auto w-10/12 sm:w-8/12 font-general flex items-center justify-center"
    style="height: calc(100vh - 9rem);">
    <div class="bg-black shadow-md p-8 rounded-lg w-full max-w-md">
      <h1 class="text-xl sm:text-2xl font-extrabold text-center text-white mb-6">
        Login to GMBlog's
      </h1>
      <form class="flex flex-col space-y-4" @submit.prevent="Login" >
        <div class="flex flex-col justify-center items-center">
          <!-- <input type="email" placeholder="Email"
            class="border bg-box text-white  border-gray-300 p-3 rounded-t-lg focus:ring-2 focus:ring-blue-400 outline-none"
            v-model="email" />
          <input type="password" placeholder="Password"
            class="border border-gray-300 p-3 rounded-b-lg bg-box focus:ring-2 text-white focus:ring-blue-400 outline-none"
            v-model="password" /> -->

          <InputComponent type="email" placeholder="Email" v-model="email" />
          <InputComponent type="password" placeholder="Password" v-model="password"  />

        </div>
        <p v-if="errorMessage" class="text-white ">{{ errorMessage }}</p>
        <div class="flex justify-center">
          <Btn label="Login"/>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup>
import router from "@/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { ref } from "vue"
import Btn from "./Btn.vue";
import InputComponent from "./InputComponent.vue";

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const Login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value).then((data) => {
    //console.log("Successfully Signin", data);
    data;
    router.push("/admin")
  })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage.value = "Invalid Email";
          break;
        case "auth/user-not-found":
          errorMessage.value = "No account found";
          break;
        default:
          errorMessage.value = "Emial or password was Incorrect";
          break;
      }
      alert(error.message)
    })

}

</script>


<script setup>

</script>
