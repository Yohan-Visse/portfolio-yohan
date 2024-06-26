<template>
    <q-card bordered class="project-card">
        <q-card-section>
            <div class="text-h6">Spotifine</div>
            <p>A music streaming service similar to Spotify.</p>
        </q-card-section>
        <q-card-actions>
            <q-btn color="primary" label="View on GitHub" @click="goToGitHub" />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    name: 'SpotifineApp',
    methods: {
        goToGitHub() {
            window.open('https://github.com/Yohan-Visse/Spotifine', '_blank');
        }
    }
};
</script>

<style scoped>
.project-card {
    width: 100%;
    max-width: 400px;
    margin: 20px;
}
</style>