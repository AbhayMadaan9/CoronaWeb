const { response } = require("express");

function UpdateMap()
{
    //Now we will fetch the json file 
    /*There are two ways to fetch file
    By await of Promise  
    OR
    By fetch function which have a function which automatically runs having two arguments response and reject as javascript callbacks methods and uses .then to have the response 
    for more breif: https://javascript.info/fetch , https://javascript.info/promise-basics
    */

    fetch('/data.json').then(response => response.json()).then(data => {console.log(data)})
    
}