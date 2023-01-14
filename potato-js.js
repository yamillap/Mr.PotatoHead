$(document).ready(function(){
    $("#exit").hide()
    $(".draggable").draggable();     
});



function PDF(){


    html2canvas(document.querySelector('#capture')).then(canvas => {
        image = document.createElement("img");
        image.src = canvas.toDataURL("image/png");
        var link = document.createElement("a");
        link.download = "MrPotatoHead.png";
        link.href = image.src;
        link.click();


    })}


