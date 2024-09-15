// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}
                                

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('cs-navigation');
    const section1 = document.getElementById('hero-229');
    const section2 = document.getElementById('services-296');
    const section3 = document.getElementById('why-choose-1485');
    const section4 = document.getElementById('contact-1150');

	const nav1 = document.getElementById('heronav');
	const nav2 = document.getElementById('servicesnav');
	const nav3 = document.getElementById('whychooseusnav');
	const nav4 = document.getElementById('contactusnav');

    const section1Top = section1.offsetTop;
    const section2Top = section2.offsetTop;
    const section3Top = section3.offsetTop;
    const section4Top = section4.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Reset navbar
    nav1.classList.remove('cs-active');
    nav2.classList.remove('cs-active');
    nav3.classList.remove('cs-active');
	nav4.classList.remove('active');

    if (scrollPosition >= section1Top && scrollPosition < section2Top) {
        nav1.classList.add('cs-active');
    } else if (scrollPosition >= section2Top && scrollPosition < section3Top) {
        nav2.classList.add('cs-active');
    } else if (scrollPosition >= section3Top && scrollPosition < section4Top) {
        nav3.classList.add('cs-active');
    } else if (scrollPosition >= section4Top) {
        nav4.classList.add('active');
    }
});
