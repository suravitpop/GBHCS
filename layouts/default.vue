<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          exact
          @click="$vuetify.goTo(`.${item.to}`)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>
        <img src="@/assets/images/logo-somebg.png" height="85px">
      </v-toolbar-title>
      <v-spacer />
      <div v-if="!isMobile">
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          class="ma-1"
          rounded
          plain
          @click="$vuetify.goTo(`.${item.to}`)"
        >
          {{ item.title }}
        </v-btn>
      </div>
      <v-btn
        class="ma-2"
        rounded
        color="primary"
        @click="$vuetify.goTo('.contact_section')"
      >
        Contact us
        <template #loader>
          <span class="custom-loader">
            <v-icon light>mdi-cached</v-icon>
          </span>
        </template>
      </v-btn>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer padless>
      <v-col
        class="text-center text-caption"
        cols="12"
      >
        @ {{ new Date().getFullYear() }} Global Help Care Solutions Co., Ltd.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: 'home_section'
        },
        {
          icon: 'mdi-apps',
          title: 'Our Services',
          to: 'service_section'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About us',
          to: 'about_section'
        }
      ],
      miniVariant: false,
      right: true,
      title: 'Vuetify.js'
    }
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.xsOnly
    }
  }
}
</script>
