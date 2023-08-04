"use strict"

Vue.createApp({

  data() {
    return {
      randomEmail: [],
    };
  },
  methods: {
    generateEmailBtn() {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((generEm) => {
        this.randomEmail.push(generEm.data.response);
      })
    }
  },
  mounted() {
  },
}).mount("#app");