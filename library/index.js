document.addEventListener("DOMContentLoaded", function() {



    let currentPage = window.location.pathname;

    let nav = document.querySelector('.nav');

    const nav_ul = document.getElementById('nav-ul');

    setTimeout(function() {
      const loaderWrapper = document.getElementById("loader-wrapper");
      loaderWrapper.style.transition = "opacity 0.5s ease";
      loaderWrapper.style.opacity = "0";
      setTimeout(function() {
        loaderWrapper.style.display = "none";
        document.getElementById("content").style.display = "block";


        const current_user = localStorage.getItem('current_user');
        
        if (current_user == 'admin'){
          nav.innerHTML += `<div style="background-color:#ADD8E6;position:absolute;top:0;right:0;border-radius: 0 10px 0 0;padding: 5px;"> Admin </div>`;
          const borbooksLink = document.querySelector("#borbooks a");
          borbooksLink.setAttribute("href", "/borrowed-lib.html");
        } else {
          nav.innerHTML += `<div style="background-color:#ADD8E6;position:absolute;top:0;right:0;border-radius: 0 10px 0 0;padding: 5px;"> Student no: ${current_user} </div>`;
          const borbooksLink = document.querySelector("#borbooks a");
          borbooksLink.setAttribute("href", "/borrowed-stud.html");
       
        }

        let links = document.querySelectorAll('.nav li a');
          
        links.forEach(function(link) {
          if (link.getAttribute('href') === currentPage) {
              link.classList.add('current-page');
          }
      });

        document.getElementById('logout').addEventListener('click', () => {
          localStorage.removeItem("current_user");
          window.location.href = '/landing.html'; 
          console.log("logged out");
      })
    
      }, 500);
    }, 1000);






});






