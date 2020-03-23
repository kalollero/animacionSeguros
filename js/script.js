
jQuery(document).ready(function(){
	
	var controller = new ScrollMagic.Controller();
	

	// Inicio de Variables
	var animacionTimeLine = new TimelineMax({ paused: true });
	var nosotrosInfo = new TimelineMax({ paused: true });
	var loQueNosGuiaInfo = new TimelineMax({ paused: true });
	var loQueNosHaFormadoInfo = new TimelineMax({ paused: true });

	// Escena 2
	nosotrosInfo
		.fromTo(
			'.nosotrosSekura .Sekura__logoSmall', 1,
			{ y: 50, ease: Expo.easeIn, opacity: 0 },
			{ y: 0, opacity: 1, ease: Expo.easeOut }
		)
		.fromTo(
			'.nosotrosSekura .Sekura__nombreSeccion', 1,
			{ y: 25, opacity: 0, ease: Expo.easeIn },
			{ y: 0, opacity: 1, ease: Expo.easeOut },
			0.5
		)
		.fromTo(
			'.nosotrosSekura .Sekura__titulo', 1,
			{ y: 50, ease: Expo.easeIn, opacity: 0 },
			{ y: 0, opacity: 1, ease: Expo.easeOut },
			1
		)
		.fromTo(
			'.nosotrosSekura .Sekura__informacion', 1,
			{ y: 25, opacity: 0, ease: Expo.easeIn },
			{ y: 0, opacity: 1, ease: Expo.easeOut },
			1.5
		);


	var escenaUno = new ScrollMagic.Scene ({
		triggerElement: '#escenaDos',
		triggerHook: 0.5
	})

	.setTween(nosotrosInfo)
	.setPin(true)
	.reverse(true)			
	.addIndicators({
		name: 'nosotrosInfo',
		colorTrigger: 'orange',
		indent: 10,
		colorStart: 'yellow',
		colorEnd: 'yellow',
	})

	.addTo(controller);


	//Escena 3
	loQueNosGuiaInfo
		.fromTo(
			'.loQueNosGuiaSekura .Sekura__logoSmall', 1,
			{ y: 50, ease: Expo.easeIn, opacity: 0 },
			{ y: 0, opacity: 1, ease: Expo.easeOut }
		)
		.fromTo(
			'.loQueNosGuiaSekura .Sekura__nombreSeccion', 1,
			{ y: 25, opacity: 0, ease: Expo.easeIn },
			{ y: 0, opacity: 1, ease: Expo.easeOut },
			0.5
		)
		.fromTo(
			'.loQueNosGuiaSekura .Sekura__titulo', 1,
			{ y: 50, ease: Expo.easeIn, opacity: 0 },
			{ y: 0, opacity: 1, ease: Expo.easeOut },
			1
		)
		.fromTo(
			'.loQueNosGuiaSekura .Sekura__informacion', 1,
			{ y: 25, opacity: 0, ease: Expo.easeIn },
			{ y: 0, opacity: 1, ease: Expo.easeOut },
			1.5
		);
		

	var escenaUno = new ScrollMagic.Scene ({
		triggerElement: '#escenaTres',
		triggerHook: 0.5
	})

	.setTween(loQueNosGuiaInfo)
	.setPin(true)
	.reverse(true)			
	.addIndicators({
		name: 'texto',
		colorTrigger: 'yellow',
		indent: 10,
		colorStart: 'yellow',
		colorEnd: 'yellow',
	})

	.addTo(controller);


	//Escena 4

	loQueNosHaFormadoInfo
		.fromTo(
			'.loQueNosHaFormadoSekura .Sekura__logoSmall', 1,
			{ y: 50, ease: Expo.easeIn, opacity: 0 },
			{ y: 0, opacity: 1, ease: Expo.easeOut }
		)
		.fromTo(
			'.loQueNosHaFormadoSekura .Sekura__nombreSeccion', 1,
			{ y: 25, opacity: 0, ease: Expo.easeIn },
			{ y: 0, opacity: 1, ease: Expo.easeOut },
			0.5
		)
		.fromTo(
			'.loQueNosHaFormadoSekura .Sekura__titulo', 1,
			{ y: 50, ease: Expo.easeIn, opacity: 0 },
			{ y: 0, opacity: 1, ease: Expo.easeOut },
			1
		)

	// animacionTimeLine
		.from('.lineaHorizontal', 3,{drawSVG:"0%", delay:0})
		.from('.fecha', 1, {delay: -2, opacity:0})
		.from('.lineaVertical', 2,{drawSVG:"0%", delay:-1.5})
		.from('.timeLine__informacion', 1, {delay: 0, opacity:0})
	
		// .from('.pinHoverActive', 1, {delay: 0, opacity:0})
		// .to('.lineaVertical', 1,{delay:0, opacity:0})

	var escenaUno = new ScrollMagic.Scene ({
		triggerElement: '#escenaCuatro',
		triggerHook: 0.5
	})

	.setTween(loQueNosHaFormadoInfo)
	.setPin(true)
	.reverse(true)
	.addIndicators({
		name: 'Timeline',
		colorTrigger: 'white',
		indent: 10,
		colorStart: 'orange',
		colorEnd: 'orange',
	})

	.addTo(controller);

});

	// Inicio de variables
	// var animacionIsologo = new TimelineMax({ paused: true });
	// var animacionApple = new TimelineMax({ paused: true });
	// var animacionTimeLine = new TimelineMax({ paused: true });
	// var animacionIsotipo = new TimelineMax({ paused: true });
	// var animacionDos = new TimelineMax({ paused: true });
	// var animacionTimeLine = new TimelineMax({ paused: true })
	// var iconos = new TimelineMax({ paused: true })
	// var info = new TimelineMax({ paused: true })


