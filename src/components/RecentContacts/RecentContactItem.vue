<template>
    <div
        class="card swiper-slide shadow-lg px-0 pb-2 rounded-4 animate__fadeIn animate__animated"
    >
        <div class="box mb-3">
            <div class="image-content d-flex justify-content-center pt-3">
                <div class="card-image border rounded-circle border-2">
                    <img
                        src="@/assets/avatar.png"
                        alt=""
                        class="card-img rounded-circle"
                        style="width: 100px; height: 100px"
                    />
                </div>
            </div>
        </div>

        <div class="card-content text-center">
            <h5 class="name mt-3 fw-bold">{{ contact.name }}</h5>
        </div>
        <div class="contact-other d-flex justify-content-evenly fs-4">
            <a href="https://facebook.com"
                ><i class="bi bi-facebook text-dark"></i
            ></a>
            <a href="https://twitter.com"
                ><i class="bi bi-twitter text-dark"></i
            ></a>
            <a href="https://instagram.com"
                ><i class="bi bi-instagram text-dark"></i
            ></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecentContactItem",
    props: ["contact"],
};
</script>

<style>
.box {
    border-radius: 13px 13px 0 0;
    height: 100px;
    background-image: linear-gradient(
        to right,
        rgba(122, 42, 219, 0.3) 60%,
        rgba(122, 42, 219, 0.2)
    );

    /* rgba(243, 15, 221, 1) rgba(243, 163, 35, 1) */
}

.card {
    border-color: rgb(208, 208, 208) !important;
}

.card-image {
    min-width: 20px;
    box-shadow: 0px -2px 8px 0px rgb(230 217 217);
}
</style>
