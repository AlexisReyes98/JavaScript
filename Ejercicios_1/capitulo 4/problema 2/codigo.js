const materias = {
		fisica: ["Perez","pedro","pepito","alexis","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","alexis","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","alexis","maria"]
}
	
const obtenerInformacion = (materia)=>{
	if (materias[materia] !== undefined){
		return [materias[materia],materia,materias];
	} else {
		return materias;
	}
}

const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion(materia);

	if (informacion !== false) {
		let profesor = informacion[0][0];
		alumnos = informacion[0];
		alumnos.shift();
		document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
			Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
			`);
	}
}

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformacion();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for (info in informacion) {
		if (informacion[info].includes(alumno)) {
			cantidadTotal++;
			clasesPresentes.push(" "+ info);
		}
	}
	return `<b style='color:blue'>
	${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
	<br><br>`;
}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("alexis"))
document.write(cantidadDeClases("pedro"))