/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-afac4cd2'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "pwa-maskable-512x512.png",
    "revision": "2ebe18f6268331a2b438d5c87c2e1414"
  }, {
    "url": "pwa-512x512.png",
    "revision": "b659eb078586004dfe1fce45b0452e4b"
  }, {
    "url": "pwa-192x192.png",
    "revision": "f090b15c424898fb8822a8711a8fd9f3"
  }, {
    "url": "index.html",
    "revision": "3391cfcbeaf02980939c852c21561f40"
  }, {
    "url": "icon.svg",
    "revision": "ca8ae414bd8dce54a23fa0d1cbf2b1b2"
  }, {
    "url": "icon-maskable.svg",
    "revision": "a0aac9acdd861ef308a362081ffb2fd0"
  }, {
    "url": "favicon.png",
    "revision": "8d936dff987dd4fddec90e6fca52d36f"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "522290228eab52de561eff44f2835fe9"
  }, {
    "url": "logos/wydad.svg",
    "revision": "98c8b98d082f7ac62114944c89f77933"
  }, {
    "url": "logos/wolves.svg",
    "revision": "b8be0ef6d127754b49ceb3286ffaae47"
  }, {
    "url": "logos/west-ham.svg",
    "revision": "718c4e298bfd4545334123f4de3d1975"
  }, {
    "url": "logos/werder-bremen.png",
    "revision": "816c2257817b87ffe9c5d6a073299662"
  }, {
    "url": "logos/watford.svg",
    "revision": "6c497f2480a42f53ffb07bf2b41f06b2"
  }, {
    "url": "logos/vitoria-guimaraes.svg",
    "revision": "28f01463e9cc84c668afe959888d5b23"
  }, {
    "url": "logos/vitesse.svg",
    "revision": "3b99a0e208041b350d91e02b2155719b"
  }, {
    "url": "logos/villarreal.png",
    "revision": "0aef5f34a4de62872d404f4581701eb0"
  }, {
    "url": "logos/valencia.png",
    "revision": "e72743e56fa94a736ca5addeb061cdd8"
  }, {
    "url": "logos/tottenham.png",
    "revision": "aa8da970e44f95398ed4375f281e9b67"
  }, {
    "url": "logos/stromsgodset.svg",
    "revision": "338be1c0e762c6f70f783d5b65206341"
  }, {
    "url": "logos/sporting-cp.png",
    "revision": "44732a1f97ba0ef0677e858529c20463"
  }, {
    "url": "logos/southampton.svg",
    "revision": "3d7aa16cd551829e0def734dd941eaac"
  }, {
    "url": "logos/sevilla.png",
    "revision": "ae99eacd78ef6e76579afbf075373bf2"
  }, {
    "url": "logos/schalke.png",
    "revision": "83aa3cda488ed92716373093aa8e9073"
  }, {
    "url": "logos/santos.svg",
    "revision": "9ff151f38478128a33ae3c0abb2523a1"
  }, {
    "url": "logos/rubin-kazan.svg",
    "revision": "2537ebfa465d2e53c2bf1d7172f3b701"
  }, {
    "url": "logos/rostavi.svg",
    "revision": "15e5995ecd60fcbe8c76cc270467fc7b"
  }, {
    "url": "logos/roma.png",
    "revision": "fbc56931f21038e076b1f0fa332b03dd"
  }, {
    "url": "logos/river-plate.svg",
    "revision": "5d0e0691851e52310843bffe1c933550"
  }, {
    "url": "logos/rennes.svg",
    "revision": "7b1dbdd750d67f72d77e0dd036ac106e"
  }, {
    "url": "logos/real-sociedad.png",
    "revision": "cc43194a3ea09f7580dc3e5fcbc8a25e"
  }, {
    "url": "logos/real-madrid.png",
    "revision": "8f9df2237cbe36cb55c443aae58413fe"
  }, {
    "url": "logos/reading.svg",
    "revision": "b81e5ab179c622636475c26a4d2a5056"
  }, {
    "url": "logos/racing-club.svg",
    "revision": "b2c59920dce8d4a3a1f993ab5ac52a89"
  }, {
    "url": "logos/psv.png",
    "revision": "5bebbb2df08c39bf110ab6f857aba8ad"
  }, {
    "url": "logos/porto.png",
    "revision": "8f086f7556458077a9c24d42b2a09947"
  }, {
    "url": "logos/paris-saint-germain.png",
    "revision": "3bec567fb8b6d743fc110b224e0b6b16"
  }, {
    "url": "logos/newcastle.png",
    "revision": "1f66b1c7bd696554aae5f59b7de4743b"
  }, {
    "url": "logos/napoli.png",
    "revision": "fd77b6f39a7d55b1805934b044956f70"
  }, {
    "url": "logos/monaco.png",
    "revision": "b13536f476367c3074d09e9e271f35f9"
  }, {
    "url": "logos/marseille.png",
    "revision": "cd9fd26201606d861a5d8eddcde813e6"
  }, {
    "url": "logos/manchester-united.png",
    "revision": "3a471eb15e22961bcb8a576b08574fd0"
  }, {
    "url": "logos/manchester-city.png",
    "revision": "afd6827a20de791ac0c0012ed289ae53"
  }, {
    "url": "logos/lyon.png",
    "revision": "8567f9f737b6434b92616fc3b9d98cba"
  }, {
    "url": "logos/liverpool.png",
    "revision": "78a308b77c8d7a2ded8c292dcfc87263"
  }, {
    "url": "logos/lille.png",
    "revision": "d69c8ddf5b914cd53c4963427d4edf03"
  }, {
    "url": "logos/leicester-city.svg",
    "revision": "2af9dccd53051fbd2343182bbe979df2"
  }, {
    "url": "logos/leeds.svg",
    "revision": "a92b0456f732ccc65a47ccc7cb964b2a"
  }, {
    "url": "logos/lazio.png",
    "revision": "74013389334d3cd45e7997c16a21abab"
  }, {
    "url": "logos/las-palmas.svg",
    "revision": "1b7e8d05dc22fd17bec5548af46c3a02"
  }, {
    "url": "logos/koln.svg",
    "revision": "ed07ce42e8a0b410d4a8f8d1ef6cadf7"
  }, {
    "url": "logos/juventus.png",
    "revision": "5f3dd64eed113d91f861e065d85f4c09"
  }, {
    "url": "logos/inter-milan.png",
    "revision": "ef7903514411ef536883ccfd9133818b"
  }, {
    "url": "logos/inter-miami.svg",
    "revision": "3e0e122fa74950aa51e34ed9faf51753"
  }, {
    "url": "logos/heerenveen.svg",
    "revision": "822a761bfebf3f0338913c0bd367c114"
  }, {
    "url": "logos/girona.svg",
    "revision": "132967ba83d4a644e7717a9c9e402c33"
  }, {
    "url": "logos/genk.svg",
    "revision": "998f9b07114626f7510604500a76dec8"
  }, {
    "url": "logos/galatasaray.svg",
    "revision": "f8eb630f21b7ee8e824b3ff947de3f7b"
  }, {
    "url": "logos/fluminense.svg",
    "revision": "02ca8626bf9957495c94af0b1bfd7087"
  }, {
    "url": "logos/flamengo.svg",
    "revision": "b909ea4155f77482559da98e92fe697c"
  }, {
    "url": "logos/fiorentina.png",
    "revision": "2ff16562c033ba92409db3b303f844bf"
  }, {
    "url": "logos/feyenoord.png",
    "revision": "aeb1df8ea4ae2497cfdcfa8a8b620534"
  }, {
    "url": "logos/fenerbahce.svg",
    "revision": "e31cf82fc771fde04dc79452a8baff57"
  }, {
    "url": "logos/everton.png",
    "revision": "d9c9cc1b86d1e801620ed4135c05c1c7"
  }, {
    "url": "logos/dinamo-zagreb.png",
    "revision": "8f6ca961a42b55cf51809ab3f153121c"
  }, {
    "url": "logos/dinamo-tbilisi.svg",
    "revision": "c6e120a660767f5872bc2ff1bec45c53"
  }, {
    "url": "logos/dinamo-batumi.svg",
    "revision": "3dd1eefc76613a1dbccc252d5a6c5405"
  }, {
    "url": "logos/crystal-palace.svg",
    "revision": "967556d6bddbb38ae007816bca6f148b"
  }, {
    "url": "logos/chelsea.png",
    "revision": "ad07e9f8c254b79ce78c892d3ec0bf88"
  }, {
    "url": "logos/celtic.svg",
    "revision": "f7fe75e714c00acdc2d3fcce7ed748d8"
  }, {
    "url": "logos/brighton.svg",
    "revision": "4d14a95c8510c6236821ebc2ad7a67e6"
  }, {
    "url": "logos/borussia-dortmund.png",
    "revision": "0e9c38252dc8ae43f21a1ed2d6012a8f"
  }, {
    "url": "logos/bordeaux.svg",
    "revision": "c8734875bd7bad2d82f1eb5a9545343e"
  }, {
    "url": "logos/boca-juniors.svg",
    "revision": "5bd942751af7900c862c55b23000b21f"
  }, {
    "url": "logos/birmingham.svg",
    "revision": "a492d0f188574078446bef902307398e"
  }, {
    "url": "logos/benfica.png",
    "revision": "5dd7e21e72578c1cb6d0caef2ec15739"
  }, {
    "url": "logos/bayern-munich.png",
    "revision": "3abc8b660b0fe803734a8c4708c6f4d7"
  }, {
    "url": "logos/bayer-leverkusen.png",
    "revision": "5c5b85f2c74d2e814dbde453853d9764"
  }, {
    "url": "logos/basel.png",
    "revision": "4ef3783c1cb1dfe7b70b33a697703ec4"
  }, {
    "url": "logos/barcelona.png",
    "revision": "f50132ccce979366daa97ec7f2450bfe"
  }, {
    "url": "logos/avai.svg",
    "revision": "0ff04f6f1bc6ff9f6aab6be9ed6cd3e9"
  }, {
    "url": "logos/atletico-madrid.png",
    "revision": "0e14e8ca9ff8fbb77aca0a645896621f"
  }, {
    "url": "logos/athletic-bilbao.svg",
    "revision": "a5a6f93c38f125bca9d4455d68382a02"
  }, {
    "url": "logos/aston-villa.png",
    "revision": "f203cdb42a1456e79a15327c4c5d3e5a"
  }, {
    "url": "logos/arsenal.png",
    "revision": "af90e14273f7a1b48e300a8fdaf01a0a"
  }, {
    "url": "logos/alaves.svg",
    "revision": "672d3346cdbaed71b9a24e1fc60681c5"
  }, {
    "url": "logos/al-nassr.svg",
    "revision": "029820c4df5a219a639a4da75f10a9b6"
  }, {
    "url": "logos/al-ittihad.svg",
    "revision": "4d1603b3a69d6f7f8a28d1c512b91757"
  }, {
    "url": "logos/al-hilal.svg",
    "revision": "66a17f348e38289729ab6a839b8bcb72"
  }, {
    "url": "logos/al-ahly.svg",
    "revision": "ee1fd87371538378f5703a622e3607c8"
  }, {
    "url": "logos/ajax.png",
    "revision": "6318ae7d5cd4de0f083d769edc7870f7"
  }, {
    "url": "logos/aik.svg",
    "revision": "a0197457aea550450af4a2b65081a3dd"
  }, {
    "url": "logos/ac-milan.png",
    "revision": "dffabe809a2c0baead68dc0aa7c0b890"
  }, {
    "url": "assets/workbox-window.prod.es5-Bd17z0YL.js",
    "revision": null
  }, {
    "url": "assets/index-D2IJJyjt.js",
    "revision": null
  }, {
    "url": "assets/index-CNioktQf.css",
    "revision": null
  }, {
    "url": "apple-touch-icon.png",
    "revision": "522290228eab52de561eff44f2835fe9"
  }, {
    "url": "favicon.png",
    "revision": "8d936dff987dd4fddec90e6fca52d36f"
  }, {
    "url": "icon-maskable.svg",
    "revision": "a0aac9acdd861ef308a362081ffb2fd0"
  }, {
    "url": "icon.svg",
    "revision": "ca8ae414bd8dce54a23fa0d1cbf2b1b2"
  }, {
    "url": "pwa-192x192.png",
    "revision": "f090b15c424898fb8822a8711a8fd9f3"
  }, {
    "url": "pwa-512x512.png",
    "revision": "b659eb078586004dfe1fce45b0452e4b"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "2ebe18f6268331a2b438d5c87c2e1414"
  }, {
    "url": "manifest.webmanifest",
    "revision": "338e21785c4f6b88da170730ec6317c8"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "gstatic-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
