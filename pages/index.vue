<template>
  <v-container fluid class="pa-0 ma-0">
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    <HomeSection class="home_section" />
    <ServiceSection class="service_section" />
    <!-- <PortfolioSection class="portfolio_section" /> -->
    <AboutSection class="about_section" />
    <ContactSection class="contact_section" />
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  data () {
    return {
      fab: false
    }
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') { return }
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
