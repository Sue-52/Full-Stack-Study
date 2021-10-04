<template>
    <div>
        <div>接受路径参数1：{{ $route.params.cid }}</div>
        <div>接受路径参数2：{{ $route.params.id }}</div>
    </div>
</template>

<script>
export default {
    validata({ params }) {
        return /^\d+$/.test(params.id);
    }
};
</script>

<style></style>
