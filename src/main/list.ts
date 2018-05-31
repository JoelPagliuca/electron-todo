import { writeFile } from "fs";

const LIST_FILE = "LIST.csv"

var save = () => {
	writeFile(LIST_FILE, "hello", (err) => {
		if (err) console.log(err);
		console.log("File saved");
	});
};

function loadList(): string[] {
	return ["Make the app", "Test the app", "Learn Javascript"];
}

function addItem(item:string) {
	console.log("writing "+item);
}

export { loadList, addItem };