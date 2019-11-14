const items = document.getElementsByClassName("item-body");
// console.log(items);



// const doSomething = () => {
//     items.forEach(element => {
//         element.class
//     });
// }

// const interval = window.setInterval(doSomething, 4000);

// items.forEach(element => {
//     setTimeout(function() { 
//         console.log(element);
//         element.classList.add("active");
//      }, 2000);
    
// });

setTimeout(function() { 
    let item = document.getElementsByTagName("li");
    item[0].classList.add("active")
    let asd = item[0].getElementsByClassName("item-body");
    asd[0].style.maxHeight = asd[0].scrollHeight+"px";
}, 2000);

function change() {
    nIntervId = setInterval(doStuff, 5000);
  }

  function doStuff() {
    let item = document.getElementsByClassName("active");
    let next; 
    if (item[0].nextElementSibling !== null) {
        next = item[0].nextElementSibling;
    } else {
        let temp = item[0].parentNode;
        next = temp.firstElementChild;
    }

    let zzz = item[0].getElementsByClassName("item-body");
    zzz[0].style.maxHeight = 0;
    item[0].classList.remove("active");

    next.classList.add("active");

    let asd = next.getElementsByClassName("item-body");
    asd[0].style.maxHeight = asd[0].scrollHeight+"px";


  }

