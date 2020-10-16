<template>
  <div id="app" class="container">
    <Navbar v-on:activateModal="activateModal" />
    <div class="messages mgb-large">
      <button id="test" @click="test()">TT ESt</button>
      <Message
        v-for="(message, index) in messages"
        :key="index"
        :name="message.name"
        :message="message.message"
        :date="message.date"
      />
    </div>
    <Input v-on:submit="sendMessage()" />
    <SettingsModal
      v-if="this.modalIsActive"
      v-on:close="deactivateModal"
      v-on:saveProfilePicture="saveProfilePicture"
    />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Input from './components/Input';
import Message from './components/Message';
import SettingsModal from './components/SettingsModal';
import database from '@/firebase.js';
export default {
  name: 'App',
  data() {
    return {
      username: 'username',
      profilePicture: 'imageUrl',
      modalIsActive: false,

      messages: [],
      groupChats: this.$store.state.groupChats,
    };
  },
  methods: {
    sendMessage() {
      this.messages.push({
        message: this.$store.state.message,
        date: '5',
        name: this.$store.state.username,
      });
      window.scrollBy({
        top: 10000000,
        left: 0,
        behavior: 'smooth',
      });
    },
    activateModal() {
      this.modalIsActive = true;
    },

    deactivateModal() {
      this.modalIsActive = false;
    },
    saveProfilePicture() {},

    test() {
      this.$store.dispatch('testDatabase', {});
    },
  },

  components: {
    Navbar,
    Input,
    Message,
    SettingsModal,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /* margin: 30px; */
}
.messages {
  scroll-margin-bottom: 400px;
  margin-bottom: 300px;
  padding: 0 10px;
}
</style>
