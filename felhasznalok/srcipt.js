$(function () {
    const termek=[];
    const kosra=new Kosaramban();
    
   
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
        const ujkartya = new termekVasarlo(ujElem, termek[i]);
      }
      sablonElem.remove();
    }
   
    $(window).on("kosarban", (esemeny) => {
        console.log(esemeny.detail);
      
        kosra.setelemkosarba(esemeny.detail);
    });
   
      
})