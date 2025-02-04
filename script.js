const sidemenu=document.querySelector('#menuside')
const navbar=document.querySelector('nav')
const navlink=document.querySelector('nav ul')
function openmenu(){
    sidemenu.style.transform='translateX(-16rem)'
}
function closemenu(){
    sidemenu.style.transform='translateX(16rem)'
}
window.addEventListener('scroll',()=>{
    if (scrollY>50) {
        navbar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navlink.classList.remove('bg-white','bg-opacity-50','shadow-sm','dark:border dark:border-white/50','dark:bg-transparent');
    }
    else{
        navbar.classList.remove('bg-white','bg-opacity-50','bg-white','bg-opacity-50','backdrop-blur-lg',
            'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20')
        navlink.classList.add('bg-white','bg-opacity-50','shadow-sm','bg-opacity-50','shadow-sm',
            'dark:border dark:border-white/50','dark:bg-transparent');
    }
})
//-------------------------------------light  mode and dark mode-------------------------
if(
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        document.documentElement.classList.add('dark');
    }
    else{
        document.documentElement.classList.remove('dark');

    }
function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if ( document.documentElement.classList.contains('dark')) {
        localStorage.theme='dark';
    }
    else{
        localStorage.theme='light';
    }
}