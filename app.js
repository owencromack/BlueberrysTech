const tools = [
  {
    title: "Page Toolkit",
    description: "A bookmarklet packed with tools to inspect and alter elements on any web page.",
    code: `javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/owencromack/BlueberrysTech/bookmarklets/page-toolkit-bookmarklet.txt';document.body.appendChild(s);})();`
  },
  {
    title: "Scientific Calculator",
    description: "A lightweight, floating scientific calculator overlay for your browser.",
    code: `javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/owencromack/BlueberrysTech/bookmarklets/scicalc.txt';document.body.appendChild(s);})();`
  },
  {
    title: "Ad Remover",
    description: "Removes common ads, popups, and clutter from the active web page.",
    code: `javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/owencromack/BlueberrysTech/bookmarklets/adgone.txt';document.body.appendChild(s);})();`
  },
  {
    title: "Edit Text",
    description: "Toggles live text editing mode on any webpage so you can click and edit text directly.",
    code: `javascript:(function(){if(document.designMode==='on'){document.designMode='off';alert('Text editing disabled');}else{document.designMode='on';alert('Text editing enabled');}})();`
  },
  {
    title: "Blooket Toolkit",
    description: "Utilities and helpers for Blooket game sessions.",
    code: `javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/owencromack/BlueberrysTech/bookmarklets/blooket-toolkit.txt';document.body.appendChild(s);})();`
  },
  {
    title: "Auto Clicker",
    description: "Automated clicker script to trigger rapid clicks on targeted page elements.",
    code: `javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/owencromack/BlueberrysTech/bookmarklets/autoclicker.txt';document.body.appendChild(s);})();`
  },
  {
    title: "3D Page Effect",
    description: "Transforms page elements into a 3D tilt perspective mode.",
    code: `javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/owencromack/BlueberrysTech/bookmarklets/three-d.txt';document.body.appendChild(s);})();`
  }
];

function renderTools() {
  const container = document.getElementById("tools-container");
  if (!container) return;

  container.innerHTML = tools.map(tool => `
    <div class="card">
      <h2>${tool.title}</h2>
      <p>${tool.description}</p>
      <a class="bookmarklet-btn" href="${tool.code}">Drag to Bookmarks Bar</a>
    </div>
  `).join('');
}

document.addEventListener("DOMContentLoaded", renderTools);
