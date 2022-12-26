const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function onReady() {
	win = new BrowserWindow({
		width: 800,
		height: 500,
		frame: false,
		titleBarStyle: 'hidden',
		// titleBarOverlay: {
		// 	color: '#2f3241',
		// 	symbolColor: '#74b1be',
		// 	height: 20
		// }
	});
	win.setMenuBarVisibility(false);
	win.loadURL(url.format({
		pathname: path.join(__dirname, '/dist/sisgerfindkt/index.html'), protocol: 'file:', slashes: true,
	}));
}

app.on('ready', onReady);
