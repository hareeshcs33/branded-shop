<template>
    <div class="landing-page">
        <navigation-bar></navigation-bar>
        <!-- <app-carousel></app-carousel> -->
        <text-carousel></text-carousel>
        <shop-items-list></shop-items-list>
        <app-footer></app-footer>
    </div>
</template>
<script>
import NavigationBar from './navigation-bar.vue';
import AppCarousel from './app-carousel';
import TextCarousel from './text-carousel';
import ShopItemsList from './shop-items-list';
import AppFooter from './app-footer';

export default {
    data(){
        return {

        }
    },
    components: {
        NavigationBar,
        AppCarousel,
        TextCarousel,
        ShopItemsList,
        AppFooter,
    }
}
</script>