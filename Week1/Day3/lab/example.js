function closeDoc(){
 alert("Exit")
 //window.close()
 const para = document.createElement("p");
 para.innerHTML = "This is a paragraph.";
 document.getElementById("myDIV").appendChild(para);
}