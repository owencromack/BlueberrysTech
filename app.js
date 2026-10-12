const navButtons = [...document.querySelectorAll(".nav-button")];
const views = {
  bookmarklets: document.getElementById("bookmarkletsView"),
  games: document.getElementById("gamesView"),
  utilities: document.getElementById("utilitiesView")
};
function switchView(name) {
  Object.entries(views).forEach(([key, section]) => { section.hidden = key !== name; });
  navButtons.forEach(button => button.classList.toggle("active", button.dataset.view === name));
  if (name !== "bookmarklets") window.scrollTo({ top: 0, behavior: "smooth" });
}
navButtons.forEach(button => button.addEventListener("click", () => switchView(button.dataset.view)));
document.querySelectorAll("[data-view='home']").forEach(link => link.addEventListener("click", event => {
  event.preventDefault(); switchView("bookmarklets"); window.scrollTo({top:0,behavior:"smooth"});
}));
document.getElementById("exploreButton").addEventListener("click", () => {
  switchView("bookmarklets");
  document.getElementById("bookmarkletsView").scrollIntoView({behavior:"smooth"});
});

const searchInput = document.getElementById("searchInput");
const cards = [...document.querySelectorAll(".tool-card")];
const emptyState = document.getElementById("emptyState");
const toolCount = document.getElementById("toolCount");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const match = (card.innerText + " " + card.dataset.search).toLowerCase().includes(query);
    card.hidden = !match;
    if (match) visible++;
  });
  emptyState.hidden = visible !== 0;
  toolCount.textContent = `${visible} ${visible === 1 ? "tool" : "tools"}`;
});

/* Page Toolkit bookmarklet. The page only copies this text; it does not execute it on this site. */
const bookmarklet = `javascript:(()=>{if(window.__BM){window.__BM.destroy();return}const s={timer:null,last:null,dark:false,media:false,reader:false,edit:false,styles:[],listeners:[]};const style=css=>{let x=document.createElement('style');x.textContent=css;document.documentElement.append(x);s.styles.push(x);return x};const p=document.createElement('div');p.id='blueberry-page-toolkit';p.style.cssText='position:fixed;z-index:2147483647;top:12px;right:12px;width:280px;max-height:82vh;overflow:auto;background:#111a2e;color:white;font:14px -apple-system,sans-serif;border:1px solid #6478ad;border-radius:15px;box-shadow:0 8px 35px #0009;padding:12px';p.innerHTML='<b style="display:block;font-size:16px;margin-bottom:10px">🫐 Page Toolkit <button id="bptx" style="float:right">×</button></b>'+[['Auto-click last position','ac','Toggle'],['Edit page text','ed','Toggle'],['Hide likely ads','ad','Toggle'],['Calculator','ca','Open'],['Dark mode','dk','Toggle'],['Reader view','rd','Toggle'],['Hide images/videos','im','Toggle'],['Find text on page','fi','Find'],['Page statistics','st','Show'],['Heading outline','ou','Show'],['Copy page link','url','Copy'],['Copy selected text','sel','Copy'],['Change page title','ti','Set'],['Link inspector','li','Show']].map(a=>'<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;border-top:1px solid #ffffff20;padding:8px 0"><span>'+a[0]+'</span><button data-tool="'+a[1]+'">'+a[2]+'</button></div>').join('')+'<pre id="bpr" style="white-space:pre-wrap;overflow-wrap:anywhere;font-size:11px;color:#cbd6f1"></pre><small>Changes apply to this tab only. Tap × to close.</small>';document.body.append(p);const $=id=>p.querySelector('#'+id),out=t=>{$('bpr').textContent=t},btn=(id,on)=>{let b=p.querySelector('[data-tool="'+id+'"]');if(b)b.textContent=on?'ON':'OFF'};const listen=(el,ev,fn,opts)=>{el.addEventListener(ev,fn,opts);s.listeners.push(()=>el.removeEventListener(ev,fn,opts))};listen(document,'click',e=>{if(!p.contains(e.target)&&!e.target.closest('.bptcalc'))s.last={x:e.clientX,y:e.clientY}},true);$('bptx').onclick=()=>window.__BM.destroy();p.querySelectorAll('[data-tool]').forEach(b=>b.onclick=()=>{const id=b.dataset.tool;if(id==='ac'){if(s.timer){clearInterval(s.timer);s.timer=null;btn(id,false)}else{if(!s.last){alert('Tap the webpage where you want repeated clicks first.');return}let n=Number(prompt('Clicks per second (1–20):','5'));if(!Number.isFinite(n)||n<1||n>20)return;s.timer=setInterval(()=>{let e=document.elementFromPoint(s.last.x,s.last.y);if(e&&!p.contains(e)&&!e.closest('.bptcalc'))e.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,clientX:s.last.x,clientY:s.last.y}))},1000/n);btn(id,true)}}else if(id==='ed'){s.edit=!s.edit;document.designMode=s.edit?'on':'off';btn(id,s.edit)}else if(id==='ad'){s.ad=!s.ad;if(s.ad){s.adstyle=style('iframe[src*="doubleclick" i],iframe[src*="googlesyndication" i],[id*="advert" i],[class*="advert" i],[aria-label*="advertisement" i]{display:none!important}');document.querySelectorAll('div,aside,section').forEach(e=>{if(!p.contains(e)&&/advert|doubleclick|googlesyndication|banner-ad/i.test((e.id||'')+' '+(typeof e.className==='string'?e.className:''))){e.dataset.bptHide='1';e.style.setProperty('display','none','important')}})}else{s.adstyle?.remove();document.querySelectorAll('[data-bpt-hide="1"]').forEach(e=>{e.style.removeProperty('display');delete e.dataset.bptHide})}btn(id,s.ad)}else if(id==='dk'){s.dark=!s.dark;if(s.dark)s.ds=style('html{filter:invert(.88) hue-rotate(180deg)!important;background:#111!important}img,video,canvas,svg,iframe{filter:invert(1) hue-rotate(180deg)!important}');else s.ds?.remove();btn(id,s.dark)}else if(id==='rd'){s.reader=!s.reader;if(s.reader)s.rs=style('body{max-width:850px!important;margin:24px auto!important;padding:24px!important;font:19px/1.75 Georgia,serif!important;background:#faf7ef!important;color:#222!important}nav,header,footer,aside,[role="navigation"]{display:none!important}');else s.rs?.remove();btn(id,s.reader)}else if(id==='im'){s.media=!s.media;if(s.media)s.ms=style('img,video,canvas,picture{visibility:hidden!important}');else s.ms?.remove();btn(id,s.media)}else if(id==='fi'){let q=prompt('Find text on this page:');if(q)out(window.find(q)?'Found: '+q:'No match found: '+q)}else if(id==='st'){let t=(document.body.innerText||'').replace(/\\s+/g,' ').trim();out('Title: '+document.title+'\\nWords: '+(t?t.split(' ').length:0)+'\\nCharacters: '+t.length+'\\nLinks: '+document.links.length+'\\nImages: '+document.images.length+'\\nHeadings: '+document.querySelectorAll('h1,h2,h3,h4,h5,h6').length+'\\nURL: '+location.href)}else if(id==='ou'){out([...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h=>' '.repeat(Number(h.tagName[1])-1)+h.innerText.trim()).join('\\n')||'No headings found.')}else if(id==='url'||id==='sel'){let t=id==='url'?location.href:String(getSelection()||'').trim();if(!t){out('Select some text on the page first.');return}if(navigator.clipboard?.writeText)navigator.clipboard.writeText(t).then(()=>out('Copied to clipboard.')).catch(()=>out('Clipboard blocked by this page/browser.'));else out(t)}else if(id==='ti'){let t=prompt('New page title:',document.title);if(t!==null){document.title=t;out('Title changed for this tab.')}}else if(id==='li'){out([...document.links].filter(a=>a.href).slice(0,60).map((a,i)=>(i+1)+'. '+(a.innerText.trim()||'[no text]')+'\\n'+a.href).join('\\n')||'No links found.')}else if(id==='ca'){let c=document.querySelector('.bptcalc');if(c){c.remove();return}c=document.createElement('div');c.className='bptcalc';c.style.cssText='position:fixed;z-index:2147483647;top:18%;left:20px;width:245px;background:#111a2e;color:white;border:1px solid #6478ad;border-radius:12px;padding:10px';c.innerHTML='<b>Calculator</b><button class="bptclose" style="float:right">×</button><input style="width:100%;box-sizing:border-box;margin:8px 0;padding:8px" readonly><div>'+['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','(',')','C'].map(x=>'<button style="width:23%;margin:1%;padding:8px">'+x+'</button>').join('')+'</div>';document.body.append(c);let input=c.querySelector('input');c.querySelector('.bptclose').onclick=()=>c.remove();c.querySelectorAll('button:not(.bptclose)').forEach(b=>b.onclick=()=>{let x=b.textContent;if(x==='C')input.value='';else if(x==='='){try{if(!/^[0-9+\\-*/().\\s]+$/.test(input.value))throw 0;input.value=Function('"use strict";return ('+input.value+')')()}catch(e){input.value='Error'}}else{if(input.value==='Error')input.value='';input.value+=x}})}});window.__BM={destroy(){if(s.timer)clearInterval(s.timer);document.designMode='off';s.styles.forEach(x=>x.remove());s.listeners.forEach(f=>{try{f()}catch(e){}});document.querySelectorAll('[data-bpt-hide="1"]').forEach(e=>{e.style.removeProperty('display');delete e.dataset.bptHide});document.querySelectorAll('.bptcalc').forEach(e=>e.remove());p.remove();delete window.__BM}}})();`;

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (_) {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (_) {}
    area.remove();
    return ok;
  }
}
const copyButton = document.getElementById("copyBookmarklet");
const copyStatus = document.getElementById("copyStatus");
async function copyBookmarklet() {
  const ok = await copyText(bookmarklet);
  copyStatus.textContent = ok
    ? "Copied! Create a bookmark and paste this into its URL/address field."
    : "Copy was blocked by your browser. Open the install guide and try again.";
  copyButton.textContent = ok ? "Copied ✓" : "Try copying again";
  setTimeout(() => { copyButton.textContent = "Copy bookmarklet"; }, 2200);
}
copyButton.addEventListener("click", copyBookmarklet);
const dialog = document.getElementById("installDialog");
document.getElementById("showInstall").addEventListener("click", () => dialog.showModal());
document.getElementById("closeInstall").addEventListener("click", () => dialog.close());
document.getElementById("copyFromDialog").addEventListener("click", copyBookmarklet);
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
