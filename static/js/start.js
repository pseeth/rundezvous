phases = ['#home', '#rundetails', '.direction', '#done'];
step = 0;

directions = ['left', 'right', 'straight']
dirstep = 0;

function advance() {
	$(phases[step-1]).hide();
	$(phases[step]).show();
	console.log(phases[step]);
}

function updateDirection() {
	$('.direction').text(directions[dirstep]);
}

$(document).ready(function() {
	$('#next').click(function() {
		step += 1;
		if (step < phases.length) {
			if (phases[step] == '.direction') {
				if (dirstep == 0) {
					advance();
				}
				updateDirection();
				dirstep += 1;
				step -= 1;
				
				if (dirstep >= directions.length) {
					step += 1;
				}
			} 
			else {
				advance();
			}
		}
	});
	$('.screen').hide();
	advance();
});
