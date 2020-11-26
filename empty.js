document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
		loaded_message = {
			"event": "loaded",
			"customer_account_id": -1,
			"product_offer_ids": [],
			"utm":{
					"source":"bigdata-banner-telecomkz",
					"medium": "display",
					"campaign": 'empty'
			}
		}
		parent.postMessage(JSON.stringify(loaded_message), "*");
    }
};

(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(68971321, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });

