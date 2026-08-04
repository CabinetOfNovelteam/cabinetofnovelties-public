class entirefuckingsite extends HTMLElement {
  async connectedCallback() {
    let html;
    const style = document.createElement('link');
    style.rel = 'stylesheet';
      html = await (await fetch("fuck.html")).text()
      style.href = 'style.css';
      const templaye = document.createElement('template')
      templaye.innerHTML = html
      const shadow = this.attachShadow({mode: 'open'})
      shadow.appendChild(templaye.content.cloneNode(true))


      if (window.screen.width > 600) {
        var huhh = shadow.getElementById("scaleme")
        huhh.style.fontSize = [((window.screen.width / 1536)*100),"%"].join('')
      }
      


      shadow.prepend(style);
      const last = localStorage.getItem("cabinet_last_date")
      const now = new Date().getDate()
      let referer

      if (performance.navigation.type == performance.navigation.TYPE_RELOAD || now == last) {
        referer = "cabinetofnovelties"
      } else {
        referer = document.referrer
        localStorage.setItem("cabinet_last_date", String(now))
      }

      const eviljson = await (await fetch(`https://data.cabinetofnovelties.com/?url=${referer}`)).json()
      setTimeout(() => {
      shadow.getElementById("viewcount").innerHTML = (Number(eviljson.views))
      shadow.getElementById("downloadcount").innerHTML = `${(Number(eviljson.downloads))} DOWNLOADS AND COUNTING!`
      },1000)
      
  }
}
customElements.define("site-template-yay",entirefuckingsite)