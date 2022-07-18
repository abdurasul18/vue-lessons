<template>
  <a
    :href="`https://allplay.uz/c/${channel.id}/${channel.name}`"
    class="card"
    target="_blank"
  >
    <img
      v-if="channel.icon"
      class="card-img"
      :src="channel.icon.url_500x500"
      :alt="channel.name"
    />
    <div class="text">{{ channel.name }}</div>
    <div class="badge" v-if="channel.input_quality !== 'sd'">
      {{ channel.input_quality }}
    </div>
    {{ search }}
  </a>
</template>

<script>
export default {
  props: {
    channel: {
      type: Object,
      default: () => {},
    },
    search: {
      type: String,
      default: "Salom",
    },
  },
  mounted() {},
};
</script>

<style>
</style>