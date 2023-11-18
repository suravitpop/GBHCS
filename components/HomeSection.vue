<template>
  <!-- <v-container fluid class="pa-0 mb-10" style="min-height: 434px"> -->
  <v-container
    class="fill-height pa-0 mb-10"
    fluid
  >
    <v-row align="center">
      <v-col cols="12">
        <v-img
          :src="require(`~/assets/images/bg1.webp`)"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          height="600"
          aspect-ratio="16/9"
          cover
        >
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-col
              class="text-center"
              cols="12"
            >
              <div class="text-h2 font-weight-bold mb-4">
                HOST-Health
              </div>
              <div class="text-h5 subheading">
                We offer health solutions for your stay in Thailand
              </div>
              <v-btn
                class="ma-2 mt-5"
                rounded
                x-large
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
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
    <!-- <v-parallax
      dark
      height="300"
      :src="require(`~/assets/images/cover.jpg`)"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="text-h4 font-weight-thin mb-4">
            Vuetify
          </h1>
          <h4 class="subheading">
            Build your application today!
          </h4>
        </v-col>
      </v-row>
    </v-parallax> -->
  </v-container>
</template>
