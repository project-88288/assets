const { LCDClient } = require("@terra-money/feather.js");
/*
const chain = require('../chains.json')
const baseurl = chain.mainnet.lcd
*/
const all_acounts = {
  data: {
    accounts: [
      "terra104dnzgzzx7hjt32sml9zspqfmvr7fdae8l6vy8",
      "terra12dtyaagyz84a53a7m2gm4azqx9y8csphm5tdgk",
      "terra12vm64wggp82ya9k4xcwu6k6r067zd3dpe4zn2f8u0gn5pmd69rvq0hsp5s",
      "terra13ehuhysn5mqjeaheeuew2gjs785f6k7jm8vfsqg3jhtpkwppcmzqcu7chk",
      "terra15svuxeq5w58l5g5qkd2yrmpalgp4uwzz0l86mcfg8z2e2nd7fu8scf4cl5",
      "terra166c6x3kahycew6cd5gyqsxat2r6cdfec2n9kwf",
      "terra170wjwx35kgf49venz77z2fhm8lu0hsz7j420sa",
      "terra1732dz907t7080du426zqtscxhqzzzlwt0hjsu4",
      "terra18dsxfl8huak4taeggq6gpp7duyrrkhvwu3yeas",
      "terra19hz374h6ruwtzrnm8ytkae782uv79h9yt9tuytgvt94t26c4793qnfg7vn",
    ],
  },
};
const lcd = LCDClient.fromDefaultConfig("mainnet");

async function getpairs_assets(contract_address) {
  const res = await lcd.wasm.contractInfo(contract_address);
  if (res.label == "pair") {
    let data = {};
    let value = {};
    value["dex"] = "";
    value["type"] = "";
    value["assets"] = [
      res.init_msg.asset_infos[0].token.contract_addr,
      res.init_msg.asset_infos[1].token.contract_addr,
    ];
    data[res.address] = value;
    console.log(data);
    console.log(res);
  }
}

getpairs_assets("terra104dnzgzzx7hjt32sml9zspqfmvr7fdae8l6vy8").catch((e) => console.log(1));
getpairs_assets("terra12dtyaagyz84a53a7m2gm4azqx9y8csphm5tdgk").catch((e) => console.log(2));
getpairs_assets("terra12vm64wggp82ya9k4xcwu6k6r067zd3dpe4zn2f8u0gn5pmd69rvq0hsp5s").catch((e) => console.log(3));
getpairs_assets("terra13ehuhysn5mqjeaheeuew2gjs785f6k7jm8vfsqg3jhtpkwppcmzqcu7chk").catch((e) => console.log(4));
getpairs_assets("terra15svuxeq5w58l5g5qkd2yrmpalgp4uwzz0l86mcfg8z2e2nd7fu8scf4cl5").catch((e) => console.log(5));
getpairs_assets("terra166c6x3kahycew6cd5gyqsxat2r6cdfec2n9kwf").catch((e) => console.log(6));
getpairs_assets("terra170wjwx35kgf49venz77z2fhm8lu0hsz7j420sa").catch((e) => console.log(7));
getpairs_assets("terra1732dz907t7080du426zqtscxhqzzzlwt0hjsu4").catch((e) => console.log(8));
getpairs_assets("terra18dsxfl8huak4taeggq6gpp7duyrrkhvwu3yeas").catch((e) => console.log(9));
getpairs_assets("terra19hz374h6ruwtzrnm8ytkae782uv79h9yt9tuytgvt94t26c4793qnfg7vn").catch((e) => console.log(10));

function is_account(contract_address) {}

function is_token(contract_address) {}

function is_dnom(contract_address) {}

function is_pair(contract_address) {}
