<template>
    <q-page class="q-pa-md q-gutter-md">
        <div class="projects-title">My Projects</div>
        <div class="projects-container row justify-center">
            <PuissanceFourGame />
            <SpotifineApp />
        </div>
    </q-page>
</template>

<script>
import PuissanceFourGame from 'components/PuissanceFourGame.vue';
import SpotifineApp from 'components/SpotifineApp.vue';

export default {
    name: 'ProjectsPage',
    components: {
        PuissanceFourGame,
        SpotifineApp
    }
};
</script>

<style scoped>
.projects-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
}

.projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>