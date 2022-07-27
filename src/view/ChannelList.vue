<template>
  <div>
    <h1> {{ dmy(date) }} </h1>
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
    <my-button @click.native="goMovie"> to Movies </my-button>
    <button
      @click="$store.commit('TOGGLE_IS_OPEN', !$store.state.isOpen)"
      class="my-btn"
    >
      Toggle Sidebar
    </button>
    <div class="row" v-if="this.channels.length">
      <ChannelCard
        v-for="(item, index) in filteredChannels"
        :key="index"
        :channel="item"
        :search="searchVal"
        @deleteClicked="
          (e) => {
            deleteItem(index, e);
          }
        "
      ></ChannelCard>
    </div>
    <h5 v-else-if="!loading">Ma'lumot topilmadi</h5>
    <div class="loader" v-if="loading">
      <img src="@/assets/loader.svg" alt="" />
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/elements/AppButton.vue";
import { dmy } from "@/util";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    MyButton,
  },
  data() {
    return {
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
      date: 1658932795068,
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
    ...mapState("channel", ["channels"]),
    ...mapGetters("channel", ["uzChannels"]),
  },
  methods: {
    dmy,
    ...mapActions("channel", ["getChannels"]),
    deleteItem(index, e) {
      console.log(e);
      if (confirm("Are you sure delete?")) {
        this.channels.splice(index, 1);
      }
    },
    goMovie() {
      this.$router.go(-1);
    },
  },
  async mounted() {
    this.loading = true;
    await this.$store.dispatch("channel/getChannels");
    this.loading = false;
  },
};
</script>

<style>
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