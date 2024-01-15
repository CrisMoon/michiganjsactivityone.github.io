function upDate(previewPic){
    var myPrincipal = document.getElementById('primary');
    //alert(previewPic.getAttribute("src"));
    myPrincipal.style.backgroundImage="url(../" + previewPic.getAttribute("src") + ")";
    myPrincipal.innerHTML=previewPic.alt;
}
function unDo(){
    var myPrincipal = document.getElementById('primary');
    myPrincipal.style.backgroundImage="none";
    myPrincipal.innerHTML="Hover any image please";
}