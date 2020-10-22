<template>
  <b-modal :active="isActive">
    <p class="image is-4by3">
      <img :src="imageURL" />
    </p>
  </b-modal>
</template>

<script>
export default {
  props: ['imageURL', 'isActive'],
};
</script>

<style></style>
