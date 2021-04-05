<template>
    <table>
        <tr>
            <th>Pengeluaran</th>
            <th>Keterangan</th>
        </tr>
        <tr v-for="(pengeluaran, index) in dataPengeluaran" :key="index">
            <td>{{ pengeluaran.nominal }}</td>
            <td>{{ pengeluaran.keterangan }}</td>
        </tr>
    </table>
</template>
<script>
export default {
    props: {
        dataPengeluaran : Array,
    }
}
</script>
<style scoped>
    table{
        margin-top: 10px;
        margin-left: 330px;
    }
    table, tr, td, th{
        border-collapse: collapse;
        border: 1px solid black;
        color: black;
    }
    td, th{
        width: 300px;
    }
</style>