const guilt_phrases = [
	"عيب",
	"عيب والله",
	"!مفيش ضمير خالص؟",
	"مش عارف تكتب لينك",
	"حسبي الله ونعم الوكيل",
	"اتقي ربنا فيا, وكفاية حس بيا \nالفنان عبدالفتاح الجريني -",
	"اشوف فيك يوووم ما اللي انت عملته فيااا \nامال ماهر -",
	"عيب",
	"عيب والله",
	"!مفيش ضمير خالص؟",
	"مش عارف تكتب لينك",
	"حسبي الله ونعم الوكيل",
	"اتقي ربنا فيا, وكفاية حس بيا \nالفنان عبدالفتاح الجريني -",
	"اشوف فيك يوووم ما اللي انت عملته فيااا \nامال ماهر -"
]

function pick(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

function isValidUrl(url) {
	const urlPattern = new RegExp(
		'^(https?:\\/\\/)?' + // optional protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
		'(\\#[-a-z\\d_]*)?$', 'i' // fragment locator
	);
	return urlPattern.test(url);
}

const form = qs("form");

form[ael]("submit" , (e) => {

	e.preventDefault();
	
	const dataObj = new FormData(form);
	let url = dataObj.get("url");
	
	if (isValidUrl(url)){
		
		if (!/^https?:\/\//i.test(url))
			form.url.value = 'http://' + url;

		form.submit();
		
	} else {
		qs(".text").innerText = pick(guilt_phrases);
	}
});
