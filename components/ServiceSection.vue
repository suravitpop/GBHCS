<template>
  <v-container class="pa-5 mb-10">
    <!-- <v-row align="center" no-gutters>
      <v-col cols="12">
        <v-sheet height="300" class="text-center">
          <img src="@/assets/images/logo-big.png">
        </v-sheet>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col cols="12" class="text-center text-h4 ourservice-title">
        Our Services
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="4">
        <nuxt-link to="/contact-us">
          <v-card
            class="mx-auto"
            max-width="80%"
          >
            <v-img
              :src="require(`~/assets/images/service1.png`)"
              height="100%"
            />

          <!-- <v-card-title>
            Case consultation for proper medical treatment, clinic/hospital by Thai medical personnel
          </v-card-title>

          <v-card-subtitle>
            Service 1 - We can advice the doctor/hospital that fit to your budget/location and service you need
          </v-card-subtitle> -->

          <!-- <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              Explore
            </v-btn>

            <v-spacer />
          </v-card-actions> -->
          </v-card>
        </nuxt-link>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-card
          class="mx-auto"
          max-width="80%"
        >
          <v-img
            :src="require(`~/assets/images/service2.png`)"
            height="100%"
          />

          <!-- <v-card-title>
            Medical personnel to support you throughout journey in Bangkok hospital+service 1
          </v-card-title>

          <v-card-subtitle>
            Service 2 - We will support you during time in  Thai hospital that remove language barrier and help you understand all process and doctor advice. To help you make a better decision for your treatment.
          </v-card-subtitle> -->

          <!-- <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              Explore
            </v-btn>

            <v-spacer />
          </v-card-actions> -->
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-card
          class="mx-auto"
          max-width="80%"
        >
          <v-img
            :src="require(`~/assets/images/service3.png`)"
          />

          <!-- <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              Explore
            </v-btn>

            <v-spacer />
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
