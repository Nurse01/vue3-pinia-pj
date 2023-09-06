<template>
  <h3>Login component</h3>
  <p>{{ title }}</p>
  <!-- two way binding -->
  <form>
    <label for="username">username</label>
    <input
      type="text"
      name="username"
      id="username"
      v-model="user.detail.username"
    />
    <br />
    <label for="password">password</label>
    <input
      type="text"
      name="password"
      id="password"
      v-model="user.detail.password"
    />
    <p>{{ user.detail }}</p>
    <button @click="submit">Submit</button>
    <button @click="clear">Clear</button>
  </form>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import {User} from '@/types/user.types';
interface LoginState {
  account: User;
}

export default defineComponent({
  props: ["title"],
  emits: ["submitLogin"],
//   pass emit in setup
  setup(props, { emit }) {
    const user = reactive({
      detail: { username: "", password: "" },
    });

    const clear = () => {
      user.detail = { username: "", password: "" };
    };
    const submit = () => {
        // Call submit login in parent page 
        // emit(funcname, pass value to parent)
        emit("submitLogin",user.detail)
    };
    return { user, clear, submit };
  },
});
</script>
