const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },

  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();
      const userInfo = results[0];
      console.log("🚀 ~ file: app.js ~ line 17 ~ getUser ~ userInfo", userInfo);

      this.firstName = userInfo?.name?.first;
      this.lastName = userInfo?.name?.last;
      this.email = userInfo?.email;
      this.gender = userInfo?.gender;
      this.picture = userInfo?.picture?.large;
    },
  },
});

app.mount("#app");
