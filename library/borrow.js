document.addEventListener("DOMContentLoaded", function() {
    const serializedData = localStorage.getItem('user_stud');
    const user_stud = JSON.parse(serializedData);
    const current_user = localStorage.getItem('current_user');
    const borrow_btn = document.getElementById('borrow');
    const bookname = document.getElementById('bookname').value;


    let currentUserObj = user_stud.find(o => o.stud_no === current_user);

    if (currentUserObj) {
        console.log('User found');


        if (currentUserObj.book_borr.includes(bookname)) {
            console.log('Book already borrowed');
            borrow_btn.innerHTML = 'Return this book';
        } else {
            borrow_btn.innerHTML = 'Borrow this book';
        }


        borrow_btn.addEventListener('click', () => {
            if (currentUserObj.book_borr.includes(bookname)) {

                const index = currentUserObj.book_borr.indexOf(bookname);
                if (index > -1) {
                    currentUserObj.book_borr.splice(index, 1);
                }
            } else {
                currentUserObj.book_borr.push(bookname);
            }

            localStorage.setItem('user_stud', JSON.stringify(user_stud));
            location.reload();
        });
    } else {
        console.log('User not found');
    }
});
