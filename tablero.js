//alert("Debes poner los números en parejas para crear un tablero")

/*function boton(){
	let cuadros = tablero()
	let cuadro;
	let cuadro2;
	
	var random1 = 'rgb(' + Math.floor(Math.random() * (256)) + ',' + Math.floor(Math.random() * (256)) + ',' + Math.floor(Math.random() * (256)) + ')';
	var random2 = 'rgb(' + Math.floor(Math.random() * (256)) + ',' + Math.floor(Math.random() * (256)) + ',' + Math.floor(Math.random() * (256)) + ')';

			for (var i = 0; i < cuadros[0]; i++)
			{
				cuadro = document.createElement("div");
				cuadro.classList.add("row");
					for (var j = 0; j < cuadros[1]; j++) 
					{
						cuadro2 = document.createElement("div");
						var textoCelda = document.createTextNode("("+i + " - " + j+")");
						cuadro2.appendChild(textoCelda);
						cuadro.appendChild(cuadro2);
						if(((i + j) % 2) == 0 )
						{
							cuadro2.style.background = random1;
							cuadro2.style.color = "#404040";
						}
						else
						{
							cuadro2.style.background = random2;
							cuadro2.style.color = "#cfc9c9";
						}
					}
				
					contenedor.appendChild(cuadro);
			}
	
}
function tablero(){

	let f = parseInt(document.getElementById("filas").value);
	let c = parseInt(document.getElementById("columnas").value);
	console.log(typeof(f, c)+ "los nuemros: " + f + c);
	if((Math.sign(f,c) == -1))
	{
		alert("Por favor introduzca numeros positivos");
	}
	else
	{
		return [f,c];
	}
}*/
//section datos heroe
/*var resultados=[];
var cont = 0;
	function datosHeroe(alias, nombre, apellidos, residencia, descripcion,vivo) 
	{
		this.alias = alias;
		this.lastnombreName = nombre;
		this.apellidos = apellidos;
		this.residencia = residencia;
		this.descripcion = descripcion;
		this.vivo = vivo;
	}
	&& (nombre1.length % numGrupo) != 0
	function cogerDatos(event)
	{
		event.preventDefault()
		alias = document.getElementById("alias").value;
		nombre = document.getElementById("nombre").value;
		apellidos = document.getElementById("apellidos").value;
		residencia = document.getElementById("residencia").value;
		descripcion = document.getElementById("descripcion").value;
		vivo = document.getElementById("vivo").value;

		resultados.push(new datosHeroe(alias,nombre,apellidos,residencia,descripcion,vivo));
		imprimir();
		
	}
	function imprimir()
	{
		if(resultados.length == 1)
		{
			console.log("datosHeroes2: "+ Object.values(resultados[0]));
		}
		else
		{
			console.log("datosHeroes2: "+ Object.values(resultados[0])+ " otro heroe: " + Object.values(resultados[1]));
		}
		pintarTabla();
	}

	//pintar tabla
	function pintarTabla()
	{
		let cuadros = [1,6];
		let cuadro;
		let cuadro2;
		var keyss=[];
		var button;

		for (var i = 0; i < cuadros[0]; i++)
				{
					cuadro = document.createElement("div");
						for (var j = 0; j < cuadros[1]; j++) 
						{
							cuadro.classList.add("row");
							cuadro.setAttribute("id", +cont);
							cuadro2 = document.createElement("div");
							button = document.createElement("button");
							button.type = "button";
							button.setAttribute("onclick", "borrarFila("+cont+")");
							button.innerText = 'Borrar Fila';
							for (let index = 0; index < resultados.length; index++)
							 {
								keyss = Object.values(resultados[index]);
								console.log("estoy en eltercer for: " +keyss);
							}
								var textoCelda = document.createTextNode(keyss[j]);
								cuadro2.appendChild(textoCelda);
								cuadro.appendChild(cuadro2);
							if(((i + j) % 2) == 0 )
							{
								cuadro2.style.color = "#404040";
								cuadro2.style.border = "2px solid";
							}
							else
							{
								cuadro2.style.color = "#cfc9c9";
							}
							
						}
						cont++;
						cuadro2.appendChild(button);
						contenedor.appendChild(cuadro);
				}
				console.log(cont);
	}
	function borrarFila(index)
	{
		if (window.confirm("¿Estas seguro de borrar la fila?"))
		{
			var fila = document.getElementById(index);
			fila.remove();
		}
	}
	*/