// 	//Preload
// 	animacionIsotipo
// 		.from('.iconoLineas', 1, {drawSVG:"50% 50%", delay:1})
// 		.from('.iconoColor', 1, {delay: -0.25, opacity: 0})
// 		.to('.iconoLineas, .iconoColor', 1, {delay: 0.5, opacity: 0});

// 	var escenaPreload = new ScrollMagic.Scene ({
// 		triggerElement: '#escenaPreload',
// 		triggerHook: 0.1
// 	})

// 	.setTween(animacionIsotipo)
// 	.setPin(true)
// 	.reverse(true)
// 	.addIndicators({
// 		name: 'isotipo',
// 		colorTrigger: 'white',
// 		indent: 10,
// 		colorStart: 'orange',
// 		colorEnd: 'orange',
// 	})
// 	.addTo(controller); 

// 	//Escena 1
// 	animacionIsologo
// 		.from('.logoLineas__blancas', 2, {drawSVG:"50% 50%", delay: 0})
// 		.from('.icono__logoColorBlanco', 1, {delay: 0, opacity:0})
// 		.to('.logoLineas__blancas', 1, {delay:.5, opacity:0})
// 		.to('.icono__logoColorBlanco, .logoColorBlancas__oxford', 1, {delay:0, opacity:0})
// 		.from('.icono__lema', 1, {delay:0, opacity:0});
		
	
// 	var escenaUno = new ScrollMagic.Scene ({
// 		triggerElement: '#escenaUno',
// 		triggerHook: 0.1
// 	})

// 	.setTween(animacionIsologo)
// 	.setPin(true)
// 	.reverse(true)
// 	.addIndicators({
// 		name: 'isologo',
// 		colorTrigger: 'white',
// 		indent: 10,
// 		colorStart: 'yellow',
// 		colorEnd: 'yellow',
// 	})
// 	.addTo(controller); 

	

// 	//Escena 2
// 	animacionApple
// 		.from('.apple', 1,{drawSVG:"50% 50%", delay:0});



// 	var escenaUno = new ScrollMagic.Scene ({
// 		triggerElement: '#escenaDos',
// 		triggerHook: 0.1,
// 		// duration:'100%'
// 	})

