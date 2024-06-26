<template>
    <q-card bordered class="project-card">
        <q-card-section>
            <div class="text-h6">Puissance 4</div>
            <p>A classic Connect Four game implemented with js Native.</p>
        </q-card-section>
        <q-card-actions>
            <q-btn color="primary" label="View on GitHub" @click="goToGitHub" />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    name: 'PuissanceFourGame',
    methods: {
        goToGitHub() {
            window.open('https://github.com/Yohan-Visse/Puissance-4', '_blank');
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