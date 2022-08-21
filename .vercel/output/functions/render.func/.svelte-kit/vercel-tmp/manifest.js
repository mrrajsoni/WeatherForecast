export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","fonts/CeraPro_Medium.ttf","global.scss"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".scss":"text/x-scss"},
	_: {
		entry: {"file":"_app/immutable/start-c503d4ea.js","imports":["_app/immutable/start-c503d4ea.js","_app/immutable/chunks/index-04cd6882.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "Icon",
				pattern: /^\/Icon\/?$/,
				names: [],
				types: [],
				path: "/Icon",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
