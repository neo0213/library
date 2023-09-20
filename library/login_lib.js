let user_lib = [
    {
      'name': 'admin',
      'pass': 'admin',
    }
  ]
  let user_stud = [
    {
      'name': 'student', 
      'stud_no':'000000',
      'book_borr': [],
    }
  ]
  
  let input_lib = document.getElementById('input_lib');
  let lib_form = document.getElementById('lib_login_form');
  const login_button = document.getElementById('loginbtn');
  const errnotice = document.getElementById('err');
  lib_form.addEventListener('submit',(e)=>{
      e.preventDefault();
    let login_name = document.getElementById('input_name').value;
    let login_pass = document.getElementById('input_pass').value;

    login_button.style.backgroundColor = 'rgb(61, 61, 61)';
    login_button.innerText = 'Logging in...';
    login_lib(login_name,login_pass);
    })
  
//   let input_stud = document.getElementById('input_stud');
//   input_stud.addEventListener('click',()=>{
//     let login_no = document.getElementById('login_no').value;
//     login_stud(login_no);
//     })
  
//   let input_reg = document.getElementById('input_reg');
//   input_reg.addEventListener('click',()=>{
//     let reg_name = document.getElementById('reg_name').value;
//     let reg_no = document.getElementById('reg_no').value;
//     reg_stud(reg_name,reg_no);
//     })
  
  function login_lib(name,password){
    let search = user_lib.find(o => o.name === name);
    if(search){
        if(search.pass === password){
            const serializedArray = JSON.stringify(user_lib);
            localStorage.setItem('user_lib', serializedArray);
            localStorage.setItem('current_user', 'admin');
            window.location.href = '/borrowed-lib.html';
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
  
