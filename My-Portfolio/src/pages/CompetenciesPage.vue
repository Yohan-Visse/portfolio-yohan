<template>
    <q-page class="q-pa-md">
        <q-list>
            <q-item-label header>Cadrer un projet et conceptualiser une solution web</q-item-label>
            <q-item v-for="(competency, index) in competencies['Cadrer un projet et conceptualiser une solution web']"
                :key="index" clickable>
                <q-item-section>
                    <q-checkbox v-model="competency.checked" @update:model-value="saveState" :label="competency.text" />
                </q-item-section>
            </q-item>

            <q-item-label header>Développer une solution web</q-item-label>
            <q-item v-for="(competency, index) in competencies['Développer une solution web']" :key="index" clickable>
                <q-item-section>
                    <q-checkbox v-model="competency.checked" @update:model-value="saveState" :label="competency.text" />
                </q-item-section>
            </q-item>

            <q-item-label header>Déployer un système d’assurance qualité tout au long du cycle de vie d’une solution
                web</q-item-label>
            <q-item
                v-for="(competency, index) in competencies['Déployer un système d’assurance qualité tout au long du cycle de vie d’une solution web']"
                :key="index" clickable>
                <q-item-section>
                    <q-checkbox v-model="competency.checked" @update:model-value="saveState" :label="competency.text" />
                </q-item-section>
            </q-item>
        </q-list>
    </q-page>
</template>

<script>
export default {
    name: 'CompetenciesPage',
    data() {
        return {
            competencies: {
                'Cadrer un projet et conceptualiser une solution web': [
                    { text: 'Rédiger un Cahier Des Charges', checked: false },
                    { text: 'Rédiger des spécifications techniques', checked: false },
                    { text: 'Déployer un environnement de travail', checked: false },
                    { text: 'Réaliser une maquette', checked: false },
                    { text: 'Identifier les fonctionnalités à développer', checked: false },
                    { text: 'Rédiger une présentation', checked: false }
                ],
                'Développer une solution web': [
                    { text: 'Développer le prototype', checked: false },
                    { text: 'Rédiger le code de la solution', checked: false },
                    { text: 'Intégrer les différents éléments', checked: false },
                    { text: 'Implémenter la partie "front-end"', checked: false },
                    { text: 'Implémenter la logique et la base de données', checked: false },
                    { text: 'Implémenter des règles d\'authentification', checked: false },
                    { text: 'Implémenter un plan de tests', checked: false },
                    { text: 'Déployer une application web', checked: false }
                ],
                'Déployer un système d’assurance qualité tout au long du cycle de vie d’une solution web': [
                    { text: 'Rédiger une documentation technique', checked: false },
                    { text: 'Rédiger une documentation utilisateur', checked: false },
                    { text: 'Monitorer le lancement', checked: false },
                    { text: 'Identifier des améliorations qualitatives et de performance', checked: false },
                    { text: 'Analyser la qualité de l’ergonomie et la qualité de l’accessibilité', checked: false },
                    { text: 'Rédiger un document argumentatif', checked: false }
                ]
            }
        };
    },
    created() {
        this.loadSavedState();
    },
    methods: {
        loadSavedState() {
            for (let category in this.competencies) {
                this.competencies[category].forEach(competency => {
                    competency.checked = JSON.parse(localStorage.getItem(competency.text) || 'false');
                });
            }
        },
        saveState() {
            for (let category in this.competencies) {
                this.competencies[category].forEach(competency => {
                    localStorage.setItem(competency.text, JSON.stringify(competency.checked));
                });
            }
        }
    }
};
</script>

<style scoped>
.q-pa-md {
    padding: 16px;
}
</style>