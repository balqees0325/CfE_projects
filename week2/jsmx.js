const classToggle = () => {
  const navs = document.getElementById('section')
  navs.classList.toggle('nav-toggleShow');
}
document.querySelector('.hamburger').addEventListener('click', classToggle);