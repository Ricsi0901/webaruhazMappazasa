class Kosaramban {
  constructor() {
    this.kosara = [];
    this.osszar = 0;

    if (JSON.parse(localStorage.getItem("tömb")) !== null) {
      this.kosara = JSON.parse(localStorage.getItem("tömb"));
    }
    this.megjelenit();

    $(".kosar").on("click", ".torles", (event) => {
      let dataid = $(event.target).attr("data-id");
      console.log(dataid);
      this.kosara.splice(dataid, 1);
      localStorage.setItem("tömb", JSON.stringify(this.kosara));
      this.megjelenit();
    });
  }
  setelemkosarba(adat) {
    this.kosara.push(adat);
    localStorage.setItem("tömb", JSON.stringify(this.kosara));
    this.megjelenit();
  }

  megjelenit() {
    this.osszar = 0;
    console.log(this.kosara);
    $("#kosaram").empty();
    $("#kosaram").html("<table>");
    var txt = "";
    this.osszar = 0;
    for (let i = 0; i < this.kosara.length; i++) {
      console.log(i);
      txt += "<tr id='" + i + "'>";
      this.osszar += this.kosara[i].ar;
      txt += "<td>" + this.kosara[i].nev + "</td>";
      txt += "<td>" + this.kosara[i].ar + "</td>";
      txt += "<td><button class='torles' data-id=" + i + " >X</button></td>";
    }
    $("#kosaram table").append(txt);
    $(".kosar span").html(this.osszar);
  }
}
