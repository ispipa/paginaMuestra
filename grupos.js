//SECTION GRUPOS TRABAJOS
var nombre = [];
var nombre1 =[];
var nombresDivididos=[];

function cogerNombre()
{
	var nombres = document.getElementById("nombres").value;
	console.log(nombres);
    var nom = "";
	for (let i = 0; i < nombres.length; i++) 
	{
        if(nombres.charAt(i) != "\n" && nombres.charAt(i) != " ")
        {
            nom += nombres.charAt(i);
        }
        else
        {
            if(nom != "")
            {
                nombre.push(nom);
                nom = "";
            }
        }
	}
    nombre.push(nom);
	console.log("fuera del for: "+  nombre);
    ramdNombre()
}
function asignarGrupos()
{
    const numGrupo = parseInt(document.getElementById("numero").value);
    for (let i = 0; i < nombre1.length; i += numGrupo) 
    {
        let division = nombre1.slice(i, i + numGrupo);
        nombresDivididos.push(division);
    }
    console.log("Division: ", nombresDivididos);
    pintarGrupo();
}
function pintarGrupo()
{
    const numGrupo = parseInt(document.getElementById("numero").value);
    var ultimoCaso = nombresDivididos[nombresDivididos.length-1];
    var numRandom_supp;
    if((ultimoCaso.length) <= (numGrupo / 2))
    {
        nombresDivididos.pop();
        console.log("otro caso " + ultimoCaso);
        console.log("eliminamos la ultima posicion del array " + nombresDivididos);
        var cont = nombresDivididos.length;

            for (let j = 0; j < cont; j++) 
            {
                var index = Math.floor(Math.random() * (nombresDivididos.length));
                var index2 = Math.floor(Math.random() * (ultimoCaso.length));
                console.log("valor de nombresDivididos: " + nombresDivididos);
                numRandom_supp = ultimoCaso[index2];
                    if(numRandom_supp != undefined && nombresDivididos[j] != "")
                    {
                        ultimoCaso.splice(index2, 1);
                        nombresDivididos[index].push(numRandom_supp);
                    }
                    nombre.push(nombresDivididos[index]);
                    console.log("valor de nombre: " + nombre[j]);
                    nombresDivididos.splice(index, 1);
                    cuadro = document.createElement("div");
                    cuadro.classList.add("row");
                    cuadro.setAttribute("id", +j+1);
                    cuadro.innerHTML = '<h2>'+"Grupo "+(j+1)+'</h2>'+ '<p id='+(j+1)+'>'+nombre[j]+'</p>';
                    nom_grupos.appendChild(cuadro);
            }
    }
    else if(((nombre1.length % numGrupo) >= (numGrupo % 2)))
    {
        nombre = nombresDivididos;
            for (let i = 0; i < nombre.length; i++) 
            {
                cuadro = document.createElement("div");
                cuadro.classList.add("row");
                cuadro.setAttribute("id", +i+1);
                cuadro.innerHTML = '<h2>'+"Grupo "+(i+1)+'</h2>'+ '<p id='+(i+1)+'>'+nombre[i]+'</p>';
                nom_grupos.appendChild(cuadro);
            }
    }
}
function ramdNombre()
{
    var cont = nombre.length;
    if(nombre.length != 0)
    {
        for (let i = 0; i < cont; i++) 
        {
            var index = Math.floor(Math.random() * (nombre.length));
			numRandom_supp = nombre[index];
			nombre.splice(index, 1);
            if(numRandom_supp != "")
            {
                nombre1.push(numRandom_supp);
            } 
        }
    }
   else
   {
       console.log("No hay nombres");
   }
   asignarGrupos();
}
