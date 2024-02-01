<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/valid-v-for -->
<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item v-for="(item, i) in filteredItems" :key="i">
          <v-list-item-content>
            <v-list-item-title>
              <v-hover>
                <template v-if="!item.items">
                  <nuxt-link :to="item.to" exact>
                    {{ item.title }}
                  </nuxt-link>
                </template>
                <template v-else>
                  <v-list-group :key="`group-${i}`" :prepend-icon="item.icon" :value="item.active" @input="item.active = !item.active">
                    <template #activator>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>
                            <nuxt-link :to="item.to" exact>
                              {{ item.title }}
                            </nuxt-link>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </template>

                    <v-list-item v-for="(subItem, j) in item.items" :key="'subItem-${i}-${j}'">
                      <v-list-item-content>
                        <v-list-item-title>
                          <nuxt-link :to="subItem.to" exact>
                            {{ subItem.title }}
                          </nuxt-link>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </template>
              </v-hover>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="logo-container">
        <nuxt-link to="/">
          <img src="@/assets/images/logo-somebg.png" height="80px" alt="Logo">
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <div v-if="!isMobile" class="horizontal-menu">
        <template v-for="(item, i) in items">
          <div :key="i" class="menu-item">
            <nuxt-link v-if="!item.items" :to="item.to" class="ma-1" exact>
              {{ item.title }}
            </nuxt-link>
            <v-hover v-else>
              <template #default="{ hover }">
                <div :key="j" class="submenu-item">
                  <nuxt-link :to="item.to" class="ma-1" exact>
                    {{ item.title }}
                  </nuxt-link>
                  <div v-if="hover" class="vertical-submenu">
                    <!-- Submenu items go here -->
                    <template v-for="(subItem, j) in item.items">
                      <nuxt-link :to="subItem.to" class="ma-1" exact>
                        {{ subItem.title }}
                      </nuxt-link>
                    </template>
                  </div>
                </div>
              </template>
            </v-hover>
          </div>
        </template>
      </div>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>

    <div>
      <!-- Your existing content goes here -->

      <v-footer padless>
        <v-col class="text-center text-caption" cols="12">
          @ {{ new Date().getFullYear() }} Global Help Care Solutions Co., Ltd.
        </v-col>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          title: 'Our Services',
          // icon: 'mdi-apps',
          to: '#',
          items: [
            {
              title: 'Host Health',
              to: '/our-services/host-health'
            },
            {
              title: 'Software',
              to: '/our-services/software'
            }
          ]
        },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'How to Process',
        //   to: '/how-to-process'
        // },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact Us',
          to: '/contact-us'
        }
      ],
      miniVariant: true,
      right: true,
      title: 'Vuetify.js',
      activeItem: null
    }
  },
  computed: {
    filteredItems () {
      return this.items
    },
    isMobile () {
      return this.$vuetify.breakpoint.xsOnly
    }
  },
  methods: {
    handleMouseOver (item) {
      this.activeItem = item
    },
    // Optional: Add a method for handling click events for further customization
    handleLinkClick () {
      // Use this method for any custom behavior or logging
    }
  }
}
</script>

<style scoped>
  /* Add your custom styles here */
  .nav {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
  .horizontal-menu {
  display: flex;
}

.menu-item {
  margin-right: 10px; /* Adjust as needed */
}

.submenu-item {
  position: relative;
  display: inline-block; /* Ensures submenu items are displayed horizontally */
}

.vertical-submenu {
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #0e999b; /* Background color for the submenu */
  padding: 4px; /* Adjust as needed */
  border-radius: 5px; /* Add some border-radius for better aesthetics */
  padding-top: 20px;
}
.vertical-submenu a {
  padding-top: 10px; /* Adjust padding for individual submenu items */
  padding-bottom: 10px; /* Adjust padding for individual submenu items */
  color: white; /* Text color for submenu items */
  text-decoration: none; /* Remove underline for links */
  margin: 0px;
}

.vertical-submenu a:hover {
  background-color: rgba(7,78,82,0.2); /* Background color on hover */
}
.logo-container {
  display: flex;
  align-items: center; /* Vertical center alignment */
}

.logo-link {
  text-decoration: none; /* Optional: Remove underline from the link */
  color: inherit; /* Optional: Inherit the color from the parent */
}
</style>
