<script setup>

</script>

<template>
    <div class="header">
        <div class="txt">
            <slot>Header</slot>
        </div>
        
         
    </div>

</template>

<style scoped> 
.header{
    height: 10vh;
    width: 100vw;
    background-color: antiquewhite;
}
.txt{
    font: 7vh sans-serif;
    padding-left: 2vw;
}
</style>