phases = ['#home', '#rundetails', '#start-running', '.direction', '#done'];
step = 0;

directions = ['turn_left', 'turn_right', 'go_straight', 'stop', 'destination_reached'];
dirstep = 0;

function advance() {
	$(phases[step-1]).hide();
	$(phases[step]).show();
	console.log(phases[step]);
}

function updateDirection() {
	$('.command').text(directions[dirstep]);
	$('.direction').removeClass('turn_left turn_right go_straight stop destination_reached').addClass(directions[dirstep]);
	play('/static/audio/' + directions[dirstep] + '.mp3');
}

function play(file) {
	$("#commandAudio").attr("src", file).detach().appendTo("#audio");
	try {
		audio.pause();
		//audio.currentTime = 0;
		audio.play();
	}
	catch (e) {
        alert(e);
		console.log("audio never loaded");
		audio.play();
	}
}

function next() {
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
		else if (phases[step] == '#start-running') {
			//play welcone_to_rundesvoux sound on join
            play('/static/audio/welcome.mp3');
            advance();
		} else {
            advance();
        }
	}
	else {
		$(phases[step-1]).hide();
		step = 0;
		dirstep = 0;
		$(phases[step]).show();
	}

}

$(document).ready(function() {
	$('body').css('height', $(window).height());
	$('#next').click(next);
	$('.btn-join').click(next);
	$('.logo').click(next);
	$('.screen').hide();
	advance();
});
