// This is a JavaScript file

function popupAlert(){
  alert("こんにちは、世界");
}
function vibrate(){
  navigator.vibrate(1000);
}
function timer(duration){
    var self=event.target;
    self.disabled=true;
    setTimeout(
      function(){
        navigator.vibrate(1000);
        self.disabled="";
      },
      duration*1000  
    )
}
function scanBarcode(){
  window.plugins.barcodeScanner.scan(
    function(result){
      document.getElementById("qr").innerHTML = result.text;
    },function(error){

    });
}


