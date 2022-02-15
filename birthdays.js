// .team .name

const request = require("request");
const cheerio = require("cheerio");
const { hasClass } = require("cheerio/lib/api/attributes");

const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
console.log("before");
request(url, cb);
function cb(err, response, html) {
  if (err) console.log(err);
  else extractHTML(html);
}
console.log("After");

function extractHTML(html) {
  let $ = cheerio.load(html);
  let innigsArr = $(".card.content-block.match-scorecard-table>.Collapsible");
  for (let i = 0; i < innigsArr.length; i++) {
    // let cHtml = $(innigsArr[i]).html();
    // htmlStr += cHtml;
    let teamNameElem = $(innigsArr[i]).find(".header-title.label");
    let teamName = teamNameElem.text();
    teamName = teamName.split("INNINGS")[0];
    teamName = teamName.trim();
    
    // table batsman
    let tableElm = $(innigsArr[i]).find(".table.batsman");
    let allBatsMan = $(tableElm).find("tr");
    for (let j = 0; j < allBatsMan.length; j++) {
      let allColsOfPlayer = $(allBatsMan[j]).find("td");
      let isbatsManCol = $(allColsOfPlayer[0]).hasClass("batsman-cell");
      if (isbatsManCol==true) {
        let href = $(allColsOfPlayer[0]).find("a").attr("href");
        // console.log(`team name : ${teamName} : playerName : ${playerName}`);
        let name = $(allColsOfPlayer[0]).text();
        let fulllink = "https://www.espncricinfo.com"+href; 
        // console.log(fulllink);
        // console.log(teamName);
        getBirthdayPage(fulllink , name , teamName);
      }
    }
  }
}

function getBirthdayPage(url ,  name , teamName){
   request(url , cb);
   function cb (err , response , html){
      if(err) {

      } else {
        extractBirthDay(html , name , teamName );
      }
   }
}
let teamNamePrev = undefined;
function extractBirthDay(html , name , teamName ){
  if (teamNamePrev == undefined){
    teamNamePrev = teamName;
    console.log(teamNamePrev);
  } else if (teamNamePrev != teamName) {
    teamNamePrev = teamName;
    console.log(teamNamePrev);
  }
  let $ = cheerio.load(html);
  let birthDay = $("div.player_overview-grid  >div:nth-child(2) h5");
  
  // div.player_overview-grid  >div:nth-child(2) h5
  console.log(`${name} : ${$(birthDay).text()}`);
}