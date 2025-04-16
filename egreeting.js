function openCard() {
    const card = document.querySelector('.card');
    card.classList.add('open');
  
    // Optional: Update text and image dynamically
    document.getElementById('custom-message').textContent = "Wishing you a day full of joy!";
    document.getElementById('custom-image').src = "https://via.placeholder.com/150";
  }
  