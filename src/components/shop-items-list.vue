<template>
    <div>
        <div class="filtered-header">
            <h4 class="type-label">men's(120)</h4>
            <div class="filtered-block">
                <div class="hide-filter" @click="showHideFilters">
                    <label class="filter-label">{{showHideFilterText}}</label>
                    <i class="fas fa-sliders-h"></i>
                </div>
                <div class="sort-filter">
                    <label class="sort-label">Sort By:</label>
                    <select class="sort-select">
                        <option>Featured</option>
                        <option>Newest</option>
                        <option>Price: High - Low</option>
                        <option>Price: Low - High</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="shop-items-side-filter">
            <div class="side-filtered-section" :class="showSideFilteredBar ? 'hide-side-filtered-section' : ''">
                <side-filtered-bar :showSideFilteredBar="showSideFilteredBar"></side-filtered-bar>
            </div>
            <div class="shop-items-list-wrapper" :class="showSideFilteredBar ? 'show-full-width' : ''">
                <shop-items></shop-items>
            </div>
        </div>
    </div>
</template>
<script>
import SideFilteredBar from './side-filter-bar';
import ShopItems from './shop-items';

export default {
    data(){
        return {
            showSideFilteredBar: false,
        }
    },
    methods: {
        showHideFilters(){
            this.showSideFilteredBar = !this.showSideFilteredBar;
            console.log(this.showSideFilteredBar);
        }
    },
    computed: {
        showHideFilterText(){
            return this.showSideFilteredBar ? "Show Filters" : "Hide Filters";
        }
    },
    components: {
        SideFilteredBar,
        ShopItems
    },
}
</script>
<style scoped>
.filtered-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

}
.filtered-block {
    display: flex;
    align-items: center;
}
.hide-filter {
    font-size: 17px;
    margin-right: 30px;
    cursor: pointer;
}
.hide-filter .filter-label {
    margin-right: 5px;
    cursor: pointer;
}
.sort-filter .sort-label {
    margin-right: 5px;
}
.sort-filter .sort-select {
    border-radius: 15px;
    padding: 5px;
    cursor: pointer;
}
.shop-items-side-filter {
    display: flex;
}
.side-filtered-section {
    width: 260px;
    border-right: 1px solid red;
    padding: 30px;
    transition: 1s;
}
.side-filtered-section.hide-side-filtered-section {
    margin-left: -260px;
}
.shop-items-list-wrapper {
    width: calc(100% - 260px);
    padding: 30px;
}
.shop-items-list-wrapper.show-full-width {
    width: 100%;
}
@media (max-width: 767px) {
    .shop-items-list-wrapper {
        width: 100%;
    }
}
</style>
