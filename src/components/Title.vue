<template>
    <div class="title">
        <div class="primary"><img src="../assets/images/title2.png" alt="">{{ name }}</div>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
        },
    }
};
</script>

<style scoped>
.primary {
    position: relative;
    color: #333;
    text-align: center;
    font-weight: 800;
    font-size: 2rem;
}

.primary img {
    height: 50px;
    filter: brightness(0) saturate(100%) invert(14%) sepia(6%) saturate(15%) hue-rotate(315deg) brightness(95%) contrast(82%);
}

@media only screen and (max-width : 576px) {
    .primary {
        font-size: 1.5rem;
    }
}
</style>