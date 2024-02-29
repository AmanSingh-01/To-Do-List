//ADD TODOS FUNCTION.
const addItem = function() {
  const listItem = document.createElement('li');
  listItem.innerHTML = '--: ' + document.getElementById('todo1').value + ' - <span style="color:#fe5771f0">(Delete)</span>';
  listItem.style.border = '.5px solid #858585'
  listItem.style.borderRadius = '10px'
  listItem.style.margin = '20px'
  listItem.style.marginRight = '60px'
  listItem.style.padding = '10px'
  listItem.style.color = '#5c5b5b'
  listItem.style.background = '#f5c113cb'
  listItem.style.height = 'auto'
  listItem.style.fontSize = '14px'
  document.querySelector('.todos').appendChild(listItem);
  //CALL REMOVE-ONE-ITEM FUNCTION ON CLICK EVENT
  listItem.addEventListener('click', removeOneItem);

  //CALL REMOVE-ALL-ITEM FUNCTION ON CLICK EVENT
  let clear = document.getElementById('clear');
  clear.addEventListener('click', removeAllItem);

  //COMPLETE FUNCTION CALL.
  listItem.addEventListener('click', completeItem)
  //CLEAR INPUT VALUE.
  document.getElementById('todo1').value = "";
}



//REMOVE-ONE-TODOS FUNCTION ONE BY ONE.
const removeOneItem = function(e) {
  document.querySelector('.todos').removeChild(e.target.parentElement)
}
//REMOVE-ALL-TODOS FUNCTION CLEAR-ALL.
const removeAllItem = function(e) {
  document.querySelector('.todos').remove()
}



//INCOMPLETE OR COMPLETE ITEM FUNCTION.
const completeItem = function (e) {
  if (e.target.localName === 'li') {
    e.target.innerHTML = '<del>' + e.target.innerHTML + '</del>';
  } else {
    e.target.parentElement.innerHTML = e.target.innerHTML;
  }
}



//ADD TODOS FUNCTION CALL ON CLICK EVENT.
document.getElementById('add').addEventListener('click', addItem);