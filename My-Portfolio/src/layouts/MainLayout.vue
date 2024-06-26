<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" class="q-mr-sm hide-on-desktop" />
        <q-toolbar-title>
          My Portfolio
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" overlay class="drawer">
      <q-list>
        <q-item clickable v-ripple @click="setPage('home')">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="setPage('about')">
          <q-item-section>About</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="setPage('projects')">
          <q-item-section>Projects</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="setPage('competencies')">
          <q-item-section>Competencies</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="setPage('contact')">
          <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="flex flex-center">
        <component :is="currentPage" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import HomePage from 'pages/HomePage.vue';
import AboutPage from 'pages/AboutPage.vue';
import ProjectsPage from 'pages/ProjectsPage.vue';
import ContactPage from 'pages/ContactPage.vue';
import CompetenciesPage from 'pages/CompetenciesPage.vue';

export default {
  name: 'MainLayout',
  components: {
    HomePage,
    AboutPage,
    ProjectsPage,
    ContactPage,
    CompetenciesPage
  },
  data() {
    return {
      leftDrawerOpen: false,
      currentPage: 'HomePage'
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    setPage(page) {
      this.currentPage = `${page}Page`;
      if (this.$q.screen.width < 1024) {
        this.leftDrawerOpen = false; // Fermer le drawer après la navigation sur mobile
      }
    }
  }
}
</script>

<style scoped>
.hide-on-desktop {
  display: none;
}

@media (max-width: 1024px) {
  .hide-on-desktop {
    display: inline-flex;
  }
}

.drawer {
  max-width: 300px;
}
</style>
