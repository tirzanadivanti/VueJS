<template>
    <h1>HELLO WORLD</h1>
    <h4>Project Vue Yooooo</h4>

    <h2>== deklarasi rendering ==</h2>
    <h4>Hola {{ nama }}</h4>
    <h4>umur {{ umur }}</h4>

    <h2>== directives, event listener(v-on) ==</h2>
    <h4>{{ bilangan }}</h4>
    <button v-on:click="next">Next</button>

    <h2>== Two Way Data Binding (v-model) ==</h2>
    <h4>{{ messages }}</h4>
    <input v-model="messages" />

    <h2>== conditional (v-if) ==</h2>
    <h4>{{ bil }}</h4>
    <h4 v-if="ganjil">Ganjil</h4>
    <h4 v-if="genap">Genap</h4>
    <button v-on:click="randomNumber">Generate</button>

    <h2>== Loops (v-for) ==</h2>
    <table border=1>
        <tr v-for="hari in namaHari" v-bind:key="hari">
            <td>{{ hari }}</td>
        </tr>
    </table>
</template>

<script>
export default {
    data() {
        return {
            // deklarasi
            nama: "MasMolen",
            umur: 20,
            //directives
            bilangan: 10,
            //two Way
            messages:'',
            //conditional
            bil:1,
            ganjil:false, 
            genap:false,
            // Loop
            namaHari : ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
        };
    },
    mounted() {
        this.umur = this.umur + 1;// deklarasi

        this.randomNumber();

    },
    methods:{
        //directives
        next(){
            this.bilangan += 5; 
        },

        //conditional
        randomNumber(){
            this.bil = Math.floor(Math.random()*100);
            this.showHide();
        },
        showHide(){
            if(this.bil%2==0){
                this.genap = true;
                this.ganjil = false;
            }else{
                this.genap = false;
                this.ganjil = true;
            }
        }
    }
};
</script>
<style scoped></style>
