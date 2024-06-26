const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/HomePage.vue') },
      { path: 'about', name: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'projects', name: 'projects', component: () => import('pages/ProjectsPage.vue') },
      { path: 'contact', name: 'contact', component: () => import('pages/ContactPage.vue') }
    ]
  }
]

export default routes
