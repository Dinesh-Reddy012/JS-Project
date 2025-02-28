
        let logout = document.getElementById("nav_btn");
        logout.addEventListener("click", () => {
          location.replace("./firebase.html");
        });

        let todo = document.getElementById("todo");
        todo.addEventListener("click", () => {
            location.assign("./todoupdated.html")
          });

        let subscribe = document.getElementById("subform");
         subscribe.addEventListener("submit", () => {
            alert("You are Subscribed to Mana College Newsletter")
          });

          let course1 = document.getElementById("course_btn1")
          course1.addEventListener("click", () => {
            location.assign("./jsprojectcourse1.html")
          });
          let course2 = document.getElementById("course_btn2")
          course2.addEventListener("click", () => {
            location.assign("./jsprojectcourse2.html")
          });
          let course3 = document.getElementById("course_btn3")
          course3.addEventListener("click", () => {
            location.assign("./jsprojectcourse3.html")
          });
          let btnprimaray = document.getElementsByClassName("btn-primary")[0]
          btnprimaray.addEventListener("click", () => {
            location.assign("./jsprojectcourse1.html")
          });
          let teacher = document.getElementById("teacher")
          teacher.addEventListener("click", () => {
            location.assign("./jsprojectteachers.html")
          });
          let faq = document.getElementById("faq")
          faq.addEventListener("click", () => {
            location.assign("./jsprojectteachers.html")
          });
      