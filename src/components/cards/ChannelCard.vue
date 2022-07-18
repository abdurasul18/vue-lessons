<template>
  <div class="card">
    <a
      :href="`https://allplay.uz/c/${channel.id}/${channel.name}`"
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
    <button @click="deleteItem()" style="background: red; width: 80px">
      delete
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: Date.now(),
    };
  },
  props: {
    channel: {
      type: Object,
      default: () => {},
    },
    search: {
      type: String,
      default: "Salom",
    },
    index: {
      type: Number,
      default: -1,
    },
  },
  methods: {
    deleteItem() {
      this.$emit("deleteClicked", this.date);
    },
  },
  mounted() {},
};
</script>

<style>
</style>