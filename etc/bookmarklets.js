javascript: (() => {  })();

javascript: (() => {
    return '<h1 style="color: white; background-color: black;">Hello, World!</h1>';
})();

// select a canvas element and print to console
javascript: (() => { const canvas = document.querySelector('canvas'); console.log(canvas); })();



//screenshot iframe
const iframe = document.querySelector('iframe'); console.log(iframe); console.log(iframe.contentDocument.querySelector('canvas'));

javascript: (() => { const iframe = document.querySelector('iframe'); console.log(iframe); console.log(iframe.contentDocument.querySelector('canvas')); })();

const canvas = document.querySelector('canvas'); console.log(canvas); dataURL = canvas.toDataURL('image/png'); 
const a = document.createElement('a'); 
a.href = dataURL; 
var date = new Date(); var datetime = date.getDate()+"/"+(date.getMonth()+1)+"-"+date.getFullYear()+"-"+date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds();
a.download = document.title + datetime; 
a.setAttribute('rel', 'noopener noreferrer');
a.setAttribute('target', '_blank');
document.body.appendChild(a); 
a.click(); 
document.body.removeChild(a); 

javascript: (() => { 
    var canvas = document.querySelector('canvas'); 
    var dataURL = canvas.toDataURL('image/png'); 
    const a = document.createElement('a'); 
    a.href = dataURL; 
    var date = new Date(); 
    var datetime = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds();
    a.download = document.title+datetime+".png"; 
    a.setAttribute('rel', 'noopener noreferrer');
    a.setAttribute('target', '_blank');
    document.body.appendChild(a); 
    a.click(); 
    // console.log(dataURL);
    console.log(a.download);
    document.body.removeChild(a);
    var img = document.createElement('img');
    img.src = dataURL;
    document.body.appendChild(img);
})();

function screenshot_canvas (){
var canvas = document.querySelector('canvas'); 
var dataURL = canvas.toDataURL('image/png'); 
var a = document.createElement('a'); 
a.href = dataURL; 
var date = new Date(); 
var datetime = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds();
a.download = document.title+datetime+".png"; 
a.setAttribute('rel', 'noopener noreferrer');
a.setAttribute('target', '_blank');
document.body.appendChild(a); 
a.click(); }