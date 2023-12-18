const functions = require("firebase-functions");
const fabric = require("fabric").fabric;
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

exports.render = functions.https.onRequest(async (request, response) => {
	const data = request.body.data;
	const canvas = new fabric.StaticCanvas(null, { width: 1000, height: 1000 });
	await new Promise((resolve, reject) => {
		canvas.loadFromJSON(data, function () {
			canvas.renderAll();
			resolve("done");
		});
	});
	const url = canvas.toDataURL();

	response.contentType("application/json");
	response.send({ url });
});
