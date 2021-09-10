document.getElementById("getPosition").addEventListener("click",getPosition);
function getPosition(){
    var watchID=navigator.geolocation.getCurrentPosition(onSuccess,onError);
function onSuccess(position){
    document.getElementById("card").style.display = 'block';
    document.getElementById("p1").innerHTML="LATITUDE "+position.coords.latitude;
    document.getElementById("p2").innerHTML="LONGITUDE "+position.coords.longitude;
};
function onError(error){
    alert('code : '+error.code   +'\n' +  'message : '  + error.message + '\n');
}
}