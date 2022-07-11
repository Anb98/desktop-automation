const robot = require("robotjs");
const raf = require("raf");

const utils = {
    normalize: function ($value, $min, $max) {
        return ($value - $min) / ($max - $min);
    },
    interpolate: function ($normValue, $min, $max) {
        return $min + ($max - $min) * $normValue;
    },
    map: function ($value, $min1, $max1, $min2, $max2) {
        if ($value < $min1) $value = $min1;
        
        if ($value > $max1) $value = $max1;
        
        return this.interpolate(this.normalize($value, $min1, $max1), $min2, $max2);
    }
};


robot.setMouseDelay(0);

const screenSize = robot.getScreenSize();
const height = screenSize.height;
const width = screenSize.width;
const origin = {
	x: width / 2,
	y: height / 2
};

const r = 200;
let x, y;


function updatePosition(deg) {
	t = utils.map(deg, 0, 360, 0, 6.3);
	x = Math.floor(origin.x + (r * Math.cos(t)));
    y = Math.floor(origin.y + (r * Math.sin(t)));
	robot.moveMouse(x, y);
}

let d = 1;
function render() {
	d += 2;
	updatePosition(d);


	if(d > 360) d = 1;
	raf(render);
}

render();
