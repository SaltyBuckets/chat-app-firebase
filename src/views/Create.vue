<template>
  <div id="app">
    <Navbar />
    <h1>create new user page</h1>

    <button @click="openModal()"><strong>Create New User</strong></button>

    <CreateUserModal :v-if="this.modalIsActive" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import CreateUserModal from '@/components/CreateUserModal';
export default {
  data() {
    return {
      modalIsActive: false,
    };
  },

  methods: {
    openModal() {
      this.modalIsActive = true;
    },
  },

  components: {
    Navbar,
    CreateUserModal,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /* margin: 30px; */
}
</style>
