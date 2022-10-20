// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;

  const result = product.querySelector('.subtotal span');
  result.innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // ITERATION 2
  let tables = 0;
  const product = document.getElementsByClassName('product');

  for (let i = 0; i < product.length; i++) {
    let num = updateSubtotal(product[i]);
    tables += num;
  }

  // end of test

  // ITERATION 3
  console.log(tables);
  const sum = document.querySelector('#total-value span');
  sum.innerHTML = tables;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.closest('tr').remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');

  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }
});
