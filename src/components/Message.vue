<template
  ><div class="message" :class="{ my: mine }">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="profilePhoto" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong class="subheading">{{ name }}</strong>
            <br />
            {{ message }}
          </p>
          <div class="box">
            <img :src="mediaImage" alt="media" @click="activateModal()" />

            <b-modal :active.sync="popupIsActive">
              <p class="image is-4by3">
                <img :src="mediaImage" />
              </p>
            </b-modal>
          </div>
        </div>
        <small class="date is-pulled-right mx-6"> {{ date }} </small>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ['message', 'date', 'name', 'profilePhoto', 'mediaImage'],
  data() {
    return {
      popupIsActive: false,
      mine: false,
    };
  },
  methods: {
    activateModal() {
      console.log('image open');
      this.popupIsActive = true;
    },
    deactivateModal() {
      console.log('image Closed');
      this.popupIsActive = false;
    },
  },

  created() {
    if (this.$store.state.username == this.name) console.log('mine');
    this.mine = true;
  },
};
</script>

<style>
.message {
  padding: 15px;
}

.date {
  color: gray;
}

.box {
  max-width: max-content;
  margin: auto;
}

.my {
  background-color: RGBA(255, 56, 96, 0.1);
}
</style>
