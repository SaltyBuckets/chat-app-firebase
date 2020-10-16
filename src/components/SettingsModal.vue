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
              :value="$store.state.username"
              placeholder="Anonymous"
            >
            </b-input>
          </b-field>
          <b-field
            class="file"
            label="ProfilePicture"
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

          <b-checkbox>Remember me</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$emit('close')">
            Close
          </button>
          <button class="button is-danger" @click="saveProfilePicture()">
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
      file: null,
      file_encoded: '',
      file_isloaded: false,
    };
  },
  methods: {
    updateFile() {
      console.log(this.file);
      // let reader = new FileReader();
      // reader.onloadend = function() {
      //   console.log(this.file);
      //   this.file_encoded = reader.result;
      //   console.log(this.file_encoded);
      // };
      // reader.readAsDataURL(this.file);

      var reader = new FileReader();
      reader.onload = (function(reader) {
        return function() {
          this.file_encoded = reader.result.toString();
          this.$store.dispatch('updateProfilePicture', {
            file_encoded: this.file_encoded,
          });
          console.log(this.file_encoded);
        };
      })(reader);

      reader.readAsDataURL(this.file);
    },
    saveProfilePicture() {
      // if (this.file_encoded == '') {
      //   this.$buefy.toast.open('takli upload profile photo first');
      //   return;
      // }
      console.log(this.file_encoded);
      this.$store.dispatch('updateProfilePicture', {
        file_encoded: this.file_encoded,
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
</style>
