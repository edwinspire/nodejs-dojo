// The module to "bootstrap"
var loadModule = "app-server/server";
var dojoSrc = 'dojo-release-1.12.2';
process.env.EXPRESS_STATIC_DIR = __dirname+'/src/app-client';

// Configuration Object for Dojo Loader:
dojoConfig = {
	baseUrl: "src/", // Where we will put our packages
	async: true, // We want to make sure we are using the "modern" loader
			hasCache:{
				"dojo-built": 1,
				"dojo-loader": 1,
				"dom": 0,
				"host-browser": 1,
				"host-node": 1,
				"config-selectorEngine": "lite"
			},
	// While it is possible to use config-tlmSiblingOfDojo to tell the
	// loader that your packages share the same root path as the loader,
	// this really isn't always a good idea and it is better to be
	// explicit about our package map.
	packages: [{
		name: "dojo",
		location: dojoSrc+"/dojo"
	},{
		name: "dojox",
		location: dojoSrc+"/dojox"
	},{
		name: "dstore",
		location: dojoSrc+"/dstore"
	},{
		name: "app",
		location: "app"
	},{
		name: "app-server",
		location: "app-server"
	},{
		name: "api",
		location: "app-server/api"
	}],
	deps: [ loadModule ] // And array of modules to load on "boot"
};

// Now load the Dojo loader
require("./src/"+dojoSrc+"/dojo/dojo");