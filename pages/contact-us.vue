<template>
  <v-container
    class="fill-height pa-0 mb-10"
    fluid
  >
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
              <div class="text-h2 font-weight-bold mb-4">
                Contact
              </div>
              <!-- <div class="text-h5 subheading">
                Feel free to contact us
              </div> -->
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
    <v-row align="center" class="contactus-body">
      <v-col cols="12" sm="12" md="6">
        <v-row align="center">
          <v-col cols="4" class="text-center">
            <img src="@/assets/images/logo-somebg.png" width="0%">
          </v-col>
          <v-col cols="8">
            <p class="text-left">
              Global Help Care Solutions Co., Ltd<br>
              71/7 Perfect place soi Ramkamhang 164 Minburi Bangkok <br>
              Thailand 10510
            </p>
            <p class="text-left">
              Phone: <a href="tel:0922544641">(+66)0922544641</a><br>
              Email: <a href="mailto:hosthealth.th@gmail.com">Hosthealth.th@gmail.com</a>
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="6" class="text-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.932994274932!2d100.71442747580383!3d13.782912796570946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d65301b6b6817%3A0x7d819828e3505325!2sGlobal%20Helpcare%20Solutions!5e0!3m2!1sen!2sth!4v1693309646722!5m2!1sen!2sth"
          width="95%"
          height="400"
          style="border:0; border-radius: 25px;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'ContactPage'
}
</script>
