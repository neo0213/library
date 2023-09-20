let user_lib = [
    {
      'name': 'admin',
      'pass': 'admin',
    }
  ]
  const serializedData = localStorage.getItem('user_stud');
  const user_stud = JSON.parse(serializedData) || [];
  

  let lib_form = document.getElementById('lib_login_form');
  const login_button = document.getElementById('loginbtn');
  const errnotice = document.getElementById('err');
  const form_cont = document.getElementById('form-cont');


  
  // let input_reg = document.getElementById('input_reg');
  // input_reg.addEventListener('click',()=>{
  //   let reg_name = document.getElementById('reg_name').value;
  //   let reg_no = document.getElementById('reg_no').value;
  //   reg_stud(reg_name,reg_no);
  //   })

  
  function login_stud(student_no){
    let search = user_stud.find(o => o.stud_no === student_no);
    if(search){
          const serializedArray = JSON.stringify(user_lib);
          localStorage.setItem('user_lib', serializedArray);
          const serializedArray2 = JSON.stringify(user_stud);
          localStorage.setItem('user_stud', serializedArray2);
          localStorage.setItem('current_user', search.stud_no);
          window.location.href = '/index.html';
          setTimeout(() => {
              login_button.style.backgroundColor = 'black';
              login_button.innerText = 'Log in';
          }, 1000);

  } else {
      errnotice.innerHTML = `<span style="color:red;margin-bottom:5px;"> Incorrect credentials. </div>`;
              
      setTimeout(() => {
          login_button.style.backgroundColor = 'black';
          login_button.innerText = 'Log in';
      }, 1000);


      setTimeout(() => {
          errnotice.innerHTML = '';
      }, 2000);
    }
  }


  const registerButton = document.getElementById('registerbtn');
  registerButton.addEventListener('click', function(event) {
    event.preventDefault();

    form_cont.innerHTML = `
      <form id="reg_login_form">
      <div class="form-group">
          <h3> Add your student number </h3> 
          <label for="stud_reg_num">Student number:</label>
          <input type="text" id="stud_reg_num" name="stud_reg_num">
      </div>  

      <div id="err"></div>
      <button type="submit" class="login" id="reg_btn">Add</button> 
      </form>
    `;
    
  });


  const formContainer = document.getElementById('form-container');

  
    form_cont.addEventListener('submit', function(event) {
      if(event.target.id === 'lib_login_form'){
        event.preventDefault();
        login_button.style.backgroundColor = 'rgb(61, 61, 61)';
        login_button.innerText = 'Logging in...';
        
        let login_no = document.getElementById('stud_num').value;
        login_stud(login_no);
      }
      if (event.target.id === 'reg_login_form') {
        event.preventDefault();
        const stud_num_reg = document.getElementById('stud_reg_num').value;
        reg_stud(stud_num_reg);
        form_cont.innerHTML = `<h2 style="color:green;"> Added! </h2>`;
        setTimeout(() => {
          form_cont.innerHTML = `
            <form id="lib_login_form">
                <div class="form-group">
                    <label for="stud_num">Student number:</label>
                    <input type="text" id="stud_num" name="stud_num">
                </div>

                <div id="err"></div>

                <button type="submit" class="login" id="loginbtn">Login</button> 
                <button id="registerbtn" class="reg">Register</button>
            </form>

          `;
        },500)
      }


    });

  function reg_stud(student_no){

      user_stud.push({
          'stud_no': student_no,
          'book_borr': []
      })

      const serializedArray2 = JSON.stringify(user_stud);
      localStorage.setItem('user_stud', serializedArray2);
  }