<template>
    <div>
        <div id="test">
            <button @click="isShow = !isShow">toggle</button>
            <transition name="fade">
                <div v-show="isShow" class="container">
                    <p >Hello world</p>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name:'es-animation',
    data(){
        return {
            isShow:true
        }
    }
}
</script>

<style scoped>
    /* .fade-in-linear-enter{
         transition: opacity .5s;
    } */
    .fade-enter-active{
         animation: bounce-in .5s;
    }
    .fade-leave-active{
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
    }
    /* .fade-enter,.fade-leave-to{
        opacity: 0;
    } */
    .container{
        width: 500px;
        height: 300px;
        background-color:pink;
    }
</style>

