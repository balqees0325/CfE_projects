const classToggle = () => {
  const navs = document.queryCommandEnabled('.aside-items')
  navs.forEach(nav => nav.classList.toggle('nav-toggleShow'));
}
document.querySelector('')