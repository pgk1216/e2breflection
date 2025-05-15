const { Sandbox } = require("e2b");
Sandbox.connect("i88xj9hwqyzkds85zqno8-2902e705").then((sandbox) => {
	sandbox.files.read("package.json").then((files) => {
		console.log(files);
	});
});
