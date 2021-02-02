const colores = [
     document.querySelector("#item-1"),
     document.querySelector("#item-2"),
     document.querySelector("#item-3"),
     document.querySelector("#item-4"),
     document.querySelector("#item-5"),     
     document.querySelector(".container"),
]

colores[5].addEventListener("click",()=>{
	const valor1 = Math.random()*999;
	const valor2 = Math.random()*999;
	const ultimo1 = Math.round(valor1);
	const ultimo2 = Math.round(valor2);
	
	colores[5].style.background = `radial-gradient(circle, #333, #${ultimo1})`;
       for(let i = 0; i <= 4; i++){
		colores[i].style.background = `radial-gradient(circle, gold, #${ultimo2}, yellowgreen)`;
	}
})
