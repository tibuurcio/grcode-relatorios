// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3sN7K":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0cf78e626b815632";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"kuM8f":[function(require,module,exports,__globalThis) {
// https://grdesportiva.bubbleapps.io/version-test/api/1.1/meta/swagger.json
$(document).ready(function() {
    const ColunaLabels = {
        index: "#",
        nome: "Nome",
        clube: "Clube",
        classe: "Classe",
        categoria_ordem: "Ordem Categoria",
        categoria_descricao: "Categoria Descricao",
        categoria_nome: "Categoria Nome",
        categoria_nivel_group: "Categoria Nivel",
        aparelho: "Aparelho",
        estagio: "Estagio",
        nota_da1: "Nota Da1",
        nota_db1: "Nota Db1",
        nota_tot_dbda: "Dbda",
        nota_tot_exe: "Exe",
        nota_tot_art: "Art",
        nota_tot_ded: "Ded",
        nota_final: "Nota"
    };
    const AparelhoLabels = {
        ARCO: "Arco",
        BOLA: "Bola",
        "MA\xc7AS": "Ma\xe7as",
        FITA: "Fita",
        "MAOS LIVRES": "M\xe3os Livres",
        CORDA: "Corda"
    };
    const selectRelatorio = document.querySelector("#select_relatorio");
    const selectClasse = document.querySelector("#select_classe");
    const selectCategoria = document.querySelector("#select_categoria");
    const selectNivel = document.querySelector("#select_nivel");
    const tabelaRelatorio = document.querySelector("#grcode_relatorios_table");
    // const baseUrl = 'Website home URL';
    const baseUrl = "https://codegr.com.br";
    // const slug = 'Get path from page URL';
    const slug = "2024-regional-nordeste-vts";
    let dadosProcessados;
    let categoriaAtual;
    fetch(`${baseUrl}/api/1.1/wf/resultados-individual?slug=${slug}`).then((response)=>response.json()).then((response)=>{
        // TODO loading
        selectRelatorio.disabled = false;
        dadosProcessados = processarDados(response.data);
        console.log(dadosProcessados);
    }).catch(console.error);
    selectRelatorio.addEventListener("change", function(event) {
        console.log("Select Relat\xf3rio:", event.target.value);
        if (!event.target.value) {
            limparSelects();
            return;
        }
        if (!dadosProcessados) return;
        const relatorio = event.target.value;
        if (relatorio === "GERAL") selectNivel.parentElement.classList.remove("d-none");
        else if (relatorio === "POR_APARELHO") selectNivel.parentElement.classList.add("d-none");
        const classes = Object.keys(relatorio === "GERAL" ? dadosProcessados.groupedByCategoriaNivel : dadosProcessados.groupedByCategoriaDescricao);
        selectClasse.innerHTML = mapToOptions(classes, "Escolha sua classe");
        selectClasse.addEventListener("change", selectClasseEventListener);
        selectCategoria.addEventListener("change", selectCategoriaEventListener);
        return;
    });
    /** Handle async data */ /**
   * @typedef {'CONJUNTO' | 'DUPLA' | 'INDIVIDUAL' | 'TRIO'} Classe
   *
   * @typedef {Object} Data
   * @property {string} nome
   * @property {string} clube
   * @property {string} nome
   * @property {string} clube
   * @property {Classe} classe
   * @property {string} categoria_ordem
   * @property {string} categoria_descricao
   * @property {string} categoria_nome
   * @property {string} categoria_nivel_group
   * @property {string} categoria_nivel
   * @property {string} aparelho
   * @property {'FINAL' | 'CLASSIFICATÓRIA'} estagio
   * @property {number} nota_da1
   * @property {number} nota_db1
   * @property {number} nota_tot_dbda
   * @property {number} nota_tot_exe
   * @property {number} nota_tot_art
   * @property {number} nota_tot_ded
   * @property {number} nota_final
   *
   * @param {Data[]} data
   *
   * @typeof {Object} ReturnData
   * @property {Data[]} data
   * @property {Object.<Classe, Object.<string, Data[]>>} groupedByCategoriaNivel
   *
   * @return {ReturnData} dadosProcessados
   */ function processarDados(data) {
        data.forEach((row)=>{
            row.categoria_ordem = Number(row.categoria_ordem);
            row.categoria_nivel = Number(row.categoria_nivel);
        });
        const groupedByClasse = groupByKey(data, "classe");
        const groupedByCategoria = twoLevels(groupedByClasse, "categoria_nome");
        const groupedByCategoriaNivel = Object.keys(groupedByCategoria).reduce((acc, currGroup)=>{
            acc[currGroup] = twoLevels(groupedByCategoria[currGroup], "categoria_nivel");
            return acc;
        }, {});
        const groupedByCategoriaDescricao = twoLevels(groupedByClasse, "categoria_descricao");
        const ordemCategoriasPorAparelho = {};
        data.forEach((data)=>{
            if (!ordemCategoriasPorAparelho[data.categoria_descricao]) ordemCategoriasPorAparelho[data.categoria_descricao] = data.categoria_ordem;
        });
        return {
            data,
            groupedByCategoriaNivel,
            groupedByCategoriaDescricao,
            ordemCategoriasPorAparelho
        };
    }
    function limparTabela() {
        // check if table is already a DataTable instance
        if ($.fn.DataTable.isDataTable("#grcode_relatorios_table")) {
            $("#grcode_relatorios_table").DataTable().destroy();
            $("#grcode_relatorios_table thead tr").empty();
            $("#grcode_relatorios_table tbody").empty();
        }
    }
    function setTableGeral() {
        const classe = selectClasse.value;
        const categoria = selectCategoria.value;
        const nivel = selectNivel.value;
        if (!classe || !categoria || !nivel) return;
        const data = dadosProcessados.groupedByCategoriaNivel[classe][categoria][nivel];
        const aparelhos = new Set(data.map((row)=>row.aparelho));
        const processedData = Object.keys(groupByKey(data, "nome")).map((nome)=>{
            const rows = groupByKey(data, "nome")[nome];
            const nota_total = rows.reduce((acc, row)=>acc + row.nota_final, 0);
            return {
                nome,
                clube: rows[0].clube,
                classe: rows[0].classe,
                aparelhos: rows.map((row)=>({
                        aparelho: row.aparelho,
                        nota_tot_dbda: row.nota_tot_dbda,
                        nota_tot_art: row.nota_tot_art,
                        nota_tot_exe: row.nota_tot_exe,
                        nota_tot_ded: row.nota_tot_ded,
                        nota_final: row.nota_final
                    })),
                nota_total
            };
        });
        console.log({
            data,
            rows: groupByKey(data, "nome"),
            processedData
        });
        // TODO Adicionar imagem dos aparelhos?
        const tableHeader1 = tabelaRelatorio.querySelector("thead");
        const colunas = [
            "index",
            "nome",
            "clube",
            "classe",
            ...[
                aparelhos
            ].map((aparelho)=>[
                    `nota_tot_dbda_${aparelho}`,
                    `nota_tot_art_${aparelho}`,
                    `nota_tot_exe_${aparelho}`,
                    `nota_tot_ded_${aparelho}`,
                    `nota_final_${aparelho}`
                ]),
            "nota_final"
        ];
        tableHeader1.innerHTML = `
            <tr>
              <th rowspan="2" class="align-middle">#</th>
              <th rowspan="2" class="align-middle">Nome</th>
              <th rowspan="2" class="align-middle">Clube</th>
              <th rowspan="2" class="align-middle">Classe</th>
              ${[
            ...aparelhos
        ].map((aparelho)=>`<th colspan="5" data-dt-order="disable" class="text-center">${AparelhoLabels[aparelho]}</th>`).join("")}
              <th rowspan="2" class="align-middle">Nota Total</th>
            </tr>
            <tr>
              ${[
            ...aparelhos
        ].map(()=>`
                      <th data-dt-order="disable">D</th>
                      <th data-dt-order="disable">A</th>
                      <th data-dt-order="disable">E</th>
                      <th data-dt-order="disable">Ded</th>
                      <th>Tot</th>
                    `).join("")}
            </tr>
          `;
        const tbody = tabelaRelatorio.querySelector("tbody");
        // TODO: sort by aparelhos tbm, soma da execução
        processedData.sort((a, b)=>b.nota_total - a.nota_total);
        // TODO: Tratar atletas que não tem os 2 aparelhos
        processedData.forEach((data, index)=>{
            data.index = index + 1;
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${data.index}</td>
              <td>${data.nome}</td>
              <td>${data.clube}</td>
              <td>${data.classe}</td>
              ${data.aparelhos.map((aparelho)=>`
                  <td class="text-end text-nowrap">${formatNumber(aparelho.nota_tot_dbda)}</td>
                  <td class="text-end text-nowrap">${formatNumber(aparelho.nota_tot_art)}</td>
                  <td class="text-end text-nowrap">${formatNumber(aparelho.nota_tot_exe)}</td>
                  <td class="text-end text-nowrap">${formatNumber(aparelho.nota_tot_ded)}</td>
                  <td class="text-end text-nowrap">${formatNumber(aparelho.nota_final)}</td>
                `).join("")}
              <td class="text-end text-nowrap">${formatNumber(data.nota_total)}</td>
            `;
            tbody.appendChild(row);
        });
        // // check if table is already a DataTable instance
        recarregarDataTables(colunas);
    }
    function formatNumber(value) {
        return typeof value === "number" ? value.toFixed(2) : value;
    }
    function setTablePorAparelho() {
        const classe = selectClasse.value;
        const categoria = categoriaAtual;
        if (!classe || !categoria) return;
        // id, nome, clube, aparelho, nota_tot_dbda, nota_tot_art, nota_tot_exe, nota_tot_ded, nota_final
        // create columns in the table header for the columns above. Use the Colunas object to get the column names
        const colunas = [
            "index",
            "nome",
            "clube",
            "aparelho",
            "nota_tot_dbda",
            "nota_tot_art",
            "nota_tot_exe",
            "nota_tot_ded",
            "nota_final"
        ];
        const numberColumns1 = new Set([
            "nota_tot_dbda",
            "nota_tot_art",
            "nota_tot_exe",
            "nota_tot_ded",
            "nota_final"
        ]);
        colunas.forEach((coluna)=>{
            const th = document.createElement("th");
            th.textContent = ColunaLabels[coluna];
            tableHeader.appendChild(th);
        });
        const dados = dadosProcessados.groupedByCategoriaDescricao[classe][categoria];
        dados.sort(sortData);
        dados.forEach(populateData(dados, colunas));
        recarregarDataTables(colunas);
    }
    function sortData(a, b) {
        if (b.nota_final === a.nota_final) return b.nota_tot_exe - a.nota_tot_exe;
        return b.nota_final - a.nota_final;
    }
    function populateData(dados, colunas) {
        return function(data, index) {
            data.index = index + 1;
            const row = document.createElement("tr");
            colunas.forEach((coluna)=>{
                const cell = document.createElement("td");
                const cellData = data[coluna];
                if (numberColumns.has(coluna)) {
                    cell.classList.add("text-end");
                    cell.classList.add("text-nowrap");
                    cell.textContent = formatNumber(cellData);
                } else cell.textContent = cellData;
                row.appendChild(cell);
            });
            tabelaRelatorio.querySelector("tbody").appendChild(row);
        };
    }
    /** Handle async data */ function recarregarDataTables(colunas) {
        console.log("Recarregando DataTables para categoria:", categoriaAtual);
        $("#grcode_relatorios_table").DataTable({
            ordering: true,
            keys: true,
            fixedHeader: true,
            paging: false,
            order: [
                [
                    colunas.length - 1,
                    "desc"
                ]
            ],
            layout: {
                topStart: "buttons",
                topEnd: "search",
                bottomStart: "info",
                bottomEnd: "paging"
            },
            language: {
                url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json"
            },
            buttons: [
                {
                    extend: "excelHtml5",
                    text: '<i class="fas fa-file-excel"></i> ',
                    titleAttr: "Exportar a Excel",
                    autoFilter: true,
                    className: "btn btn-success",
                    exportOptions: {
                        columns: ":visible"
                    }
                },
                {
                    extend: "pdfHtml5",
                    text: '<i class="fa-solid fa-file-pdf"></i> ',
                    titleAttr: "Exportar para PDF",
                    orientation: "landscape",
                    className: "btn btn-danger",
                    exportOptions: {
                        columns: ":visible"
                    }
                },
                {
                    extend: "print",
                    text: '<i class="fa fa-print"></i> ',
                    titleAttr: "Imprimir",
                    className: "btn btn-info",
                    exportOptions: {
                        columns: ":visible"
                    }
                },
                {
                    extend: "csv",
                    text: '<i class="fa-solid fa-file-csv"></i> ',
                    titleAttr: "Exportar para CSV",
                    charset: "utf-8",
                    fieldSeparator: ";",
                    fieldBoundary: "",
                    bom: true,
                    className: "btn btn-success",
                    exportOptions: {
                        columns: ":visible",
                        stripHtml: false
                    }
                }
            ]
        });
    }
    /** Handle Selects */ function limparSelects() {
        selectRelatorio.value = "";
        selectClasse.innerHTML = selectClasse.children[0].outerHTML;
        selectCategoria.innerHTML = selectCategoria.children[0].outerHTML;
        selectNivel.innerHTML = selectNivel.children[0].outerHTML;
        selectClasse.removeEventListener(selectClasseEventListener);
        selectCategoria.removeEventListener(selectCategoriaEventListener);
        selectNivel.removeEventListener(selectNivelEventListener);
    }
    function setCategoriaOptions() {
        const relatorio = selectRelatorio.value;
        const classe = selectClasse.value;
        if (!relatorio || !classe) return;
        let categorias;
        if (relatorio === "GERAL") categorias = Object.keys(dadosProcessados.groupedByCategoriaNivel[classe]);
        else if (relatorio === "POR_APARELHO") {
            categorias = Object.keys(dadosProcessados.groupedByCategoriaDescricao[classe]);
            categorias.sort((a, b)=>{
                return dadosProcessados.ordemCategoriasPorAparelho[a] - dadosProcessados.ordemCategoriasPorAparelho[b];
            });
        }
        if (!categorias) return;
        selectCategoria.innerHTML = mapToOptions(categorias, "Escolha sua categoria");
    }
    function selectClasseEventListener(event) {
        if (!dadosProcessados) return;
        setCategoriaOptions();
    }
    function selectCategoriaEventListener(event) {
        console.log({
            categoriaAtual,
            nova: event.target.value
        });
        if (event.target.value && categoriaAtual !== event.target.value) {
            categoriaAtual = event.target.value;
            const relatorio = selectRelatorio.value;
            if (!!relatorio && relatorio === "POR_APARELHO") {
                limparTabela();
                setTablePorAparelho();
            } else if (!!relatorio && relatorio === "GERAL") {
                const niveis = Object.keys(dadosProcessados.groupedByCategoriaNivel[selectClasse.value][categoriaAtual]);
                selectNivel.innerHTML = mapToOptions(niveis, "Escolha o n\xedvel");
                selectNivel.addEventListener("change", selectNivelEventListener);
            }
        }
    }
    function selectNivelEventListener(event) {
        if (event.target.value) {
            limparTabela();
            setTableGeral();
        }
    }
});
function mapToOptions(options, defaultLabel) {
    return `<option value="">${defaultLabel}</option>${options.map((option)=>`<option value="${option}">${option}</option>`).join("")}`;
}
/**
 * @param {Data[]} array
 * @param {keyof Data} key
 * @returns {Object.<keyof Data, Data[]>}
 */ function groupByKey(array, key) {
    return array.reduce((acc, item)=>{
        if (!acc[item[key]]) acc[item[key]] = [];
        acc[item[key]].push(item);
        return acc;
    }, {});
}
function twoLevels(groupBy, key) {
    return Object.keys(groupBy).reduce((acc, currGroup)=>{
        acc[currGroup] = groupByKey(groupBy[currGroup], key);
        return acc;
    }, {});
}

},{}]},["3sN7K","kuM8f"], "kuM8f", "parcelRequire94c2")

//# sourceMappingURL=individual.6b815632.js.map
