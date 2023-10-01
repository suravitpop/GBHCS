<template>
  <v-container class="pa-5 mt-5 mb-10">
    <form
      :action="FORM_ENDPOINT"
      @submit="handleSubmit"
      method="POST"
      class="w-1/2 mx-auto mt-5"
    >
      <div class="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          class="
            px-3
            py-3
            placeholder-gray-400
            text-gray-600
            relative
            bg-white bg-white
            rounded
            text-sm
            border-0
            shadow
            outline-none
            focus:outline-none
            focus:ring
            w-full
          "
          required
        />
      </div>

      <div class="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          class="
            px-3
            py-3
            placeholder-gray-400
            text-gray-600
            relative
            bg-white bg-white
            rounded
            text-sm
            border-0
            shadow
            outline-none
            focus:outline-none
            focus:ring
            w-full
          "
          required
        />
      </div>

      <div class="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          class="
            px-3
            py-3
            placeholder-gray-400
            text-gray-600
            relative
            bg-white bg-white
            rounded
            text-sm
            border-0
            shadow
            outline-none
            focus:outline-none
            focus:ring
            w-full
          "
          required
        />
      </div>

      <div class="mb-3 pt-0">
        <button
          class="
            bg-blue-500
            text-white
            active:bg-blue-600
            font-bold
            uppercase
            text-sm
            px-6
            py-3
            rounded
            shadow
            hover:shadow-lg
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    <v-row align="center">
      <v-col cols="12" sm="12" md="6">
        <v-row align="center">
          <v-col cols="4" class="text-center">
            <img src="@/assets/images/logo-somebg.png" width="80%">
          </v-col>
          <v-col cols="8">
            <p class="text-left">
              Global Helpcare Solutions Co., Ltd<br>
              71/7 Perfect place soi Ramkamhang 164 Minburi Bangkok <br>
              Thailand 10510
            </p>
            <p class="text-left">
              Phone: (+66)0635964441, (+66)0922544641<br>
              Email: Globalhelpcaresolutions@gmail.com
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="6" class="text-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.932994274932!2d100.71442747580383!3d13.782912796570946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d65301b6b6817%3A0x7d819828e3505325!2sGlobal%20Helpcare%20Solutions!5e0!3m2!1sen!2sth!4v1693309646722!5m2!1sen!2sth"
          width="95%"
          height="300"
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
  name: 'IndexPage',
  layout: 'default'
}
</script>
