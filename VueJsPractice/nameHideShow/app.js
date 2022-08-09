const app = Vue.createApp({
  data() {
    return {
      change: true,
      showname: true,
      Name: "Akash Pawar",
      Role: "Software Developer",
      Age: "25",
      x: 0,
      y: 0,
      firstName: "John",
      lastName: "Doe",
      email: "JohnDoe@gmail.com",
      phone: "9876543210",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    ChangeName() {
      (this.Name = "Krishnan Naidu"),
        (this.Role = "Software Developer"),
        (this.Age = "22");
    },
    ShowHide() {
      this.showname = !this.showname; //toggle between True and false
    },
    handleEvent(e) {
      console.log(e);
    },
    handleMouseMove(e) {
      this.x = e.offsetX,
      this.y = e.offsetY
    },
    async getMaleUser() {
        const res = await fetch("https://randomuser.me/api");
        const { results } = await res.json();
  
        if (results[0].gender == "male") {
          console.log(results);
          (this.firstName = results[0].name.first),
            (this.lastName = results[0].name.last),
            (this.email = results[0].email),
            (this.gender = results[0].gender),
            (this.picture = results[0].picture.large);
        }
      },
      async getFemaleUser() {
        const res = await fetch("https://randomuser.me/api");
        const { results } = await res.json();
  
        if (results[0].gender == "female") {
          console.log(results);
          (this.firstName = results[0].name.first),
            (this.lastName = results[0].name.last),
            (this.email = results[0].email),
            (this.gender = results[0].gender),
            (this.picture = results[0].picture.large);
        }
      },
  },
});

app.mount("#app");
