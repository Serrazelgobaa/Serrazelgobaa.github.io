new Glide('.glide', {
	type: 'carousel',
  	startAt: 0,
  	perView: 1,
  	autoplay: 4000,
  	hoverpause: false
}).mount()

ScrollReveal().reveal('#banniere', {
 delay: 17500 ,
 distance: '50px',
 duration: 700
});

ScrollReveal().reveal('h1', {
 delay: 18000 ,
 distance: '50px',
 duration: 700
});

ScrollReveal().reveal('#bouton_contact', {
 delay: 18200 ,
 distance: '50px',
 duration: 700
});

ScrollReveal().reveal('#illu1', {
 delay: 600 ,
 distance: '50px',
 duration: 500,
 origin: 'right',
 easing: 'ease-in'
});

ScrollReveal().reveal('#texte1', {
 delay: 600 ,
 distance: '50px',
 duration: 500,
 origin: 'left',
 easing: 'ease-in'
});

ScrollReveal().reveal('#illu2', {
 delay: 600 ,
 distance: '50px',
 duration: 500,
 origin: 'left',
 easing: 'ease-in'
});

ScrollReveal().reveal('#texte2', {
 delay: 600 ,
 distance: '50px',
 duration: 500,
 origin: 'right',
 easing: 'ease-in'
});

ScrollReveal().reveal('#illu3', {
 delay: 600 ,
 distance: '50px',
 duration: 500,
 origin: 'right',
 easing: 'ease-in'
});

ScrollReveal().reveal('#texte3', {
 delay: 600 ,
 distance: '50px',
 duration: 500,
 origin: 'left',
 easing: 'ease-in'
});

ScrollReveal().reveal('#illu4', {
 delay: 600 ,
 distance: '50px',
 duration: 500,
 origin: 'left',
 easing: 'ease-in'
});

ScrollReveal().reveal('#texte4', {
 delay: 600 ,
 distance: '50px',
 duration: 500,
 origin: 'right',
 easing: 'ease-in'
});

ScrollReveal().reveal('#contact_titre', {
 delay: 400 ,
 distance: '50px',
 duration: 500,
 origin: 'top',
 easing: 'ease-in'
});

ScrollReveal().reveal('.sr_left', {
 delay: 800 ,
 distance: '50px',
 duration: 500,
 origin: 'left',
 easing: 'ease-in'
});

ScrollReveal().reveal('#reseaux', {
 delay: 800 ,
 distance: '50px',
 duration: 500,
 origin: 'right',
 easing: 'ease-in'
});



video = document.getElementById('video');

slider = document.querySelector('.glide');

titre = document.getElementById('titre');

slider.style.display = 'none';
titre.style.opacity = '0';

const remplacer = () => {
	video.style.display = 'none';
	slider.style.display = 'block';
};

const titreApparition = () => {
	titre.style.opacity = '1';
	titre.style.transition = 'opacity 0.5s ease-out';
};

setTimeout(remplacer, 17000);
setTimeout(titreApparition, 17500);

const ouvrirMenu = () => {
	menu = document.getElementById('sous_menu');

	menu.classList.toggle('open');
}

document.getElementById('langage').addEventListener('click',ouvrirMenu);