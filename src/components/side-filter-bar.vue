<template>
    <div class="side-filter-bar">
        <div class="side-filtered-block">
            <ul>
                <li>Lifestyle</li>
                <li>Jordan</li>
                <li>Running</li>
                <li>Basketball</li>
                <li>Training and Gym</li>
                <li>Skateboarding</li>
                <li>Golf</li>
                <li>Tennis</li>
                <li>Walking</li>
            </ul>
            <div>
                <label>Gender</label>
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="">Men
                    </label>
                    </div>
                    <div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="">Women
                    </label>
                    </div>
                    <div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" disabled>Unisex
                    </label>
                </div>
            </div>
            <div>
                <label>Kids</label>
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="">Boys
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="">Girls
                    </label>
                </div>
            </div>
        </div>
        {{showSideFilteredBar}}
    </div>
</template>
<script>

export default {
    props: [
        'showSideFilteredBar',
    ],
    data(){
        return {
        }
    },
    methods: {

    },
}
</script>
