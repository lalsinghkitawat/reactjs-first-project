// var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

// const { text } = require("express")

function myFunction(){
    var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("search-box").value.toUpperCase()
     table = document.getElementById("table-data")
    tr = table.getElementsByTagName("tr")
    
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td){
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(input) > -1) {
            tr[i].style.display = "";
          } else if(td){
            tr[i].style.display = "none";
          }
        }
      }
}

let btn = document.getElementsByClassName("data-row")

btn[0].onclick =function(){
  let btn1 = document.getElementsByClassName("data-row")[0]
    let a = document.getElementById("hello")
   a.appendChild(btn1)
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
} 
btn[1].onclick =function(){
    for(bt of btn){
     bt.classList.remove("active")
    }
    this.classList.add("active")
}  
btn[2].onclick =function(){
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
} 
btn[3].onclick =function(){
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
} 
btn[4].onclick =function(){
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
} 
btn[5].onclick =function(){
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
}  
btn[6].onclick =function(){
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
}  
btn[7].onclick =function(){
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
} 
btn[8].onclick =function(){
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
} 
btn[9].onclick =function(){
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
} 

