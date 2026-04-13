// sytax: 
// <event-target>.addEventListner(<event-type>,<function->action>)

// function changetext(){
//     let fpara=document.getElementById('fpara');
//     fpara.textContent="Hello Mr Arpit "
// }
//fpara.addEventListener('click',changetext);
// {
//      let fpara=document.getElementById('fpara');
//     fpara.textContent="Hello Mr Arpit "
// };
// fpara.removeEventListener('click',changetext);


// let anchorElement=document.getElementById('fanchor');
// anchorElement.addEventListener('click',function(event){
//     event.preventDefault();
//     anchorElement.textContent="Click Done :)"
// })


let paras=document.querySelectorAll('p');
function alertpara(event){
     alert("You have clicked on para:"+event.target.textContent);
}
for(let i=0;i<paras.length;i++){
    let para=paras[i];
    console.log("Event listner added")
    para.addEventListener('click',alertpara);
}
