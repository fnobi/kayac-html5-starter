<template lang="pug">
.top hello.
</template>

<style lang="scss" scoped>
@import "common";
.top {
    margin: 1em;
    padding: 1em;
    @include sp-layout {
        background-color: #eef;
    }
    @include pc-layout {
        background-color: #fee;
    }
}
</style>

<script>
export default {
    name: 'top',
};
</script>
