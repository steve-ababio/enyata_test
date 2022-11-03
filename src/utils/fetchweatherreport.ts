import fetch from "node-fetch";
export async function fetchWeatherReport(url:string){
    const jsonres = await fetch(url,{method:"GET"});
    const response = await jsonres.json();
    console.log(response);
    return response;
}