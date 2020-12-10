function postAppMessage(msg, origin) {
    if (window.webkit != undefined) {
        if (window.webkit.messageHandlers.parent != undefined) {
            window.webkit.messageHandlers.parent.postMessage(msg, origin);
        }
        else{
            parent.postMessage(msg, origin);
        }
    }
    else if (window.parent != undefined) {
        window.parent.postMessage(msg, origin);
    }
    else{
        parent.postMessage(msg, origin);
    }
}
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        var customer_account_id = document.body.getAttribute('data-id');
        var product_offer_id = document.body.getAttribute('data-product-offer-id');
        var campaign = document.head.getElementsByTagName('title')[0].text;
        loaded_message = {
            "event": "loaded",
            "customer_account_id": customer_account_id,
            "product_offer_ids": [product_offer_id],
            "utm":{
                    "source":"bigdata-banner-telecomkz",
                    "medium": "display",
                    "campaign": campaign
            }
        }
        ym(68971321,'reachGoal','banner_loaded');
        postAppMessage(JSON.stringify(loaded_message), "*");
        var imgs = document.querySelectorAll("img")
        for (i = 0; i < imgs.length; i++) {
          imgs[i].addEventListener('click', function() {
            clicked_message = {
                "event": "clicked",
                "customer_account_id": customer_account_id,
                "product_offer_id": product_offer_id,
                "utm":
                    {
                        "source":"bigdata-banner-telecomkz",
                        "medium": "display",
                        "campaign": campaign
                    }
            }
            postAppMessage(JSON.stringify(clicked_message), "*");
            ym(68971321,'reachGoal','banner_clicked');
          });
        }
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