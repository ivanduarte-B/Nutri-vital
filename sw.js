if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const o=e=>i(e,a),d={module:{uri:a},exports:n,require:o};s[a]=Promise.all(c.map((e=>d[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox-926a8ce9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/animate.min.css",revision:"a332e9019e2a787d926d9fa1abaeb9d4"},{url:"css/bootstrap.min.css",revision:"fee68c0f2f583161134a1fcb5950501d"},{url:"css/jquery-ui.css",revision:"c4a88ec0cb998929a670c0c58d7dc526"},{url:"css/jquery.mCustomScrollbar.min.css",revision:"f59e3f4c0087b4d8ddc27bdd9c9ab92b"},{url:"css/meanmenu.css",revision:"d315d517456adf639c68005809dab07d"},{url:"css/nice-select.css",revision:"7641aec4b8c405f570860925f7f64580"},{url:"css/normalize.css",revision:"8d9d541cc4c37ce152038f142628e199"},{url:"css/owl.carousel.min.css",revision:"351b4e5f569a83790bed10824208390d"},{url:"css/responsive.css",revision:"b839f441934a238127497c55e38a8fee"},{url:"css/slick.css",revision:"f46bd015743c36e5514de87e0c1b40e5"},{url:"css/style.css",revision:"9eef80167dd22098b98735095f42952d"},{url:"css/styleIMC.css",revision:"348e1a2655f3a4a28092c791efca2f87"},{url:"icon/icon_b.png",revision:"df032941ca012ff4c6cb7f7291511ed6"},{url:"images/about.jpg",revision:"6e4e3eb9a272022250cc3b2158569f1c"},{url:"images/aguac.png",revision:"10047da9f87f642b32d834e839634ea3"},{url:"images/artur-rutkowski-GdTLaWamFHw-unsplash.jpg",revision:"02c0acecbcf06eac3934f31930982c22"},{url:"images/banner2.png",revision:"e5bcd1bd735c913c9dce49111df9da8c"},{url:"images/crros.png",revision:"2248717864c7892edba3262d75069c51"},{url:"images/diana-polekhina-ZSpkUThb7qk-unsplash.jpg",revision:"64b6c6b0977aa8eb790da6636190b02e"},{url:"images/img2.png",revision:"15767cf17f70020a92198be14142ccc2"},{url:"images/loading.gif",revision:"556e9ff845b7dd0c62dcdbbb00babb4b"},{url:"images/logggo.PNG",revision:"c6f38976a37782815dafceb753efe8e7"},{url:"images/logo.png",revision:"d8ed966733e3a9f3883f7558775a1bb2"},{url:"images/logo2.png",revision:"951a92f386046551248cdcb9d29a8d88"},{url:"images/margarita-zueva-CY-OkOICA9o-unsplash.jpg",revision:"5da549ae442565ed2acae63e38716835"},{url:"images/ovidiu-creanga-iNWjJJXeym4-unsplash.jpg",revision:"55c53a26b583468e86e51023ab7577a4"},{url:"images/siora-photography-cixohzDpNIo-unsplash.jpg",revision:"c01120c428d0d0578f85fc06d70d294a"},{url:"images/tes.jpg",revision:"65b62a7f6ebe17274fbfd132b7039c3a"},{url:"images/test_con.png",revision:"fa856906c763a2b26e2afa1782c82935"},{url:"images/test.png",revision:"32280ae3fe5d631e256622996cd29320"},{url:"images/v1.jpg",revision:"747e88baf3dd317b0b82e2fc90663cd3"},{url:"images/v2.jpg",revision:"7c68f9a333078203cc5d7c5e0a90762b"},{url:"images/vege.png",revision:"879f1675918d25e1a033f08498ee456e"},{url:"index.html",revision:"38d7e05324751c93a830fde1852ebf8f"},{url:"js/bootstrap.bundle.min.js",revision:"62e633210885066c625c46081cc2b339"},{url:"js/custom.js",revision:"e0c94f93847950a4a8701648f12baab4"},{url:"js/jquery-3.0.0.min.js",revision:"68c83ed206a2b972d61a89dfb6d250d0"},{url:"js/jquery.mCustomScrollbar.concat.min.js",revision:"42a368e95b4a38989c8984c672d29ec0"},{url:"js/jquery.min.js",revision:"cbde2a48700724f03cee8c63d5911fbb"},{url:"js/jquery.validate.js",revision:"ed399222edd6d6afc491bc82ac5e5051"},{url:"js/plugin.js",revision:"776e9e7a11240b3a846c7e60f6fe9ba3"},{url:"js/popper.min.js",revision:"ccc533cf501d3f124323b95318c6bbb8"},{url:"js/ScriptCalorias.js",revision:"c5b9a00158c67884bcf61fc93a775e73"},{url:"logoNutri.PNG",revision:"60d0bd83ab8794a2a47e00d0b7da18b6"},{url:"manifest.json",revision:"8a599276e0e0ed3ff500c8977365f177"},{url:"pagIMC.html",revision:"2c37d70111efb21f35ee0f3e6cb455c1"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
