# Things I Learned

* electron quick-start [guide](https://electronjs.org/docs/tutorial/first-app)
* couldn't install electron because of an [issue](https://github.com/jprichardson/node-fs-extra/issues/577) with node 10.1.0 that was marked closed 6 hours ago
* `brew switch node 10.0.0`
* electron typescript [example](https://github.com/electron/electron-quick-start-typescript)
* couldn't install tslint, can't figure out why
* a renderer process isn’t actually created until a window has a webContents instance in it. [main vs renderer](https://codeburst.io/deep-dive-into-electrons-main-and-renderer-processes-7a9599d5c9e2)
* looks like 
	* *main* is just for stuff like window management and anything OS related
	* *render* is just a normal browser
	* they communication by registering listeners over `electron.ipcRenderer` and `electron.ipcMain`
* I very don't understand `<template>` elements

### Potential attack vectors
[imports.ts](./src/imports.ts) loads content using HTML Imports, the script grabs all the links with a `link.ref == import`, an XSS could add an extra `<link rel='import'>` and load more content