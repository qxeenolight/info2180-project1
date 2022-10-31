onload = function() {
    //variables
    var btn = document.getElementsByTagName("button")[0];
    var data = document.getElementsByTagName("input")[0];
    var msg = document.getElementsByClassName("message")[0];
    
    btn.setAttribute("type","button");

    //event listener added to subscribe button to add functionality
    btn.addEventListener("click", function(e) {
        e.preventDefault()
        
        if (data.value == "") {
            msg.innerHTML = "Please enter a valid email address";
        }
        else {
            msg.innerHTML = `Thank you! Your email address ${data.value} has been added to our mailing list!`;
        } 
    })
    
}