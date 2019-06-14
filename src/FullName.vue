<template>
    <input type="text" :value="value" @input="changeName($event)">
</template>

<script>
export default {
    props: ['value'],
    methods: {
        changeName(event) {
            this.value = event.target.value;
            this.$emit('input', this.value);
        }
    }
}
</script>

<style>

</style>
