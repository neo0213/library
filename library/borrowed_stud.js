

document.addEventListener("DOMContentLoaded", function() {

    const serializedData = localStorage.getItem('user_stud');
    const user_stud = JSON.parse(serializedData);
    const current_user = localStorage.getItem('current_user');
    const return_book = document.getElementById('return');
    const borrow_cont = document.getElementById('borrowed_cont');

    let search = user_stud.find(o => o.stud_no === current_user);

    if(search){
     
            console.log(`Student Name: ${search.name}`);
            console.log(`Student Number: ${search.stud_no}`);
            
            search.book_borr.forEach(book => {
              if (book === "refactor") {
                borrow_cont.innerHTML += `
                <a href="/books/refactoring.html" class="card">
                    <img src="/images/b1.jpeg" alt="balloon with an emoji face" class="card__img">
                    <span class="card__footer" style="color: black;">
                      <span>Refactoring</span>
                      <span>Improving the Design of Existing Code</span>
                      <span>Martin Fowler, Kent Beck, John Brant, William Opdyke, <br> Don Roberts</span>
                    </span>
                    <span class="card__action">
                        <i class="fa-solid fa-code" style="color: #000000;"></i>
                    </span>
                </a> `;
              } 
            if (book === "clean") {
                borrow_cont.innerHTML += ` <a href="/books/clean.html" class="card">
                <img src="/images/b2.jpeg" alt="balloon with an emoji face" class="card__img">
                <span class="card__footer" style="color: white;"">
                  <span>Clean Code</span>
                  <span> A Handbook of Agile Software Craftsmanship</span>
                  <span>Robert C. Martin</span>
                </span>
                <span class="card__action">
                    <i class="fa-solid fa-code" style="color: #000000;"></i>
                </span>
            </a>`;
            } 
            if (book == "design"){
                borrow_cont.innerHTML += ` <a href="/books/design.html" class="card">
                <img src="/images/b3.jpeg" alt="balloon with an emoji face" class="card__img">
                <span class="card__footer">
                  <span>Design Patterns</span>
                  <span>Elements of Reusable Object-Oriented <br> Software</span>
                  <span>Erich Gamma</span>
                </span>
                <span class="card__action">
                    <i class="fa-solid fa-code" style="color: #000000;"></i>
                </span>
            </a>
                `;
            }

            if (book == "effective"){
                borrow_cont.innerHTML += `<a href="/books/effective.html" class="card">
                <img src="/images/b4.jpeg" alt="balloon with an emoji face" class="card__img">
                <span class="card__footer">
                  <span>Effective Java</span>
                  <span></span>
                  <span>Joshua Bloch</span>
                </span>
                <span class="card__action">
                    <i class="fa-solid fa-code" style="color: #000000;"></i>
                </span>
            </a>
                `;
            }
            
            if (book == "1984"){
              borrow_cont.innerHTML += `        <a href="/books/1984.html" class="card">
              <img src="/images/b5.jpeg" alt="balloon with an emoji face" class="card__img">
              <span class="card__footer" style="color: black;">
                <span style="color:white">1984 </span>
                <span></span>
                <span style="color:white">George Orwell</span>
              </span>
              <span class="card__action">
                <i class="fa-solid fa-earth-asia" style="color: #000000;"></i>
              </span>
          </a>
              `;
          }
          if (book == "mockingbird"){
            borrow_cont.innerHTML += `  <a href="/books/mockingbird.html" class="card">
            <img src="/images/b6.jpeg" alt="balloon with an emoji face" class="card__img">
            <span class="card__footer" style="color: black;">
              <span style="color:white">To Kill a Mockingbird</span>
              <span></span>
              <span style="color:white">Harper Lee</span>
            </span>
            <span class="card__action">
              <i class="fa-solid fa-earth-asia" style="color: #000000;"></i>
            </span>
        </a>
            `;
        }
        if (book == "meditations"){
          borrow_cont.innerHTML += ` <a href="/books/meditations.html" class="card">
          <img src="/images/b7.jpeg" alt="balloon with an emoji face" class="card__img">
          <span class="card__footer" style="color: black;">
            <span style="color:white">Meditations</span>
            <span></span>
            <span style="color:white">Marcus Aurelius</span>
          </span>
          <span class="card__action">
              <i class="fa-solid fa-earth-asia" style="color: #000000;"></i>
          </span>
      </a>
          `;
      }
               
            
            
      
            });

    }  
        
});