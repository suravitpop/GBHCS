<template>
  <v-container class="fill-height pa-0 mb-10" fluid>
    <v-row align="center">
      <v-col cols="12" class="contactus-header">
        <v-img
          :src="require('~/assets/images/bgcontact.png')"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          height="300"
          aspect-ratio="16/9"
          cover
        >
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-col class="text-center" cols="12">
              <div class="text-h2 font-weight-bold mb-4">
                REQUEST A CONSULTATION
              </div>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row>

    <v-row align="center" class="contactus-body">
      <v-col cols="12" sm="12" md="12" class="text-left" align="left">
        <div class="contact-form" align="left">
          <h2 class="text-center text-h4">
            <u>BEGIN THE PROCESS NOW</u>
          </h2>
          <br>
          <form @submit.prevent="submitForm">
            <!-- Other form inputs -->
            <label for="name">NAME:</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              name="name"
              required
            >

            <label for="email">EMAIL:</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              name="email"
              required
            >

            <label for="birthdate">DATE OF BIRTH:</label>
            <input
              id="birthdate"
              v-model="formData.birthdate"
              type="date"
              name="birthdate"
            >

            <label for="passport">PASSPORT (Optional):</label>
            <input
              id="passport"
              v-model="formData.passport"
              type="text"
              name="passport"
            >

            <!-- Autocomplete Input -->
            <v-autocomplete
              v-model="selectedProduct"
              :items="productList"
              item-text="label"
              item-value="id"
              label="SELECT HEALTH TREATMENT"
              :search-input.sync="search"
              :menu-props="{ maxHeight: '300px' }"
              :color="'#4caf50'"
              :item-color="'black'"
              :border="'none'"
              single-line
              class="inputarea"
            />

            <label for="message">EXPECTATIONS/ MESSAGES:</label>
            <textarea
              id="message"
              v-model="formData.message"
              name="message"
              rows="4"
              required
            />
            <!-- Consent Checkbox -->
            <div class="d-flex align-center mt-4">
              <v-checkbox v-model="formData.consent" required class="mr-2" />
              <label>
                I agree to the
                <a href="/policy" target="_blank" class="terms-link">terms and conditions</a>
              </label>
            </div>

            <button type="submit" class="submitbtn">
              Submit
            </button>
          </form>
          <div v-if="successMessage" class="success-message">
            {{ successMessage }}
          </div>
          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ query }) {
    try {
      const response = await fetch('https://cms.host-health.com/products')
      if (!response.ok) { throw new Error('Failed to fetch products') }
      const result = await response.json()

      const products = result.map(product => ({
        id: product.id,
        label: product.name,
        pricemin: product.pricemin,
        pricemax: product.pricemax,
        image: product.image ? product.image.formats.thumbnail.url : null
      }))

      const serviceName = query.service
      const selectedProduct = products.find(product => product.label === serviceName)

      return { productList: products, selectedProduct }
    } catch (error) {
      console.error('Error fetching products:', error)
      return { productList: [], selectedProduct: null }
    }
  },
  data () {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
        birthdate: '',
        passport: '',
        consent: false
      },
      successMessage: '',
      errorMessage: '',
      search: '',
      isReadonly: false,
      selectedProduct: null
    }
  },
  watch: {
    selectedProduct (newValue) {
      if (newValue) {
        this.formData.selected = newValue
        this.isReadonly = true // Disable the autocomplete if a value is selected
      }
    }
  },
  methods: {
    async submitForm () {
      try {
        const selected = this.selectedProduct ? this.selectedProduct.label : ''

        const formData = {
          ...this.formData,
          selected
        }

        console.log('Submitting form with data:', formData)

        const response = await fetch('http://localhost:3002/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })

        if (!response.ok) {
          const errorText = await response.text()
          console.error('Server error:', errorText)
          throw new Error('Network response was not ok')
        }

        this.formData = {
          name: '',
          email: '',
          message: '',
          birthdate: '',
          passport: '',
          consent: false
        }
        this.selectedProduct = null

        this.successMessage = 'Your message has been sent successfully!'
        this.errorMessage = ''
      } catch (error) {
        console.error('Form submission error:', error)
        this.errorMessage = 'There was a problem sending your message. Please try again.'
        this.successMessage = ''
      }
    }
  }

}
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

form {
  max-width: 600px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 2px;
}

.inputarea ::v-deep .v-input input {
  color: black !important;
}

.theme--dark.v-input input, .theme--dark.v-input textarea {
  color: #000 !important;
}

.v-input__slot * {
  border: none !important;
  color: #000 !important;
}
input,
textarea {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  border-radius: 20px;
  color: #000; /* Text color */
  border: 1px solid #0e999b; /* Border color */
}

textarea {
  resize: vertical;
}

button {
  padding: 10px;
  background-color: #0e999b; /* Button background color */
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 20px;
}

.success-message {
  color: #0e999b;
  margin-top: 10px;
}

.error-message {
  color: #ff5722;
  margin-top: 10px;
}

/* Custom styles for v-autocomplete */
.v-autocomplete__content {
  max-height: 200px; /* Limit the height of the dropdown */
  overflow-y: auto; /* Enable vertical scrolling */
}

.v-autocomplete__item {
  color: #000; /* Text color for items */
}
label.v-label.theme--dark {
  color: #000 !important;
}
.theme--dark.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: #0e999b;
}
i.v-icon.notranslate.mdi.mdi-menu-down.theme--dark {
  color: #0e999b !important;
}
.theme--dark.v-text-field:not(.v-input--has-state):hover
  > .v-input__control
  > .v-input__slot:before {
  border-color: #0e999b;
}
.theme--dark.v-text-field:not(.v-input--has-state):hover
  > .v-input__control
  > .v-input__slot:before {
  border-color: #0e999b;
}
div#list-33 {
  background: #0e999b;
}
.v-application .mt-3 {
  margin-top: auto;
  margin-bottom: auto;
}
span.ma-1.v-chip.v-chip--no-color.v-chip--removable.theme--dark.v-size--default {
  background: transparent;
  border: 1px solid #0e999b;
  color: #000;
}
button {
  color: #ffffff !important;
}
i.v-icon.notranslate.mdi.mdi-checkbox-blank-outline.theme--dark {
  color: #0e999b !important;
}
.checkbox .v-label {
  margin-top: 2px !important;
}
@media (max-width: 767px) {
  .contactus-body {
    padding: 15px;
  }
}
span.v-list-item__mask {
    color: #ffffff !important;
    background: none !important;
}
</style>
