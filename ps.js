function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function postAppMessage(msg, origin) {
    parent.postMessage(msg, origin);
    if (window.webkit != undefined) {
        if (window.webkit.messageHandlers.parent != undefined) {
            window.webkit.messageHandlers.parent.postMessage(msg, origin);
        }
    }
}
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        var url = window.location.href;
        if (url.includes("mas-dev")){
            var meta = document.createElement('meta');
            meta.httpEquiv = "refresh";
            meta.content = "60";
            document.getElementsByTagName('head')[0].appendChild(meta);
        }
        var is_mobile_app = false;
        if (url.includes("mobile-app")){
            is_mobile_app = true;
        }
        var customer_account_id = document.body.getAttribute('data-id');
        var link = document.body.getAttribute('data-link')
        var campaign = document.head.getElementsByTagName('title')[0].text;
        loaded_message = {
            "banner_type": "PS",
            "event": "loaded",
            "customer_account_id": customer_account_id,
            "product_offer_ids": [],
            "utm":{
                    "source":"ps-banner-telecomkz",
                    "medium": "display",
                    "campaign": campaign
            }
        }
        var yaParams = {
            'advert_name': campaign,
            'banner_type': "PS",
        }
        ym(68971321,'params', yaParams);
        ym(68971321,'reachGoal','banner_loaded', yaParams);
        postAppMessage(JSON.stringify(loaded_message), "*");
        var links = document.querySelectorAll("a")
        for (i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function(e) {
                if (is_mobile_app){
                    e.preventDefault(); 
                    e.stopPropagation();
                }
                clicked_message = {
                    "banner_type": "PS",
                    "event": "link",
                    "customer_account_id": customer_account_id,
                    "link": links[i].href,
                    "utm":
                        {
                            "source":"bigdata-banner-telecomkz",
                            "medium": "display",
                            "campaign": campaign
                        }
                }
                var cparams = {
                    'advert_name': campaign,
                    'banner_type': "PS",
                }
                postAppMessage(JSON.stringify(clicked_message), "*");
                ym(68971321,'reachGoal','banner_clicked', cparams);
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