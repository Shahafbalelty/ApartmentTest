const { json } = require('express/lib/response');
const fs = require('fs');


function CreateJsonFile(jsonFileName)
{
	if(!fs.existsSync(jsonFileName))
		createJson(jsonFileName)

	return ImportJsonData(jsonFileName)
}

function UpdateJsonFile(jsonObject, jsonFileName)
{
	fs.writeFileSync(jsonFileName, JSON.stringify(jsonObject), (err) => {
		if (err) {
			throw err;
		}
	});
	console.log("json file updated.")
}

function createJson(jsonFileName)
{
	fs.writeFileSync(jsonFileName,"")
	console.log("json file created.")
}

function ImportJsonData(jsonFileName)
{
	rawdata = fs.readFileSync(jsonFileName)
	if(rawdata.buffer.byteLength != 0)
		datalist = JSON.parse(rawdata)
	else datalist = null
	return datalist
}


module.exports = {CreateJsonFile, UpdateJsonFile};