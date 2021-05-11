<template>
    <div>
        <div class="items-wrapper">
            <div class="item-box">
                <div class="img-box">
                    <img src="../assets/blazer/blazer-mid-77-shoe-2PCxLw-0.jpg" />
                </div>
                <div class="item-details">
                    <div>Nike Shoe</div>
                    <div>Men's Shoe</div>
                    <div>1 color</div>
                    <div>$ 170</div>
                </div>
            </div>
            <div class="item-box">
                <div class="img-box">
                    <img src="../assets/air-max-genome-mens-shoe/air-max-genome-mens-shoe-hgsQFb-0.jpg" />
                </div>
                <div class="item-details">
                    <div>Nike Shoe</div>
                    <div>Men's Shoe</div>
                    <div>1 color</div>
                    <div>$ 170</div>
                </div>
            </div>
            <div class="item-box">
                <div class="img-box">
                    <img src="../assets/air-max-genome-womens-shoe/air-max-genome-womens-shoe-HfMvb1-0.jpg" />
                </div>
                <div class="item-details">
                    <div>Nike Shoe</div>
                    <div>Women's Shoe</div>
                    <div>1 color</div>
                    <div>$ 170</div>
                </div>
            </div>
            <div class="item-box">
                <div class="img-box">
                    <img src="../assets/air-max-270-womens-shoe/air-max-270-womens-shoe-Pgb94t-0.jpg" />
                </div>
                <div class="item-details">
                    <div>Nike Shoe</div>
                    <div>Women's Shoe</div>
                    <div>1 color</div>
                    <div>$ 170</div>
                </div>
            </div>
            <div class="item-box">
                <div class="img-box">
                    <img src="../assets/flex-runner-se-little-kids-shoe/flex-runner-se-little-kids-shoe-FmNp0D-0.jpg" />
                </div>
                <div class="item-details">
                    <div>Nike Shoe</div>
                    <div>Little Kid's Shoe</div>
                    <div>1 color</div>
                    <div>$ 50</div>
                </div>
            </div>
            <div class="item-box">
                <div class="img-box">
                    <img src="../assets/waffle-racer-crater-womens-shoe/waffle-racer-crater-womens-shoe-5cbMJ0-0.jpg" />
                </div>
                <div class="item-details">
                    <div>Nike Shoe</div>
                    <div>Women's Shoe</div>
                    <div>1 color</div>
                    <div>$ 100</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {

    },
    components: {

    },
}
</script>
<style scoped>
.items-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.items-wrapper .item-box {
    width: calc(33.33% - 10px);
    margin-bottom: 30px;
    cursor: pointer;
}
.items-wrapper .item-box img {
    width: 100%;
}
</style>