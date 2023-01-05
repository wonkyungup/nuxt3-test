<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
        fixed
    >
      <v-list>
        <h1 class="text-center">{{ title }}</h1>
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Introduction',
          to: '/introduction',
        },
      ],
      title: '화천 마이스터',
    }
  },
}
</script>
