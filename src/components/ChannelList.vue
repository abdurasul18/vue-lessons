<template>
  <div class="container">
    <h2 class="title">Список каналов</h2>
    <div class="filters">
      <span
        v-for="(category, index) in categories"
        :key="index"
        :class="{ active: category.value == activeCategory }"
        @click="activeCategory = category.value"
      >
        {{ category.text }}
      </span>
    </div>
    <input
      placeholder="Search"
      class="searchInput"
      type="text"
      v-model="searchVal"
    />
    <div class="row" v-if="this.channels.length">
      <ChannelCard
        v-for="(item, index) in filteredChannels"
        :key="index"
        :channel="item"
        :search="searchVal"
      ></ChannelCard>
    </div>
    <h5 v-else-if="!loading">Ma'lumot topilmadi</h5>
    <div class="loader" v-if="loading">
      <img src="@/assets/loader.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channels: [],
      loading: false,
      categories: [
        {
          value: "",
          text: "all",
        },
        {
          value: "Новостные",
          text: "Новостные",
        },
        {
          value: "Кино",
          text: "Кино",
        },
        {
          value: "Узбекские",
          text: "Узбекские",
        },
      ],
      activeCategory: "",
      searchVal: "",
    };
  },
  computed: {
    filteredChannels() {
      return this.channels
        .filter((el) => {
          if (!this.activeCategory) {
            return true;
          } else {
            return el.categories.some((cat) => cat.name == this.activeCategory);
          }
        })
        .filter((el) => {
          return el.name.toLowerCase().includes(this.searchVal.toLowerCase());
        });
    },
  },
  methods: {
    async getChannels() {
      try {
        this.loading = true;
        let res = await fetch("https://api.allplay.uz/api/v1/iptv/channels");
        let resJson = await res.json();
        this.channels = resJson.data;
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getChannels();
  },
};
</script>

<style>
@import "@/assets/css/styles.css";
.searchInput {
  background: hsla(0, 0%, 100%, 0.12);
  cursor: pointer;
  padding: 1rem 1.5rem;
  background: hsla(0, 0%, 100%, 0.08);
  border: none;
  -webkit-backdrop-filter: blur(1.5rem);
  backdrop-filter: blur(1.5rem);
  font-size: 1.25rem;
  line-height: 1.2;
  width: 100%;
  color: #fff;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  width: 300px;
  margin-bottom: 30px;
}
.filters {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}
.filters span {
  cursor: pointer;
  font-size: 1.1875rem;
  line-height: 2rem;
  border: 0;
  border-radius: 2.5rem;
  padding: 0.25rem 1rem;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  background-color: hsla(0, 0%, 100%, 0.16);
  margin-right: 15px;
}
.filters span.active {
  background: #f90;
}
.title {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 30px;
  margin-top: 150px;
}
.card {
  width: 190px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all ease 0.3s;
  margin: 0 5px 35px 0;
}
.card:hover {
  transform: scale(1.05);
}
.card-img {
  width: 100%;
  object-fit: cover;
  height: 110px;
}
.text {
  margin-top: 10px;
  text-align: center;
  color: #fff;
  text-decoration: none;
}
.badge {
  position: absolute;
  top: 15px;
  left: 0;
  background: #5cb85c;
  padding: 0.1875rem 0.375rem;
  color: #fff;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.loader {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>