// 	.setTween(animacionApple)
// 	.setPin(true)
// 	.reverse(true)
// 	.addIndicators({
// 		name: 'bloquetexto',
// 		colorTrigger: 'orange',
// 		indent: 10,
// 		colorStart: 'orange',
// 		colorEnd: 'orange',
// 	})

// 	.addTo(controller);
	
// 	//Escena 3
// 	info
// 		.fromTo(
// 			'.loQueNosGuia__titulo',
// 			1,
// 			{ y: 50, ease: Expo.easeIn, opacity: 0 },
// 			{ y: 0, opacity: 1, ease: Expo.easeOut }
// 		)
// 		.staggerFromTo(
// 			'.loQueNosGuia__texto',
// 			1,
// 			{ y: 25, opacity: 0, ease: Expo.easeIn },
// 			{ y: 0, opacity: 1, ease: Expo.easeOut }
// 		);


// 	var escenaUno = new ScrollMagic.Scene ({
// 		triggerElement: '#escenaTres',
// 		triggerHook: 0.1
// 	})

// 	.setTween(info)
// 	.setPin(true)
// 	.reverse(true)			
// 	.addIndicators({
// 		name: 'texto',
// 		colorTrigger: 'white',
// 		indent: 10,
// 		colorStart: 'yellow',
// 		colorEnd: 'yellow',
// 	})

// 	.addTo(controller);

// 	//Escena 4

// 	animacionTimeLine
// 		.from('.lineaHorizontal', 3,{drawSVG:"0%", delay:0})
// 		.from('.fecha', 1, {delay: -2, opacity:0})
// 		.from('.lineaVertical', 2,{drawSVG:"0%", delay:-1.5})
// 		.from('.timeLine__informacion', 1, {delay: -2, opacity:0})
// 		.from('.loQueNosHaFormado__titulo', 1, {delay: 0, opacity:0})
// 		// .from('.pinHoverActive', 1, {delay: 0, opacity:0})
// 		// .to('.lineaVertical', 1,{delay:0, opacity:0})

// 	var escenaUno = new ScrollMagic.Scene ({
// 		triggerElement: '#escenaCuatro',
// 		triggerHook: 0.1
// 	})

// 	.setTween(animacionTimeLine)
// 	.setPin(true)
// 	.reverse(true)
// 	.addIndicators({
// 		name: 'timeline',
// 		colorTrigger: 'white',
// 		indent: 10,
// 		colorStart: 'orange',
// 		colorEnd: 'orange',
// 	})

// 	.addTo(controller);

// 	//Escena 5
// 	iconos
// 		.from('.afinidad, .riesgos, .fianzas', 1, {drawSVG:"0%", delay:0});


// 	var escenaUno = new ScrollMagic.Scene ({
// 		triggerElement: '#escenaCinco',
// 		triggerHook: 0.1,
// 	})
// 	.setTween(iconos)
// 	.setPin(true)
// 	.reverse(true)
// 	.addIndicators({
// 		name: 'iconos',
// 		colorTrigger: 'white',
// 		indent: 0,
// 		colorStart: 'yellow',
// 		colorEnd: 'yellow',
// 	})
// 	.addTo(controller);

// 	//Escena 6
// 	iconos
// 		.from('.afinidad, .riesgos, .fianzas', 1, {drawSVG:"0%", delay:0});


// 	var escenaUno = new ScrollMagic.Scene ({
// 		triggerElement: '#escenaCinco',
// 		triggerHook: 0.1,
// 	})
// 	.setTween(iconos)
// 	.setPin(true)
// 	// .reverse(true)
// 	.addIndicators({
// 		name: 'iconos',
// 		colorTrigger: 'white',
// 		indent: 0,
// 		colorStart: 'yellow',
// 		colorEnd: 'yellow',
// 	})
// 	.addTo(controller);

// })


function openFecha(evt, fecha) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(fecha).style.display = "flex";
	evt.currentTarget.className += " active";
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




function openProducto(evt, productoNombre) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("productoContenido");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("productolinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(productoNombre).style.display = "flex";
  evt.currentTarget.className += " active";
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaulttOpen").click();




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("activo");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}


