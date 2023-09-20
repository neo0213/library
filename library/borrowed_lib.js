

document.addEventListener("DOMContentLoaded", function() {

    const serializedData = localStorage.getItem('user_stud');
    const user_stud = JSON.parse(serializedData);
    const current_user = localStorage.getItem('current_user');
    const return_book = document.getElementById('return');
    const borrow_cont = document.getElementById('borrowed_cont');
    let users = document.getElementById('users');
    let content = '';

    user_stud.forEach((student) => {
      content += `  
        <div style="margin-top: 10px;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
        background-color:white;">
        <p style="font-weight:600;">Student number: ${student.stud_no}</p> 
      `;
      console.log(student);
      console.log(users);
      student.book_borr.forEach((book) => {
        
        if (book === 'refactor') {
          content += `<p>Refactoring: Improving the Design of Existing Code</p>`;
        } else if (book === 'clean') {
          content += `<p>Clean Code: A Handbook of Agile Software Craftsmanship </p>`;
        } else if (book === 'design') {
          content += `<p>Design Patterns: Elements of Reusable Object-Oriented Software</p>`;
        } else if (book === 'effective') {
          content += `<p>Effective Java</p>`;
        } else if (book === '1984') {
          content += `<p>1984</p>`;
        } else if (book === 'mockingbird') {
          content += `<p> To Kill a Mockingbird</p>`;
        } else if (book === 'meditations') {
          content += `<p>Meditations</p>`;
        }  else {
          
        }

      });

      content += `</div>`;

      users.innerHTML = content;
    });


    // if(user_stud[0].stud_no == current_user){
    //     user_stud.forEach(student => {
    //         console.log(`Student Name: ${student.name}`);
    //         console.log(`Student Number: ${student.stud_no}`);
            
    //         student.book_borr.forEach(book => {
    //           if (book === "refactor") {
    //             borrow_cont.innerHTML += `
    //             <a href="/books/refactoring.html" class="card">
    //                 <img src="/images/b1.jpeg" alt="balloon with an emoji face" class="card__img">
    //                 <span class="card__footer" style="color: black;">
    //                   <span>Refactoring</span>
    //                   <span>Improving the Design of Existing Code</span>
    //                   <span>Martin Fowler, Kent Beck, John Brant, William Opdyke, <br> Don Roberts</span>
    //                 </span>
    //                 <span class="card__action">
    //                     <i class="fa-solid fa-code" style="color: #000000;"></i>
    //                 </span>
    //             </a> `;
    //           } 
    //         if (book === "clean") {
    //             borrow_cont.innerHTML += `        <a href="/books/clean.html" class="card">
    //             <img src="/images/b2.jpeg" alt="balloon with an emoji face" class="card__img">
    //             <span class="card__footer" style="color: white;"">
    //               <span>Clean Code</span>
    //               <span> A Handbook of Agile Software Craftsmanship</span>
    //               <span>Robert C. Martin</span>
    //             </span>
    //             <span class="card__action">
    //                 <i class="fa-solid fa-code" style="color: #000000;"></i>
    //             </span>
    //         </a>`;
    //         } 
    //         if (book == "design"){
    //             borrow_cont.innerHTML += `        <a href="/books/design.html" class="card">
    //             <img src="/images/b3.jpeg" alt="balloon with an emoji face" class="card__img">
    //             <span class="card__footer">
    //               <span>Design Patterns</span>
    //               <span>Elements of Reusable Object-Oriented <br> Software</span>
    //               <span>Erich Gamma</span>
    //             </span>
    //             <span class="card__action">
    //                 <i class="fa-solid fa-code" style="color: #000000;"></i>
    //             </span>
    //         </a>
    //             `;
    //         }

    //         if (book == "effective"){
    //             borrow_cont.innerHTML += `<a href="/books/effective.html" class="card">
    //             <img src="/images/b4.jpeg" alt="balloon with an emoji face" class="card__img">
    //             <span class="card__footer">
    //               <span>Effective Java</span>
    //               <span></span>
    //               <span>Joshua Bloch</span>
    //             </span>
    //             <span class="card__action">
    //                 <i class="fa-solid fa-code" style="color: #000000;"></i>
    //             </span>
    //         </a>
    //             `;
    //         }
            
               
            
            
      
    //         });
    //       });
    // }  
        
});