// tabs
function toggleTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('features__tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('features__tabButtons--tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = 'flex';
  evt.currentTarget.className += ' active';
}

document.getElementById('defaultOpen').click();

// accordions
const acc = document.getElementsByClassName('faq__accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
}

// prevent form submission
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault;
});

// smooth scroll on anchor click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// nav toggle
document.querySelector('.header__mobileNav').addEventListener('click', () => {
  document.querySelector('.header__toggleNav').style.display = 'flex';
});

document.querySelector('.header__toggleNav--logo').addEventListener('click', () => {
  document.querySelector('.header__toggleNav').style.display = 'none';
});

const buttons = document.querySelectorAll('.header__toggleNav--menu li a');
for (const button of buttons) {
  button.addEventListener('click', () => {
    document.querySelector('.header__toggleNav').style.display = 'none';
  });
}
