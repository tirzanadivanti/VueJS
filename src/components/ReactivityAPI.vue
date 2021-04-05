<template>
    <h1>Luas Segitiga</h1>
    <label for="alas">Alas </label>
    <input v-model="alas" type="number" name="alas" />
    <label for="tinggi">Tinggi </label>
    <input v-model="tinggi" type="number" name="tinggi" />
    <h3>Luas</h3>
    <h1>{{ luas }}</h1>
</template>
<script>
import { ref } from 'vue';
import { computed } from 'vue';
import { watch } from 'vue';

export default {
    name: 'App',
    setup() {
        const alas = ref(0);
        const tinggi = ref(0);
        const luas =computed(()=> parseFloat(alas.value)*parseFloat(tinggi.value)*0.5);

        function hitung(){
            luas.value = parseFloat(alas.value) * parseFloat(tinggi.value) * 0.5;
        }
        watch(luas, (newValue, oldValue) => {
            console.log('The new counter value is: ' + newValue);
            console.log('The old cuounter value is: ' + oldValue);
            if(newValue>10){
                console.log("LuasLebih dari 10");
            }
        });

        return{
            alas,
            tinggi,
            luas,
            hitung
        }
    }
}
</script>
<style scoped>
    label{
        margin-left: 10px;
    }
</style>