
let btn = document.getElementById("equals")

window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if event already handled
    }else if(event.code == 'Enter' || event.code == 'NumpadEnter'){
        btn.click();
    }
});
