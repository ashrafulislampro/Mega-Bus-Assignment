// common function area
function handleTicketChange(ticket, increment){
          const inputValue = document.getElementById(ticket + "_input");
          const inputCount = parseInt(inputValue.value);
          let inputNewCount = inputCount;
          // quantity count 
          if(increment == true){
                    inputNewCount = inputCount + 1;
          }
          else if(increment == false && inputNewCount > 0){
                    inputNewCount = inputCount - 1;
          }
          inputValue.value = inputNewCount;
          calculateSubtotal();
}

// calculation the subtotal area
function calculateSubtotal(){
          const ticketFirstClass = reduceCode('f-class');
          const ticketEconomy = reduceCode('economy');
          // subtotal count
          const subtotal = ticketFirstClass * 150 + ticketEconomy * 100;
          document.getElementById('subtotal').innerText = subtotal;
          // tax count
          let tax = subtotal * 0.1;
          tax = tax.toFixed(2);
          document.getElementById("tax").innerText = tax;
          // finally total count
          const totalPrice = parseInt(subtotal);
          const totalTax = parseInt(tax);
          const grandTotal = totalPrice + totalTax;
          document.getElementById("totalPrice").innerText = grandTotal; 
}

// code reduce
function reduceCode(ticket){
          const ticketInput = document.getElementById(ticket + "_input");
          const ticketCount = parseInt(ticketInput.value);
          return ticketCount;
} 

// const bookNow = document.getElementById("book_now");
//  bookNow.addEventListener("click", function(){
//         bookNow.style  
// })

function handleClickButton(){
          const firstClassTicket = document.getElementById("f-class_input").value;
          const economyTicket = document.getElementById("economy_input").value;
          const totalPrice = document.getElementById("totalPrice").innerText;

          document.write("firstClassTicket = " + firstClassTicket , "  ;  economyTicket = " + economyTicket , "  ;  totalPrice = " + totalPrice  );         
}