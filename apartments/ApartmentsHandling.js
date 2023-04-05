const StatusCodes = require('http-status-codes').StatusCodes;
const e = require('express');
const globalScope = require('../GlobalConsts')

function GetApartmentList(req, res)
{
    const apartment = globalScope.apartmentsList
    res.status(StatusCodes.OK)
    res.send(JSON.stringify(apartment)) //קח אובייקט של הדירה ותשלח אותו לצד לקוח
}

function GetApartment(req, res)
{
    const apartmentName =  req.body.apartmentName
    const apartment = globalScope.apartmentsList.FindApartment(apartmentName)
    if( apartment === null)
    {
        res.status(StatusCodes.BAD_REQUEST)
		res.send("this movie name doesn't exist")
		return	 
    }
    res.status(StatusCodes.OK)
    res.send(JSON.stringify(apartment))
}

function CreateApartment(req, res)
{
    const apartmentName =  req.body.name
    const email = req.body.email
    const image = req.body.imageUrl
    
    if (apartmentName == null || email == null || image == null)
    {
        res.status(StatusCodes.BAD_REQUEST)
		res.send("one of the required field is missing")
		return	 
    }

    newApartment = globalScope.apartmentsList.AddApartment(apartmentName, image)//יצירת דירה חדשה
    
    res.status(StatusCodes.OK)
	res.send(JSON.stringify(newApartment))
}

module.exports = {GetApartmentList, GetApartment, CreateApartment}
//איזה פונקציות אפשר להשתמש מבחוץ