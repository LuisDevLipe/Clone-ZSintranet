const menu_toggle = document.getElementById("menu-toggle")

const menu_toggle_icon = document.querySelector(".menu-icon")

const menu = document.getElementById("menu")

const main = document.getElementById("main")

const MenuIsOpen = () => menu.classList.contains("open")

menu_toggle.addEventListener("click", function (e) {
	// prettier-ignore
	if (MenuIsOpen()) {
        menu.classList.replace("open", "closed")
        menu_toggle_icon.classList.replace("open", "closed")
    }
	else {
        menu.classList.replace("closed", "open")
        menu_toggle_icon.classList.replace("closed","open")
    }
})

// ajax
document.addEventListener("DOMContentLoaded", function () {
	const links = Array.from(document.querySelectorAll("[ajax-link]"))

	links.forEach((link) => {
		link.addEventListener("click", async function (e) {
			let href = link.getAttribute("ajax-link")
			await fetch(href)
				.then((response) => response.text())
				.then((html) => (main.children.content.innerHTML = html))
				.catch((e) => {
					console.error({ Erro: e })
				})
		})
	})

	document.addEventListener("change",function () {
		
	})
})


function ajax_SPA(url) {}

