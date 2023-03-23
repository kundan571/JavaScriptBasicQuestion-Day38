const month = Process.arvg[2];
const day = Process.arvg[3];

// checking condition for a given date range
if(month == "3" && day >= "20" || month == "4" || month == "5" || month == "6" && day <= "20"){
    console.log("true");
}else{
    console.log("false");
}