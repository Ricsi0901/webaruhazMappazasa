$(function () {
  const termek=[];
$.ajax(
    {url: ".../termekek.json",
 success: function(result){
    console.log(result);
    for (let i = 0; i < result.length; i++) {           
        termek.push(result[i]);            
    }
    
    console.log(termek);
       termekekMegjelintese();
       
     
  }});
  function termekekMegjelintese(){
  const szuloElem = $(".termekek");
  const sablonElem = $(".termek");
  for (let i = 0; i < termek.length; i++) {
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    const ujkartya = new termekAdmin(ujElem, termek[i]);
  }
  sablonElem.remove();


}
$(window).on("modosit", (esemeny) => {
  console.log(esemeny.detail);
  console.log("modosit");
  

 
});
$(window).on("torol", (esemeny) => {
  console.log(esemeny.detail);
  console.log("torol");

  
});


})