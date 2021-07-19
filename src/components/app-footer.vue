<template>
    <div class="footer-wrapper">
        <div>footer</div>
        <div>Terms and conditions</div>
        <button class="btn btn-link" @click="openModal">Open Modal</button>
        <div>
            <modal v-model="modalOpen"></modal>
        </div>
    </div>
</template>
<script>
import Modal from './modal.vue';

export default {
    data(){
        return {
            modalOpen: false,
        }
    },
    methods: {
        openModal(){
            console.log("openModal", this.modalOpen);
            this.modalOpen = !this.modalOpen;
        }
    },
    components: {
        Modal,
    }
}
</script>
<style scoped>
.footer-wrapper {
    color: #fff;
    background-color: #111;
    padding: 30px;
}
</style>