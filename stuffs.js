const click_one = new Audio("assets/click1.wav")
const click_two = new Audio("assets/click2.wav")

// const icons = [
//       "assets/icon/1.ico",
//       "assets/icon/2.ico",
//       "assets/icon/3.ico",
//       "assets/icon/4.ico",
//       "assets/icon/5.ico",
//       "assets/icon/6.ico",
//       "assets/icon/7.ico",
//       "assets/icon/8.ico",
// ]
// iconIndex = 0
// var icon = document.querySelector("link[rel~='icon']")
// icon.rel = 'icon'
// setInterval(function(){
//         if (iconIndex > 7) {
//         iconIndex = 0
//         }
//         icon.href = icons[iconIndex]
//         iconIndex++

// },250)

let icon = document.createElement('link')
icon.setAttribute('rel','icon')
icon.setAttribute('href', 'assets/icon/icon.gif')
icon.setAttribute('type', 'image/x-icon')
document.body.append(icon)

document.body.addEventListener("mousedown", function() {
        click_one.play()
})   
document.body.addEventListener("mouseup", function() {
        click_two.play()
})   