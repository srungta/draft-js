/*! For license information please see 0520cc89.25d415cc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(181),n(180)),l={id:"api-reference-modifier",title:"Modifier"},c={id:"api-reference-modifier",title:"Modifier",description:"The Modifier module is a static set of utility functions that encapsulate common",source:"@site/../docs/APIReference-Modifier.md",permalink:"/docs/api-reference-modifier",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-Modifier.md",lastUpdatedBy:"Kevin Chavez",lastUpdatedAt:1590016312,sidebar:"docs",previous:{title:"KeyBindingUtil",permalink:"/docs/api-reference-key-binding-util"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Static Methods",id:"static-methods",children:[{value:"<code>replaceText()</code>",id:"replacetext",children:[]},{value:"<code>insertText()</code>",id:"inserttext",children:[]},{value:"<code>moveText()</code>",id:"movetext",children:[]},{value:"<code>replaceWithFragment()</code>",id:"replacewithfragment",children:[]},{value:"<code>removeRange()</code>",id:"removerange",children:[]},{value:"<code>splitBlock()</code>",id:"splitblock",children:[]},{value:"<code>applyInlineStyle()</code>",id:"applyinlinestyle",children:[]},{value:"<code>removeInlineStyle()</code>",id:"removeinlinestyle",children:[]},{value:"<code>setBlockType()</code>",id:"setblocktype",children:[]},{value:"<code>setBlockData()</code>",id:"setblockdata",children:[]},{value:"<code>mergeBlockData()</code>",id:"mergeblockdata",children:[]},{value:"<code>applyEntity()</code>",id:"applyentity",children:[]}]}],u={rightToc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Modifier")," module is a static set of utility functions that encapsulate common\nedit operations on ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," objects. It is highly recommended that you use\nthese methods for edit operations."),Object(a.b)("p",null,"These methods also take care of removing or modifying entity ranges appropriately,\ngiven the mutability types of any affected entities."),Object(a.b)("p",null,"In each case, these methods accept ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," objects with relevant\nparameters and return ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," objects. The returned ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState"),"\nwill be the same as the input object if no edit was actually performed."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Methods")),Object(a.b)("ul",{class:"apiIndex"},Object(a.b)("li",null,Object(a.b)("a",{href:"#replacetext"},Object(a.b)("pre",null,"replaceText(...): ContentState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#inserttext"},Object(a.b)("pre",null,"insertText(...): ContentState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#movetext"},Object(a.b)("pre",null,"moveText(...): ContentState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#replacewithfragment"},Object(a.b)("pre",null,"replaceWithFragment(...): ContentState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#removerange"},Object(a.b)("pre",null,"removeRange(...): ContentState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#splitblock"},Object(a.b)("pre",null,"splitBlock(...): ContentState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#applyinlinestyle"},Object(a.b)("pre",null,"applyInlineStyle(...): ContentState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#removeinlinestyle"},Object(a.b)("pre",null,"removeInlineStyle(...): ContentState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#setblocktype"},Object(a.b)("pre",null,"setBlockType(...): ContentState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#setblockdata"},Object(a.b)("pre",null,"setBlockData(...): ContentState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#mergeblockdata"},Object(a.b)("pre",null,"mergeBlockData(...): ContentState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#applyentity"},Object(a.b)("pre",null,"applyEntity(...): ContentState")))),Object(a.b)("h2",{id:"static-methods"},"Static Methods"),Object(a.b)("h3",{id:"replacetext"},Object(a.b)("inlineCode",{parentName:"h3"},"replaceText()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"replaceText(\n  contentState: ContentState,\n  rangeToReplace: SelectionState,\n  text: string,\n  inlineStyle?: DraftInlineStyle,\n  entityKey?: ?string\n): ContentState\n")),Object(a.b)("p",null,"Replaces the specified range of this ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," with the supplied string,\nwith the inline style and entity key applied to the entire inserted string."),Object(a.b)("p",null,"Example: On Facebook, when replacing ",Object(a.b)("inlineCode",{parentName:"p"},"@abraham lincoln")," with a mention of\nAbraham Lincoln, the entire old range is the target to replace and the mention\nentity should be applied to the inserted string."),Object(a.b)("h3",{id:"inserttext"},Object(a.b)("inlineCode",{parentName:"h3"},"insertText()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"insertText(\n  contentState: ContentState,\n  targetRange: SelectionState,\n  text: string,\n  inlineStyle?: DraftInlineStyle,\n  entityKey?: ?string\n): ContentState\n")),Object(a.b)("p",null,"Identical to ",Object(a.b)("inlineCode",{parentName:"p"},"replaceText"),", but enforces that the target range is collapsed\nso that no characters are replaced. This is only for convenience, since text\nedits are so often insertions rather than replacements."),Object(a.b)("h3",{id:"movetext"},Object(a.b)("inlineCode",{parentName:"h3"},"moveText()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"moveText(\n  contentState: ContentState,\n  removalRange: SelectionState,\n  targetRange: SelectionState\n): ContentState\n")),Object(a.b)("p",null,'Moves the "removal" range to the "target" range, replacing the target text.'),Object(a.b)("h3",{id:"replacewithfragment"},Object(a.b)("inlineCode",{parentName:"h3"},"replaceWithFragment()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"replaceWithFragment(\n  contentState: ContentState,\n  targetRange: SelectionState,\n  fragment: BlockMap\n): ContentState\n")),Object(a.b)("p",null,'A "fragment" is a section of a block map, effectively only an\n',Object(a.b)("inlineCode",{parentName:"p"},"OrderedMap<string, ContentBlock>")," much the same as the full block map of a\n",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," object."),Object(a.b)("p",null,'This method will replace the "target" range with the fragment.'),Object(a.b)("p",null,"Example: When pasting content, we convert the paste into a fragment to be inserted\ninto the editor, then use this method to add it."),Object(a.b)("h3",{id:"removerange"},Object(a.b)("inlineCode",{parentName:"h3"},"removeRange()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"removeRange(\n  contentState: ContentState,\n  rangeToRemove: SelectionState,\n  removalDirection: DraftRemovalDirection\n): ContentState\n")),Object(a.b)("p",null,"Remove an entire range of text from the editor. The removal direction is important\nfor proper entity deletion behavior."),Object(a.b)("h3",{id:"splitblock"},Object(a.b)("inlineCode",{parentName:"h3"},"splitBlock()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"splitBlock(\n  contentState: ContentState,\n  selectionState: SelectionState\n): ContentState\n")),Object(a.b)("p",null,"Split the selected block into two blocks. This should only be used if the\nselection is collapsed."),Object(a.b)("h3",{id:"applyinlinestyle"},Object(a.b)("inlineCode",{parentName:"h3"},"applyInlineStyle()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"applyInlineStyle(\n  contentState: ContentState,\n  selectionState: SelectionState,\n  inlineStyle: string\n): ContentState\n")),Object(a.b)("p",null,"Apply the specified inline style to the entire selected range."),Object(a.b)("h3",{id:"removeinlinestyle"},Object(a.b)("inlineCode",{parentName:"h3"},"removeInlineStyle()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"removeInlineStyle(\n  contentState: ContentState,\n  selectionState: SelectionState,\n  inlineStyle: string\n): ContentState\n")),Object(a.b)("p",null,"Remove the specified inline style from the entire selected range."),Object(a.b)("h3",{id:"setblocktype"},Object(a.b)("inlineCode",{parentName:"h3"},"setBlockType()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"setBlockType(\n  contentState: ContentState,\n  selectionState: SelectionState,\n  blockType: DraftBlockType\n): ContentState\n")),Object(a.b)("p",null,"Set the block type for all selected blocks."),Object(a.b)("h3",{id:"setblockdata"},Object(a.b)("inlineCode",{parentName:"h3"},"setBlockData()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"setBlockData(\n  contentState: ContentState,\n  selectionState: SelectionState,\n  blockData: Map<any, any>\n): ContentState\n")),Object(a.b)("p",null,"Set the block data for all selected blocks."),Object(a.b)("h3",{id:"mergeblockdata"},Object(a.b)("inlineCode",{parentName:"h3"},"mergeBlockData()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"mergeBlockData(\n  contentState: ContentState,\n  selectionState: SelectionState,\n  blockData: Map<any, any>\n): ContentState\n")),Object(a.b)("p",null,"Update block data for all selected blocks."),Object(a.b)("h3",{id:"applyentity"},Object(a.b)("inlineCode",{parentName:"h3"},"applyEntity()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"applyEntity(\n  contentState: ContentState,\n  selectionState: SelectionState,\n  entityKey: ?string\n): ContentState\n")),Object(a.b)("p",null,"Apply an entity to the entire selected range, or remove all entities from the range if ",Object(a.b)("inlineCode",{parentName:"p"},"entityKey")," is ",Object(a.b)("inlineCode",{parentName:"p"},"null"),"."))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(n),f=r,d=b["".concat(l,".").concat(f)]||b[f]||s[f]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,b=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}function S(){}function v(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=g.prototype;var C=v.prototype=new S;C.constructor=v,r(C,g.prototype),C.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},l=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)w.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var u=Array(i),p=0;p<i;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:l,ref:c,props:o,_owner:k.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,R=[];function P(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function D(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var i=!1;if(null===t)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case a:case l:i=!0}}if(i)return r(o,t,""===n?"."+I(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var p=n+I(c=t[u],u);i+=e(c,p,r,o)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=y&&t[y]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),u=0;!(c=t.next()).done;)i+=e(c=c.value,p=n+I(c,u++),r,o);else if("object"===c)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return i}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function B(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function $(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),D(e,M,t=P(t,a,r,o)),_(t)}var A={current:null};function U(){var e=A.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return $(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,B,t=P(null,null,t,n)),_(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return $(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw Error(h(143));return e}},t.Component=g,t.Fragment=c,t.Profiler=u,t.PureComponent=v,t.StrictMode=i,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),l=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=k.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)w.call(t,p)&&!x.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=n;else if(1<p){u=Array(p);for(var b=0;b<p;b++)u[b]=arguments[b+2];o.children=u}return{$$typeof:a,type:e.type,key:l,ref:c,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:b,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,i=l(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))o.call(n,p)&&(i[p]=n[p]);if(r){c=r(n);for(var b=0;b<c.length;b++)a.call(n,c[b])&&(i[c[b]]=n[c[b]])}}return i}}}]);