<template>
  <b-modal
    :active="true"
    has-modal-card
    trap-focus
    :destroy-on-hide="false"
    aria-role="dialog"
    aria-modal
  >
    <form action="" @submit.prevent="saveProfile()">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Create New User</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <b-field label="Username">
            <b-input
              type="no-label"
              placeholder="Anonymous"
              icon="user-circle"
              icon-pack="fa"
              minlength="4"
              maxlength="50"
              :lazy="true"
              v-model="userData.username"
            >
            </b-input>
          </b-field>
          <b-field
            class="file"
            label="profilePicture"
            :class="{ 'has-name': !!file }"
            type="file"
          >
            <b-upload
              v-model="file"
              v-on:input="updateFile()"
              class="file-label"
              :expanded="true"
            >
              <a class="button is-danger is-fullwidth">
                <b-icon icon="upload"></b-icon>
                <span>{{ 'Click to upload' }}</span>
              </a>
            </b-upload>
            <div class="box">
              <figure class="image is-128x128 is-centered">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
          </b-field>

          <b-checkbox v-model="rememberMe">Remember me</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$emit('close')">
            Close
          </button>
          <button class="button is-danger" type="submit">
            Save
          </button>
        </footer>
      </div>
    </form>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      file: null,
      saveable: false,
      userData: {
        username: 'Anonymous',
        userID: '',
        profilePicture: 'https://bulma.io/images/placeholders/128x128.png',
      },
      rememberMe: true,
    };
  },
  methods: {
    updateFile() {
      console.log('update pfp');
    },

    saveProfile() {
      console.log(
        this.userData.userID,
        this.userData.username,
        this.userData.profilePicture
      );

      // this.$store.dispatch('saveProfile', {
      //   uid: this.userData.userID,
      //   username: this.userData.username,
      //   profilePicture: this.userData.profilePicture,
      //   rememberMe: this.rememberMe,
      // });

      // console.log('profile saved');
      // this.$router.replace('/');
    },
  },

  mounted: async function() {
    console.log('app mounted');
    if (localStorage.getItem('userData')) {
      //if user is logged in
      let userData_local = JSON.parse(localStorage.getItem('userData'));
      console.log('data:', userData_local);
      this.$buefy.toast.open(`User Already logged in`);
      this.$buefy.toast.open(`Redirecting...`);
      setTimeout(
        function() {
          this.$router.replace('/');
        }.bind(this),
        3000
      );
    } else {
      //else if user is not logged in
    }
  },
};
</script>

<style scoped>
.file {
  display: flex;
  flex-direction: column;
}

.image {
  margin: auto;
}
b-upload {
  border-radius: 5px;
}
</style>
