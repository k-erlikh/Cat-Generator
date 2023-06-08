let catFactElem = document.getElementById('catcont');
let generateFact = document.getElementById('catbtn');
catFact();
catPic();

function catFact(){
    fetch('https://catfact.ninja/fact?max_length=140')
        .then((response) => {
            console.log('resolved',response);
            return response.json()
        }).then(data =>{
            console.log('reached', data.fact)
            let catFact = data.fact;
            document.getElementById('catcont').innerHTML = catFact;
        }).catch((error) => {
            console.log('rejected', error);
        });
}

function catPic(){
    fetch('https://api.thecatapi.com/v1/images/search?api_key=live_N0aR6ZmPpCBiK4CDjJ5HlqUQc3eqwED3rET1zk5r0Bv9k4QdsAcRQJWUsZSmsn1p')
    .then((response) => {
        console.log('resolved',response);
        return response.json()
    }).then(data =>{
        console.log('reached', data.fact)
        let catPic = document.getElementById('catpic')
        catPic.src=data[0].url;
    }).catch((error) => {
        console.log('rejected', error);
    });
}   

generateFact.addEventListener('click',()=>{
    catFact();
    catPic();
})