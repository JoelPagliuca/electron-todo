const links = document.querySelectorAll('link[rel="import"]');

// Import and add each page to the DOM
Array.prototype.forEach.call(links, (link: HTMLLinkElement) => {
	let importedContent = link.import.querySelector("#content");
	let clone = document.importNode(importedContent, true);
	document.querySelector('#content').appendChild(clone);
})