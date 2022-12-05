const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let thePath = urlParams.get('path');

//alert(thePath);
if(thePath !== null){
    document.getElementById("myPDFFrame").src = decodeURI(thePath);

}


