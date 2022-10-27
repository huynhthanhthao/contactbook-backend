<template>
    <nav class="row navbar navbar-expand-lg bg-light shadow px-4">
        <div class="container-fluid">
            <a
                class="navbar-brand"
                href="#"
                style="font-family: 'Rubik Dirt', cursive"
                ><img
                    src="@/assets/iconcontact.png"
                    class="mb-1"
                    style="width: 30px"
                />
                Contact Book</a
            >
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul
                    class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                    style="--bs-scroll-height: 100px"
                ></ul>
                <form class="d-flex" role="user">
                    <div
                        class="d-flex align-items-center justify-content-end"
                        style="width: 200px"
                    >
                        <i class="bi bi-person-circle fs-3 mx-2"></i>
                        B1906570
                    </div>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavComponent",
};
</script>

<style></style>
