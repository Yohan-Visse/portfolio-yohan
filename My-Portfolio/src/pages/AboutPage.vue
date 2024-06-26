<template>
    <q-page class="flex flex-center">
        <q-card class="about-card">
            <div class="about-header">
                <q-img src="../assets/YohanPortfolio.jpg" alt="Profile Image" class="about-image" />
                <div class="about-content">
                    <div class="about-title">About Me</div>
                    <p class="about-text">
                        J'ai commencé une formation de Développeur Web fin novembre 2023 à Epitech Lille, dans la
                        WebAcademie. Cette formation m'offre une opportunité de reconversion professionnelle et m'a
                        permis de découvrir ma passion pour le développement web.
                    </p>
                    <p class="about-text">
                        Depuis que j'ai découvert JavaScript, j'ai trouvé une certaine facilité avec ce langage et je
                        l'apprécie particulièrement pour sa flexibilité et sa puissance. En explorant davantage le
                        développement web, j'ai travaillé avec des frameworks populaires comme React, React Native, et
                        Expo, ce qui m'a permis de développer des applications web et mobiles de manière efficace et
                        moderne.
                    </p>
                    <p class="about-text">
                        Actuellement, j'utilise Quasar pour la première fois dans ce portfolio. Je trouve ce framework
                        intéressant car il simplifie le développement d'applications responsives et performantes grâce à
                        ses composants préconstruits et son intégration avec Vue.js.
                    </p>
                    <p class="about-text">
                        Je suis enthousiaste à l'idée de continuer à apprendre et à développer mes compétences en
                        développement web, en explorant de nouvelles technologies et en relevant de nouveaux défis.
                    </p>
                </div>
            </div>
        </q-card>
    </q-page>
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>

<style scoped>
.about-card {
    max-width: 800px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    overflow: hidden;
    padding: 16px;
}

.about-header {
    display: flex;
    align-items: flex-start;
}

.about-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid black;
    margin-right: 16px;
}

.about-content {
    flex: 1;
}

.about-title {
    font-family: 'Georgia', serif;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.about-text {
    font-family: 'Arial', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
}

/* Responsive styles */
@media (max-width: 600px) {
    .about-header {
        flex-direction: column;
        align-items: center;
    }

    .about-image {
        width: 15rem;
        /* Use rem for mobile */
        height: 15rem;
        margin-right: 0;
        margin-bottom: 1rem;
    }

    .about-content {
        text-align: center;
    }

    .about-title {
        font-size: 2.5rem;
        /* Adjust title size for mobile */
    }

    .about-text {
        font-size: 1.2rem;
        /* Adjust text size for mobile */
    }
}

@media (min-width: 601px) {
    .about-header {
        flex-direction: row;
        align-items: flex-start;
    }

    .about-image {
        width: 200px;
        /* Use px for larger screens */
        height: 200px;
        margin-bottom: 0;
    }

    .about-content {
        text-align: left;
    }

    .about-title {
        font-size: 2rem;
        /* Title size for larger screens */
    }

    .about-text {
        font-size: 1rem;
        /* Text size for larger screens */
    }
}
</style>