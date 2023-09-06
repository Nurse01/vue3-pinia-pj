
<template>
  <div class="home">
    <h2>Vue3 Learning Document</h2>
    <h3>Ref</h3>
    <!-- show variable -->
    <p>counter1 : {{ counter1 }}</p>
    <button @click="onClick1">add</button>

    <!-- Using Ref Side effect , change in UI not only console.log  -->
    <p>counter2 : {{ counter2 }}</p>
    <button @click="onClick2">add</button>
    <h3>Reactive</h3>
    <p>username : {{ account.username }}</p>
    <p>password : {{ account.password }}</p>
    <button @click="onClickClearAcc">Clear account</button>
    <h4>Embeded Object Reactive</h4>
    <p>{{ status }}</p>
    <button @click="onClickClearStatus">Clear status</button>

    <!-- Life Cycle -->
    <p>{{ counter3 }}</p>
    <!-- Calling and binding component -->
    <HelloWorld msg="Example of calling and bind component" />
    <!-- <LoginForm/> or <login-form/> is acceptable -->
    <!-- atb :title = func/variable , title ="hard code string" -->
    <LoginForm title="title props" @submitLogin="handleLogin" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import LoginForm from "@/components/LoginForm.vue";
import { User } from "@/types/user.types";
let defaultValue = { name: "", status: "" };
export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    LoginForm,
  },
  // variable and function decalration

  setup() {
    // 1) js normal declaration
    let counter1 = 1;

    // 2) ref in vue == useState in react , <> is datatype , () is default value
    let counter2 = ref<number>(0);
    let counter3 = ref<number>(0);
    // 3) reactive var - use with {object} only
    let account = reactive({ username: "Nurse", password: "nursepwd" });
    // 4) embeded obj reactive
    const status = reactive({
      profile: { name: "wrty", status: "happy" },
    });

    // Life Cycle
    onMounted(() => {
      setInterval(mountedCounter, 1000);
    });
    // function declaration - use arrow func
    const onClick1 = () => {
      counter1++;
      console.log(counter1);
    };
    const onClick2 = () => {
      // If variable use ref when call var always use '.value' to call it
      counter2.value++;
    };
    const onClickClearAcc = () => {
      // account using reactive no need .value
      account.username = "";
      account.password = "";
    };
    const onClickClearStatus = () => {
      status.profile = defaultValue;
    };
    const mountedCounter = () => {
      counter3.value++;
    };
    // msg sent by child page
    const handleLogin = (msg:User)=>{
      alert(JSON.stringify(msg))
    }

    return {
      counter1,
      counter2,
      onClick1,
      onClick2,
      account,
      onClickClearAcc,
      status,
      onClickClearStatus,
      counter3,
      handleLogin
    };
  },
});
</script>
