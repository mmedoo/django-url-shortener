const svg = qs("svg");
const display = qs(".mess");
const whatever_was_there = display.innerHTML;
const fullURL = `${window.location.origin}/${key}`;

display.innerHTML = fullURL + whatever_was_there;
display.classList.remove('off');

display[ael]("click", () => {
	
	navigator.clipboard.writeText(fullURL);
	display.classList.remove("hoverable")
	display.innerHTML = "Copied!";

	setTimeout(() => {
		display.innerHTML = fullURL + whatever_was_there;
		display.classList.add("hoverable");
	}, 2500);
	
});
