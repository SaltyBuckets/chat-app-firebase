<template>
  <div id="app" class="container">
    <Navbar v-on:activateModal="activateModal" />
    <div class="messages mgb-large">
      <!-- <Message
        v-for="(message, index) in Messages"
        :key="index"
        :message="message.message"
        :date="message.date"
        :image="message.image"
      /> -->
      <Message
        v-for="(message, index) in Messages"
        :key="index"
        :message="message.message"
        :name="message.sender.username"
        :profilePhoto="message.sender.profilePicture"
        :date="message.date"
        :mediaImage="message.image"
      />
    </div>
    <!-- <p v-for="(message, index) in Messages" :key="index">{{ message }}</p> -->
    <Input v-on:submit="sendMessage()" />
    <SettingsModal v-if="this.modalIsActive" v-on:close="deactivateModal" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Input from '@/components/Input';
import Message from '@/components/Message';
import SettingsModal from '@/components/SettingsModal';
import database from '@/firebase.js';
import { db } from '@/db.js';
export default {
  name: 'App',
  data() {
    return {
      username: 'username',
      profilePicture: 'imageUrl',
      modalIsActive: false,
      currentGroupchat: null,
      messages: [],
    };
  },

  computed: {
    Messages() {
      return this.$store.state.doc.messages;
    },
  },
  methods: {
  
  function scrolly() {
    let element = document.getElementsByClassName("messages");
    element.scrollTop = element.scrollHeight;
    };
  
    sendMessage() {
    
    scrolly();
    
      this.$store.dispatch('sendMessage');

      window.scrollBy({   
        behavior: 'smooth',
      });
    },
    activateModal() {
      this.modalIsActive = true;
    },

    deactivateModal() {
      this.modalIsActive = false;
    },

    testdb() {
      console.log(this.Messages);
    },
  },

  created() {
    this.$store.dispatch('bindMessages');
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
  margin-bottom: 20vh;
  padding: 0 10px;
  margin-top: 0px;
}

</style>
