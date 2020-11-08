let userName = document.querySelector('#name');
let age = document.querySelector('#age');
let faceMask =document.querySelector('#mask');

let total = 0;
let allowed = 0;

let denied = 0;

const checkUser = () => {
 
 
if (age.value >= 12 && faceMask.value ==="yes") {
  allowed++;
  document.querySelector('#allowed').innerHTML = "Allowed visitors:" + allowed
  total++
  document.querySelector('#count').innerHTML = "Counter entries:" + total
  alert('welcome to the mall: ' + allowed);

} else if (age.value < 12 && faceMask.value ==="yes"){
  denied++;
  document.querySelector('#denied').innerHTML = "Denied visitors:" + denied
  alert('sorry you must be 12 years old to be allowed in: ' + denied);
} else {
  denied++;
  document.querySelector('#denied').innerHTML = "Denied visitors:" + denied
  total++
  document.querySelector('#count').innerHTML = "Counter entries:" + total
  alert('Ooops sorry you are not allowed in: ' + denied);
}
};


