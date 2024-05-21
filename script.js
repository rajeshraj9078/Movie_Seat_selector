const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

function updateSelectedCountAndTotal() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.textContent = selectedSeatsCount;
    total.textContent = selectedSeatsCount * ticketPrice;
}


movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCountAndTotal();
});


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCountAndTotal();
    }
});
