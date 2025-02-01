gsap.from("h1", {delay: .25, duration: 1.5, y: -50, ease: "power2.inOut", opacity: 0})
gsap.from(".money-bag", {delay: .25, duration: 50,   repeat: -1, yoyo: true,   rotation: -360})
gsap.from(".par", {delay: .75, duration: 1.5, opacity: 0})
gsap.from("#creditSum", {delay: 1, duration: 1.5, scale: 1.2, opacity: 0})
gsap.from("#creditTerm", {delay: 1, duration: 1.5, scale: 1.2, opacity: 0})
gsap.from("#percent", {delay: 1, duration: 1.5, scale: 1.2, opacity: 0})

const button = document.querySelector('#btn');
button.addEventListener('click', calculateLoan);

function calculateLoan (e) {
    e.preventDefault();
    const creditSum = document.querySelector('#creditSum').value;
    const creditTerm = document.querySelector('#creditTerm').value;
    const percent = document.querySelector('#percent').value;

    if (creditSum === '' || creditTerm === '' || percent === '' || creditSum === '0' || creditTerm === '0' || percent === '0') {
        Swal.fire({
            icon: 'error',
            title: 'All fields must be filled in!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

let monthlyPercent = percent / 1200;
let monthlyPayment = creditSum * monthlyPercent / (1 - (Math.pow(1/(1 + monthlyPercent), creditTerm)));
let totalPayment = monthlyPayment * creditTerm;
let totalInterest = totalPayment - creditSum;

document.querySelector('#payment').textContent = monthlyPayment.toFixed(2);
document.querySelector('#totalSum').textContent = totalPayment.toFixed(2);
document.querySelector('#overpayment').textContent = totalInterest.toFixed(2);
}