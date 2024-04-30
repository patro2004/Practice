let btn=document.querySelector("button");
btn.addEventListener("click",async() =>{
    console.log("button clicked");
    let fact= await getFacts();
    console.group(fact);
    let p=document.querySelector("#result");
    p.innerText=fact;

}
)




let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log(e);
    }
}