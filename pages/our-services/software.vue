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
                Software Development
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
      <v-col cols="12" sm="12" md="12">
        <v-card
          class="mx-auto"
          max-width="90%"
        >
          <!-- <v-img
            :src="require(`~/assets/images/service3.png`)"
          /> -->
          <v-card-title class="text-h4">
            Who we are?
          </v-card-title>
          <v-card-subtitle class="text">
            We specialize in creating bespoke medical software solutions, meticulously designed to meet the unique requirements of each client. Our team focuses on delivering user-friendly, efficient,
            and compliant software systems that enhance healthcare delivery. By understanding your specific needs,
            we craft software that streamlines clinical workflows, improves patient
            management, and ensures data security. Let us empower your medical practice with
            technology that's not just advanced, but also intuitive and tailored just for you. Experience the future of healthcare with our customized medical software services.
            </p>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="service-sec1">
      <v-col cols="12" sm="12" md="12">
        <p class="text-center text-h4">
          Ready-to-use medical software products available now.
        </p>
      </v-col>
      <v-row align="center" class="sw-sec2">
        <v-col cols="10" sm="12" md="6">
          <v-img
            :src="require(`~/assets/images/sw.png`)"
            :aspect-ratio="16/10"
            style="border-radius: 25px;"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6" class="aboutcc">
          <div class="text-h4">
            UCAuthentication System
          </div>
          <p class="text-left">
            <ul>
              <li>View Product Detail</li>
              <li>Reviews from Real Customers</li>
              <li>Need more information : <a href="/contact-us">Contact us</a></li>
            </ul>
          </p>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'SoftwarePage'
}
</script>
