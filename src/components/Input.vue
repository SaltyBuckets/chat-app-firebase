<template>
  <div id="msgbox">
    <b-field type="is-danger">
      <b-input
        id="input"
        placeholder="Type a message..."
        size="is-medium"
        v-model="message"
        icon="email"
        icon-right="chevron-double-right"
        icon-right-clickable
        @icon-right-click="submit"
        v-on:keydown.enter.native="submit()"
      >
      </b-input>
    </b-field>

    <!-- <AttachmentsBubble /> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AttachmentsBubble from '@/components/AttachmentsBubble';
export default {
  methods: {
    submit() {
      console.log('submit');
      this.$emit('submit');
      this.message = '';
    },
  },
  computed: {
    message: {
      get() {
        return this.$store.state.message;
      },
      set(newMessage) {
        this.$store.commit('SET_CURRENTMESSAGE', newMessage);
      },
    },
  },

  components: {
    AttachmentsBubble,
  },
};
</script>

<style>
#msgbox {
  position: fixed;
  bottom: 20px;
  width: inherit;
}
</style>
