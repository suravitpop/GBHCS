<template>
  <v-container class="pa-5 mt-5 mb-10">
    <v-row align="center" class="whoarewe">
      <v-col cols="12" sm="12" md="4">
        <v-img
          :src="require(`~/assets/images/whoarewe.png`)"
          :aspect-ratio="1/1"
          style="border-radius: 25px;"
          cover
          top
        />
      </v-col>
      <v-col cols="12" sm="12" md="8" class="aboutcc">
        <div class="text-h4">
          Who are we
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
