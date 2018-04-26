/*
Denna laboration går ut	på	att	skapa	spelet	"lights	out". 
Spelet	fungerar	så	att	du	har	ett	rutnät	med	
tända(vita)	rutor. När	du	klickar	på	en	av	rutorna	skall	denna	släckas	(bli svart).

Även	de	angränsande	rutorna ovanför,	nedanför,	till	höger	och	
till	vänster ska	släckas/tändas. 
Tänkt	att	alla den	rutan	du	klickar	på	och	alla angränsande	
rutor	ska	”slås” om	till den	motsatta färgen	mot	va	den	är.	
Är	den	svart ska den bli	vit,	är	den	vit	ska	den	bli	svart.
För	att	lösa denna uppgift	behöver	du	skapa ett rutnät med hjälp	av	element	i html,	
förslagsvis	en	tabell	med	rader och kolumner.	
Du	behöver	sedan applicera	javascript för att göra	rutnätet	
interaktivt	och	spela enligt följande regler.
*/

var myTable = document.getElementById("myTable");


function makeRowsAndColumns() {
	for(var i = 1; i < 6; i++){

		var addRow = document.createElement("TR");
		console.log(addRow);

			for(var j = 0; j < 5; j++){
				var addCell = document.createElement("TD");
				addCell.setAttribute("id", i + "" + j );
				addCell.addEventListener("click", setColor);

				addRow.appendChild(addCell);


			}

		document.getElementById("myTable").appendChild(addRow);
	}

}
makeRowsAndColumns();


function setAttributeIfElementFound(id){

 	if(document.getElementById(id) != null){
 		document.getElementById(id).classList.toggle("pink")
 	}
}

function setColor(){

  	console.log(this.id);
  	var clickedId = this.id;

	// Add and subtract with 10.

   	var numAddTen = 10;
   	var addTen = numAddTen.toString();

   	setAttributeIfElementFound(clickedId);

 	setAttributeIfElementFound(+clickedId + +addTen);
 	
 	setAttributeIfElementFound(+clickedId + -addTen);
 	
 	// Add and subtract with 1.

 	var numAddOne = 1;
 	var addOne = numAddOne.toString();

 	setAttributeIfElementFound(+clickedId + +addOne);
 	
 	setAttributeIfElementFound(+clickedId + -addOne);
	

}





