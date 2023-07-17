let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
      delay: 3000,
      disableOnInteraction:false,
    }
  });
  
  var swiper = new Swiper(".review-slider", {
      slidesPerView: 1,
      grabCursor: true,
      loop:true,
      spaceBetween: 10,
      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1050: {
          slidesPerView: 3,
        },    
      },
      autoplay:{
        delay: 5000,
        disableOnInteraction:false,
    }
  });

// Get a reference to the container element where the cards will be added

/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4011d1b2ffmshaacf611119061a2p1a103bjsnc7d7c9fbf2f1',
		'X-RapidAPI-Host': 'outsida.p.rapidapi.com'
	}
};
const container = document.querySelector('#card-container');
// Fetch the data from the API
fetch('https://outsida.p.rapidapi.com/api/v1/events/%7Bid%7D',options)
  .then(response => response.json())
  .then(data => {
    // Loop through the data and create a card for each item
    data.forEach(item => {
      // Create a new card element
      const card = document.createElement('div');
      card.classList.add('card');

      // Add the image to the card
      const image = document.createElement('img');
      image.src = item.image;
      card.appendChild(image);

      // Add the title to the card
      const title = document.createElement('h1');
      title.textContent = item.title;
      card.appendChild(title);

      // Add the description to the card
      const description = document.createElement('p');
      description.textContent = item.description;
      card.appendChild(description);

      // Add the "Read More" button to the card
      const button = document.createElement('button');
      button.textContent = 'Read More';
      card.appendChild(button);

      // Add the card to the container
      container.appendChild(card);
    });
  })
  .catch(error => console.error(error)); */