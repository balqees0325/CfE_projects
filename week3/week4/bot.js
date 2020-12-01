let userName = document.querySelector('#name');
let age = document.querySelector('#age');
let faceMask =document.querySelector('#mask');

let allowed = 0;
let denied = 0;
let total = 0;

const checkUser = () => {
 
 
if (age.value >= 12 && faceMask.value ==="yes") {
  allowed++;
  document.querySelector('#allowed').innerHTML = "Allowed visitors:" + allowed
  alert(`welcome to the mall:${userName.value}`);

} else if (age.value < 12 && faceMask.value ==="yes"){
  denied++;
  document.querySelector('#denied').innerHTML = "Denied visitors:" + denied
  alert(`sorry you must be 12 years old to be allowed in:${userName.value}`);
} else {
  denied++;
  document.querySelector('#denied').innerHTML = "Denied visitors:" + denied
  alert(`Ooops sorry you are not allowed in:${userName.value}`);
}
userName.value = "";
age.value = "";

};


