function Engine (name) {
	this.name = name;

	this.start = function() {
		console.log(this.name + ' engine started...');
	}
}

function startEngine (engine) {
	engine.start();
}

var engine = new Engine('Maruti');
startEngine(engine);

var hondaEngine = new Engine('Honda');
startEngine(hondaEngine);