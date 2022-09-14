<template>
    <navbar />
    <sidebar />
    <content />
    <foot />
</template>

<script>
import navbar from "./layouts/navbar.vue";
import sidebar from "./layouts/sidebar.vue";
import foot from "./layouts/footer.vue";
import content from "./layouts/content.vue";

export default {
    components: {
        navbar,
        sidebar,
        content,
        foot,
    },
    mounted() {
        console.log('mounted successful');
    }
};
</script>
