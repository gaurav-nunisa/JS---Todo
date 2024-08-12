// problem 1 : new list is not create on every additon and all renders in the same li ✅

// problem 2 : the old rendered is store in the li and it does not get removes when it a new one is rendered ✅

// Problem 3 : get the delete button to be rendered side by side with the list ✅

//problem 4: to setup the delete button which would remove the list element of a choice ✅
let list = [];

function todoList() {
  let task = document.querySelector("input").value;
  let itemList = document.getElementById("itemList");


  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Delete"
  removeBtn.className = "remove-Btn"

  let li = document.createElement("li");
  li.innerText = task;
  itemList.appendChild(li);
  li.className = "individual-List"

  li.appendChild(removeBtn)

  removeBtn.addEventListener("click", ()=>{
    itemList.removeChild(li)
    


  })
  list.push(task)
  console.log(list);

  // list.map( todos =>{

  // })
}

// function looping() {
//   for (let ar in list) {
//     li.appendChild(
//       (document.createElement("button").onclick = () => {
//         this.delete;
//       })
//     );
//   }
// }
