<template>
  <b-navbar class="is-danger" :fixed-top="true">
    <template slot="brand">
      <b-navbar-item>
        <strong>Chat App</strong>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item @click="activateModal">
        <div>Settings</div>
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          greebo ka whatsapp
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      settingsModalIsActive: false,
    };
  },
  methods: {
    activateModal() {
      this.$emit('activateModal');
    },
  },
  components: {},
};
</script>

<style></style>
