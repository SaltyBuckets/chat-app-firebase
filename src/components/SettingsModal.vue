<template>
  <b-modal
    :active="true"
    has-modal-card
    trap-focus
    :destroy-on-hide="false"
    aria-role="dialog"
    aria-modal
  >
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Settings</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <b-field label="Username">
            <b-input
              type="no-label"
              placeholder="Anonymous"
              :value="$store.state.username"
              icon="user-circle"
              icon-pack="fa"
              minlength="4"
              maxlength="50"
              :lazy="true"
            >
            </b-input>
          </b-field>

          <b-field class="file">
            <b-upload v-model="file" v-on:input="updateFile()" expanded>
              <a class="button is-primary is-fullwidth">
                <b-icon icon="upload"></b-icon>
                <span>{{ file.name || 'Click to upload' }}</span>
              </a>
            </b-upload>
          </b-field>
          <div class="box">
            <img
              id="profilePicture"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </div>

          <b-checkbox>Remember me</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$emit('close')">
            Close
          </button>
          <button class="button is-danger">
            Save
          </button>
        </footer>
      </div>
    </form>
  </b-modal>
</template>
//TODO npm install axios
<script>
export default {
  data() {
    return {
      file: {},
      file_encoded: '',
      file_isloaded: false,
    };
  },
  methods: {
    updateFile() {
      console.log(this.$store.state.userId);
      this.$store.dispatch('saveProfilePicture', {
        file: this.file,
        uid: this.$store.state.userId,
      });
    },
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

#file_upload {
  width: 100%;
}
</style>
