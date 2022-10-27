<template>
    <div class="error flex-column text-center mt-5">
        <img src="@/assets/error.png" alt="" style="width: 400px" />
        <h1 class="text-light mt-2">Not Found!</h1>
        <router-link to="/" class="btn btn-light">Back to home</router-link>
    </div>
</template>

<script>
export default {
    name: "ErrorComponent",
};
</script>

<style></style>
