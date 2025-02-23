
dineroalexis = prompt("cuanto dinero tienes alexis?");
dineroRoberto = prompt("cuanto dinero tienes roberto?");
dineroPedro = prompt("cuanto dinero tienes pedro?");

dineroalexis = parseInt(dineroalexis);

if (dineroalexis >= 0.6 && dineroalexis < 1) {
	alert("alexis; comprate el helado de agua");
	alert("y te sobran" + (dineroalexis - 0.6));
}

else if (dineroalexis >= 1 && dineroalexis < 1.6) {
	alert("alexis; comprate el helado de crema");
	alert("y te sobran" + (dineroalexis - 1));
}
else if (dineroalexis >= 1.6 && dineroalexis < 1.7) {
	alert("alexis; comprate el helado de heladix");
	alert("y te sobran" + (dineroalexis - 1.6));
}
else if (dineroalexis >= 1.7 && dineroalexis < 1.8) {
	alert("alexis; comprate el helado de heladovich");
	alert("y te sobran" + (dineroalexis - 1.7));
}
else if (dineroalexis >= 1.8 && dineroalexis < 2.9) {
	alert("alexis; comprate el helado de helardo");
	alert("y te sobran" + (dineroalexis - 1.8));
}

else if (dineroalexis >= 2.9) {
    alert("alexis, comprate helado con confites o el pote de 1/4kg");
	alert("y te sobran" + (dineroalexis - 2.9));

} else {
	alert("lo siento alexis, pobre de mierda, no te alcanza para ningun helado");
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("roberto, comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert("roberto, comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
	alert("roberto, comprate el helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
	alert("roberto, comprate el helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert("roberto, comprate el helado de helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("roberto, comprate helado con confites o el pote de 1/4kg");

} else {
	alert("lo siento roberto, no te alcanza para ningun helado");
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("pedro; comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert("pedro; comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert("pedro; comprate el helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert("pedro; comprate el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert("pedro; comprate el helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert("pedro, comprate helado con confites o el pote de 1/4kg");

} else {
	alert("lo siento pedro, no te alcanza para ningun helado");
}

