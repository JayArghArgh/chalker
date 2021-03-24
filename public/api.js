console.log("api.js");
const API = {
  async getAllMatch(){
    let res;
    try {
      res = await fetch("/api/match");
    } catch (err) {
      console.log(err);
    }
    const json = await res.json();
    return json;
  }
};