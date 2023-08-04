"use strict"

Vue.createApp({

  data() {
    return {
      randomEmail: [],
      emailCounter: 0,
    };
  },
  methods: {
    generateEmailBtn() {
      //Empty the array to print just 10 emails instead of adding them to previous ones
      this.randomEmail = [];
      for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((generEm) => {
          this.randomEmail.push(generEm.data.response);
        })
      }
    }
  },
  mounted() {
  },
}).mount("#app");