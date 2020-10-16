<template
  ><div class="message">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong class="subheading">{{ name }}</strong>
            <br />
            {{ message }}
          </p>
        </div>
        <!-- <nav class="level is-mobile"> -->
        <small class="is-pulled-right mx-6"> {{ date }} </small>
        <!-- </nav> -->
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ['message', 'date', 'name'],
};
</script>

<style>
.message {
  padding: 15px;
}
</style>
