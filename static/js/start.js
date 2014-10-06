phases = ['#home', '#rundetails', '.direction', '#done'];
step = 0;

function advance() {
	$(phases[step-1]).hide();
	$(phases[step]).show();
}

$(document).ready(function() {
	$('#next').click(function() {
		step += 1;
		if (step < phases.length) {
			advance();
		}
	});
	$('.screen').hide();
	advance();
});
