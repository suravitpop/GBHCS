<template>
  <v-container class="pa-5 mt-5 mb-10">
    <v-row align="center">
      <v-col cols="12" sm="12" md="6">
        <v-img
          :src="require(`~/assets/images/five.webp`)"
          :aspect-ratio="16/9"
          style="border-radius: 25px;"
        />
      </v-col>
      <v-col cols="12" sm="12" md="6" class="aboutcc">
        <div class="text-h4">
          What We do?
        </div>
        <p class="text-left">
          We offer you a caretaker with transportation for hospital visit
          <ul>
            <li>Save cost</li>
            <li>Convenience</li>
            <li>Thai/English medical term to help you to understand your problem and easier to make decision</li>
          </ul>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default'
}
</script>
