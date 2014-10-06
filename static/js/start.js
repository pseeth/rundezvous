phases = ['#home', '#rundetails', '.direction', '#done'];
step = 0;

function showCurrent() {
	$(phases[step]).show();
}

$(document).ready(function() {
	$('#next').click(function() {
		if (step < phases.length) {
			$(phases[step]).hide();
			step += 1;
			$(phases[step]).show();
		}
	});
	$('.screen').hide();
	showCurrent();
});
