// .team .name  


const request = require("request");
const cheerio = require("cheerio");
const { hasClass } = require("cheerio/lib/api/attributes");

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
console.log("before");
request(url , cb);
function cb(err , response , html){
    if(err) console.log(err);
    else extractHTML(html);
}
console.log("After");

function extractHTML (html){
    let $ = cheerio.load(html);
    let teamsArr = $(".match-info.match-info-MATCH .team");
    let wteamName;
    for (let i=0; i< teamsArr.length; i++) {
        let hashclass = $(teamsArr[i]).hasClass("team-gray");
        if(!hashclass) {
            let teamNameElem = $(teamsArr[i]).find(".name");
            wteamName = teamNameElem.text().trim() ;
        }
    }
    let innigsArr = $(".card.content-block.match-scorecard-table>.Collapsible");    
    let htmlStr = "";
    for (let i =0; i < innigsArr.length; i++){
        // let cHtml = $(innigsArr[i]).html();
        // htmlStr += cHtml; 
        let teamNameElem = $(innigsArr[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        let hwtName = "" , hwt = 0;
        if(wteamName == teamName) {
            let tableElm = $(innigsArr[i]).find(".table.bowler");
            let allBowlers = $(tableElm).find("tr");
            for(let j=0; j< allBowlers.length; j++){
                let allColsOfPlayer = $(allBowlers[j]).find("td");
                let playerName = $(allColsOfPlayer[0]).text();
                let wickets = $(allColsOfPlayer[4]).text();
                if(wickets > hwt){
                    hwt = wickets;
                    hwtName = playerName;
                }
            }
            console.log(hwtName , " : " , hwt);
        }
    }
}
