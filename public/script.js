const toast = document.getElementById("toast");
function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2200);
}
async function copyText(value){
  try{
    await navigator.clipboard.writeText(value);
    showToast("Copied to clipboard ✓");
  }catch(e){ showToast("Copy unavailable — select the text manually."); }
}
document.getElementById("copyAll").addEventListener("click",()=>{
  copyText(`CAPTAIN YAMI • SAINT
GitHub: https://github.com/blackclover20007
Telegram: @saintbypass
Phone: +263784970429 / +263714373922`);
});
document.querySelectorAll(".copy-phone").forEach(btn=>{
  btn.addEventListener("click",()=>copyText(btn.dataset.phone));
});
const particles = document.getElementById("particles");
for(let i=0;i<55;i++){
  const p=document.createElement("i");
  p.className="particle";
  p.style.left=Math.random()*100+"%";
  p.style.animationDuration=(7+Math.random()*13)+"s";
  p.style.animationDelay=(-Math.random()*18)+"s";
  p.style.opacity=(.15+Math.random()*.55).toFixed(2);
  particles.appendChild(p);
}
