class Kartya {
    constructor(elem, adat) {
      this.elem = elem;
      
      this.cim = this.elem.children(".termeknev");
      this.kep = this.elem.children(".kep");
      this.leiras = this.elem.children(".leiras");
      this.ar = this.elem.children(".ar");
      this.adat = adat;  
      
      
      
    
    
    }

    setAdatok(ertekek){
      this.cim.html(ertekek.nev);
      this.kep.attr("src",".../"+ ertekek.kep);
      this.leiras.html(ertekek.leiras);
      this.ar.html(ertekek.ar,"FT");
    
      }
     
    kosarba() {
      let esemeny = new CustomEvent("kosarban", { detail: this.adat });
      window.dispatchEvent(esemeny);
      console.log("bent vagyokk azéterben ");
    }

}class termekAdmin extends Kartya{
  constructor(elem, adat){
    super(elem,adat)
    this.kep = this.elem.children(".kep").children("img");
    this.TermekTorol=this.elem.children(".modositasok").children(".torles");
    this.TermekModosit=this.elem.children(".modositasok").children(".modosit");
    this.setAdatok(this.adat); 
    this.TermekTorol.on("click",() =>{
      this.torol();
      })
    this.TermekModosit.on("click",() =>{
       this.modosit();
      })
  }

  modosit() {
    let esemeny = new CustomEvent("modosit", { detail: this.adat });
    window.dispatchEvent(esemeny);
    
  }
  torol() {
    let esemeny = new CustomEvent("torol", { detail: this.adat });
    window.dispatchEvent(esemeny);
    
  }

} class termekVasarlo extends Kartya{
  constructor(elem, adat){
    super(elem,adat)
    this.kep = this.elem.children(".kep");
    this.TermekAKosarba=this,elem.children(".kosarba");
    this.setAdatok(this.adat); 
    this.elem.on("click",() =>{
      this.kosarba();
      })
  }

  kosarba() {
    let esemeny = new CustomEvent("kosarban", { detail: this.adat });
    window.dispatchEvent(esemeny);
    console.log("bent vagyokk azéterben ");
  }

} 