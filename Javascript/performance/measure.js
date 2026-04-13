     //Code 1
     
const t1=performance.now()
     for(let i=1;i<=100;i++){
        let para=document.createElement('p');
        para.textContent="This is Para "+i;
        document.body.appendChild(para);             //adding one-one line to body
     }
const t2=performance.now()
console.log("Total time taken by Code 1 is "+(t2-t1));


    //Code 2

    const t3=performance.now();
let mydiv=document.createElement('div');
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is Para "+i;
    mydiv.appendChild(para);
 }                                                   // adding lines to mydiv and then add whole div to body
 document.body.appendChild(mydiv);
    
 const t4=performance.now();
 console.log("Total time taken by Code 2 is "+(t4-t3));