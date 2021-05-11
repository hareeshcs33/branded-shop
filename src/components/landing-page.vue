<template>
    <div class="landing-page">
        <navigation-bar></navigation-bar>
        <!-- <app-carousel></app-carousel> -->
        <shop-items-list></shop-items-list>
    </div>
</template>
<script>
import NavigationBar from './navigation-bar.vue';
import AppCarousel from './app-carousel';
import ShopItemsList from './shop-items-list';

export default {
    data(){
        return {

        }
    },
    components: {
        NavigationBar,
        AppCarousel,
        ShopItemsList
    }
}
</script>