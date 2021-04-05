<template>
  <!-- <Title title="Catatan Harian" />
  <FormPengeluaran @entri-pengeluaran="entriPengeluaran($event)" />
  <h2 v-if="warning" class="warning">Pengeluaran Terlalu Banyak</h2>
  <h2>Total Pengeluaran : {{ totalPengeluaran }}</h2>
  <ListPengeluaran v-if="showPengeluaran" :dataPengeluaran="dataPengeluaran" /> -->
  <!-- <ReactivityAPI /> -->
  <Navbar :idMenu="idMenu" :key="idMenu" />
  <router-view @id-menu="setMenu($event)" />
</template>

<script>
// import Title from './components/Title.vue';
// import FormPengeluaran from './components/FormPengeluaran.vue';
// import ListPengeluaran from './components/ListPengeluaran.vue';
// import ReactivityAPI from "./components/ReactivityAPI.vue";
import Navbar from "@/components/Navbar.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    // Title,
    // FormPengeluaran,
    // ListPengeluaran,
    // ReactivityAPI,
    Navbar,
  },
  setup() {
    const idMenu = ref(1);

    function setMenu(id) {
      idMenu.value = id;
    }
    return {
      setMenu,
      idMenu,
    };
  },
  // data() {
  //   return {
  //     dataPengeluaran: [
  //       { nominal: "20000", keterangan: "makan siang" },
  //       { nominal: "15000", keterangan: "jajan" },
  //       { nominal: "50000", keterangan: "listrik" },
  //     ],
  //   };
  // },
  // methods: {
  //   entriPengeluaran(event) {
  //     this.dataPengeluaran.push(event);
  //   },
  // },
  // computed: {
  //   showPengeluaran: function() {
  //     return this.dataPengeluaran.length > 0;
  //   },
  //   totalPengeluaran: function() {
  //     return this.dataPengeluaran.reduce(
  //       (accum, item) => accum + parseInt(item.nominal),
  //       0
  //     );
  //   },
  // },
  // watch: {
  //   totalPengeluaran: function(val) {
  //     if (val >= 100000) {
  //       this.warning = true;
  //     }
  //   },
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0000;
  margin-top: 60px;
}
h2 {
  text-align: center;
}
.warning {
  color: blue;
}
</style>
