<template>
  <v-container class="fill-height pa-0 mb-10" fluid>
    <v-row align="center">
      <v-col cols="12" class="contactus-header">
        <v-img
          :src="require(`~/assets/images/bgcontact.png`)"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          height="300"
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
              <div class="text-h2 font-weight-bold mb-4 title">
                Host Health
              </div>
              <!-- <div class="text-h5 subheading">
                Feel free to contact us
              </div> -->
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
    <v-row class="service-sec1">
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

    <v-row>
      <v-col cols="12" align="center" class="text-h4">
        Coverage Care
      </v-col>
    </v-row>
    <!-- start row -->
    <v-row class="service-sec2">
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/1-1.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/1-2.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/1-3.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/1-4.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/2-1.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/2-2.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/2-3.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/2-4.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/3-1.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/3-2.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/3-3.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/3-4.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
      <!-- start card -->
      <v-col cols="12" sm="12" md="2">
        <v-card
          class="mx-auto"
          max-width="100%"
        >
          <v-img
            :src="require(`~/assets/images/ICON/3-5.jpg`)"
            height="100%"
          />
        </v-card>
      </v-col>
      <!-- end-card -->
    </v-row>
    <!-- end row -->
  </v-container>
</template>
<script>
export default {
  name: 'OurservicePage'
}
</script>
