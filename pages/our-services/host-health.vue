async asyncData({ $axios }) {
  const products = await $axios.$get('/products');
  return { products };
}
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
                HOST Health
              </div>
              <!-- <div class="text-h5 subheading">
                Feel free to contact us
              </div> -->
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" align="center" class="text-h4">
        RECEIVE TREATMENT
      </v-col>
    </v-row>
    <!-- Search bar -->
    <v-row class="mb-4">
      <v-col cols="12" md="6" class="mx-auto searchbar">
        <v-text-field
          v-model="searchQuery"
          label="SEARCH PROCEDURE"
          outlined
          dense
          clearable
          color:black
        />
      </v-col>
    </v-row>

    <!-- Products layout -->
    <v-row class="service-sec1">
      <v-col
        v-for="product in filteredProducts"
        :key="product.id"
        cols="12"
        sm="12"
        md="4"
      >
        <v-card class="mx-auto card-main" max-width="80%">
          <!-- Display the image dynamically -->
          <v-img
            v-if="product.image && product.image.formats"
            :src="getImageUrl(product.image.formats.medium.url || product.image.url)"
            height="150"
            cover
            class="fit-image"
          />
          <!-- Product name -->
          <v-card-title class="symptom-name">
            {{ product.name }}
          </v-card-title>
          <!-- Price range with formatted Thai Baht -->
          <v-card-subtitle class="price-range">
            Price Range: {{ formatPriceRange(product.pricemin, product.pricemax) }}
          </v-card-subtitle>
          <!-- Contact Us button -->
          <v-card-actions>
            <v-btn
              color="primary"
              class="card-btn"
              @click="contactUs(product.name)"
            >
              Contact Us
            </v-btn>
          </v-card-actions>
        </v-card>
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
  async asyncData ({ $axios }) {
    try {
      const response = await $axios.$get('/products') // No need to populate image, it's already included
      return { products: response }
    } catch (error) {
      console.error('Error fetching products:', error)
      return { products: [] }
    }
  },
  data () {
    return {
      searchQuery: '', // Store the search query
      products: [] // The fetched products
    }
  },

  computed: {
    filteredProducts () {
      if (!this.searchQuery) {
        return this.products
      }
      const query = this.searchQuery.toLowerCase()
      return this.products.filter(product =>
        product.name.toLowerCase().includes(query)
      )
    }
  },

  methods: {
    getImageUrl (url) {
      const baseUrl = 'https://cms.HOST-Health.com' // Replace with the actual CMS URL
      return `${baseUrl}${url}`
    },

    formatPriceRange (pricemin, pricemax) {
      if (pricemin === null || pricemax === null || pricemin === undefined || pricemax === undefined) {
        return 'Please contact us'
      }
      const formatPrice = price => `฿${price.toLocaleString()}`
      return `${formatPrice(pricemin)} - ${formatPrice(pricemax)}`
    },

    contactUs (serviceName) {
      // Redirect to the contact page with the service name as a query parameter
      this.$router.push({ path: '/consultation', query: { service: serviceName } })
    }
  }
}
</script>
<style scoped>
.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
    color: red !important;
}
.fit-image div{
  object-fit: cover !important; /* Or 'contain' depending on your needs */
  width: auto; /* Make sure the image takes up the full width of the card */
  padding:0px;
}
.v-image__image--cover {
    background-size: cover;
}
.card-main{
  width:auto;
  height:auto; /* Adjust the height as needed */
}
.card-btn{
  width:100%;
}
.price-range{
  min-height: 50px;
}
.symptom-name{
  line-height: 22px;
  min-height: 80px;
}
@media (max-width:767px) {
  .searchbar{
    max-width: 90% !important;
}
}
</style>
