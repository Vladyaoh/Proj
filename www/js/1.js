// // active class of menu items onscroll
// window.addEventListener('scroll', () => {
// 	let scrollDistance = window.scrollY;

// 	if (window.innerWidth > 768) {
// 		document.querySelectorAll('.section').forEach((el, i) => {
// 			if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
// 				document.querySelectorAll('.nav a').forEach((el) => {
// 					if (el.classList.contains('active')) {
// 						el.classList.remove('active');
// 					}
// 				});

// 				document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
// 			}
// 		});
// 	}
// });

let changeThemeButtons = document.querySelectorAll('.changeTheme'); 
changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
        applyTheme(this.dataset.theme);
        localStorage.setItem('theme',this.dataset.theme);
    
    });
});

function applyTheme(themeName) {
    let themeUrl = `css/theme-${themeName}.css`;
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
        button.style.display = 'block'; 
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; 
}

let activeTheme = localStorage.getItem('theme');

if(activeTheme === null)
{
applyTheme('dark')}
    else{
        applyTheme(activeTheme);
    }