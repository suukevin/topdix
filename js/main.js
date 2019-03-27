window.addEventListener("load", event => new Main());

class Main {
	
	constructor() {
		this._name = "dash";
		let widget = new LeMondeWidget(1, this);
		document.body.appendChild(widget.view.stage);
	}
	
	async get(url) {
		return await Comm.urlrequest("https://localhost:44444/" + this._name + url, {});
	}
	
	async post(url, data) {
		return await Comm.urlrequest("https://localhost:44444/" + this._name + url, {"method": "POST", "data": data});
	}
	
}
