<template>
    <form class="form-pengeluaran" @submit.prevent="catat">
        <div>
            <label>Pengeluaran </label>
            <input v-model="pengeluaran" type="number" id="pengeluaran">
            <label>Keterangan </label>
            <input v-model="keterangan" type="text" id="keterangan">
            <button>Catat!</button>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return{
            pengeluaran: null,
            keterangan: null,
        }
    },
    methods:{
        catat(){
            this.$emit('entri-pengeluaran', {
                nominal: this.pengeluaran,
                keterangan: this.keterangan,
            });
            this.pengeluaran = null;
            this.keterangan = null;
            document.getElementById("pengeluaran").focus()
        }
    },
}
</script>
<style scoped>
    input, button{
        margin-top: 5px;
    }
    label, button{
        margin-left: 5px;
    }
    form{
        color: black;
    }
</style>