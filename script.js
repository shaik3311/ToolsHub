const menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight = "300px";
    }else{
        menuList.style.maxHeight = "0px";
    }
}

function openTool(toolName, newTab = false) {
  const url = `https://shaik3311.gtihub.io/tools/${toolName}/index.html`;
  
  if (newTab) {
    window.open(url, '_blank'); // open in new tab
  } else {
    window.location.href = url; // open in same tab
  }
}
