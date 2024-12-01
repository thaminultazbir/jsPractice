const dolphins = (97+112+101) / 3;
const koalas = (109+95+106) / 3;

if((dolphins === koalas) && (dolphins > 100) && (koalas > 100)){
    console.log(`Score (${dolphins.toFixed(2)}) is same! Match is draw`);
}
else if((dolphins > koalas) && dolphins >= 100){
    console.log(`Dolphins (${dolphins.toFixed(2)}) is won`);
}
else if((dolphins < koalas) && koalas >= 100){
    console.log(`Koalas (${koalas.toFixed(2)}) is won`);
}
else{
    console.log(`No one wins the trophy`);
}