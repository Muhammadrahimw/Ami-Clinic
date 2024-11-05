"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let menu = document.getElementById("menu");
let links = document.getElementById("links");
let xmark = document.getElementById("xmark");
menu.addEventListener("click", () => {
    if (links.style.left === "0") {
        links.style.left = -200 + "%";
    }
    else {
        links.style.left = "0";
    }
});
xmark.addEventListener("click", () => {
    if (links.style.left === "0") {
        links.style.left = "0";
    }
    else {
        links.style.left = -200 + "%";
    }
});
// -----------------------------------------------------------
let groupCards = document.querySelector(".group_cards");
let about = document.getElementById("about");
function getFetch(group) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://localhost:3000/${group}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = yield response.json();
            return data;
            console.log(data);
        }
        catch (error) {
            console.log(error + " :(");
        }
    });
}
function addData() {
    getFetch(`users`).then((data) => {
        data.forEach((item) => {
            groupCards.innerHTML += `
            <div
				class="group_card-user w-full border border-gray-300 rounded-2xl">
				<div class="img">
					<img
						class="rounded-t-2xl w-full"
						src=".${item.src}"
						alt="doctor" />
				</div>
				<div
					class="px-12 py-6 min-h-[19.5em] flex flex-col justify-between max-md:px-6 max-[360px]:min-h-[16em]">
					<strong>Попов Константин Юрьевич</strong>
					<p class="prg mt-4">${item.info}</p>
					<div>
						<p class="prg mt-5">
							Стаж: <span class="font-semibold">${item.Experience}</span>
						</p>
						<button class="btn mt-5 w-full">Записаться на приём</button>
						<button
							class="w-full bg-transparent border-none btn h-6 mt-4 text-[--gray-color]">
							Подробнее о враче
						</button>
					</div>
				</div>
			</div>
            `;
        });
    });
    getFetch(`cards`).then((data) => {
        data.forEach((item) => {
            about.innerHTML += `
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
				<img
					src="${item.src}"
					alt="Blog image"
					class="w-full h-48 object-cover" />
				<div class="p-4">
					<span
						class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
						>All on 4</span
					>
					<h4 class="text-lg font-medium mt-2">
						${item.info}
					</h4>
					<p class="text-gray-600 mt-2 text-sm">
						${item.post}
					</p>
					<a href="#" class="text-blue-500 text-sm font-medium mt-4 block"
						>Читать подробнее</a
					>
				</div>
			</div>
            `;
        });
    });
}
addData();
//# sourceMappingURL=main.js.map