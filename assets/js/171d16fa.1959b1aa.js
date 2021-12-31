"use strict";(self.webpackChunkbrigada_sos=self.webpackChunkbrigada_sos||[]).push([[569],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,i,t=function(e,a){if(null==e)return{};var n,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=i.createContext({}),c=function(e){var a=i.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},u=function(e){var a=c(e.components);return i.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},d=i.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=t,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(v,r(r({ref:a},u),{},{components:n})):i.createElement(v,r({ref:a},u))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9996:function(e,a,n){n.r(a),n.d(a,{contentTitle:function(){return k},default:function(){return A},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return y}});var i=n(7462),t=n(3366),o=n(7294),r=n(3905),s=n(2389),l=n(9443);var c=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3616),p=n(6010),d="tabItem_vU9c";function m(e){var a,n,t,r=e.lazy,s=e.block,l=e.defaultValue,m=e.values,v=e.groupId,f=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:g.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),k=(0,u.lx)(h,(function(e,a){return e.value===a.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===l?l:null!=(a=null!=l?l:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(t=g[0])?void 0:t.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=c(),w=y.tabGroupChoices,A=y.setTabGroupChoices,N=(0,o.useState)(b),x=N[0],z=N[1],C=[],q=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=w[v];null!=P&&P!==x&&h.some((function(e){return e.value===P}))&&z(P)}var j=function(e){var a=e.currentTarget,n=C.indexOf(a),i=h[n].value;i!==x&&(q(a),z(i),null!=v&&A(v,i))},I=function(e){var a,n=null;switch(e.key){case"ArrowRight":var i=C.indexOf(e.currentTarget)+1;n=C[i]||C[0];break;case"ArrowLeft":var t=C.indexOf(e.currentTarget)-1;n=C[t]||C[C.length-1]}null==(a=n)||a.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":s},f)},h.map((function(e){var a=e.value,n=e.label,t=e.attributes;return o.createElement("li",(0,i.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:j,onClick:j},t,{className:(0,p.Z)("tabs__item",d,null==t?void 0:t.className,{"tabs__item--active":x===a})}),null!=n?n:a)}))),r?(0,o.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,a){return(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==x})}))))}function v(e){var a=(0,s.Z)();return o.createElement(m,(0,i.Z)({key:String(a)},e))}var f=function(e){var a=e.children,n=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:i},a)},g=["components"],h={sidebar_position:2,slug:"/otras-guias/yomichan"},k=void 0,b={unversionedId:"various-guide/Yomichan",id:"various-guide/Yomichan",title:"Yomichan",description:"Sin importar la etapa en la que se encuentre o la dificultad del contenido que est\xe9 consumiendo, tarde o temprano se ver\xe1 en la obligaci\xf3n de usar un diccionario japon\xe9s. Ya sea para conocer una lectura o para entender el significado de una palabra.",source:"@site/docs/various-guide/Yomichan.mdx",sourceDirName:"various-guide",slug:"/otras-guias/yomichan",permalink:"/otras-guias/yomichan",editUrl:"https://github.com/Natsume-197/Natsume-197.github.io/tree/main/docs/various-guide/Yomichan.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/otras-guias/yomichan"},sidebar:"tutorialSidebar",previous:{title:"Anki",permalink:"/otras-guias/anki"},next:{title:"Lectura en libros electr\xf3nicos",permalink:"/otras-guias/ebook"}},y=[{value:"\xbfQu\xe9 es Yomichan?",id:"qu\xe9-es-yomichan",children:[],level:2},{value:"Instalaci\xf3n Yomichan",id:"instalaci\xf3n-yomichan",children:[],level:2},{value:"Primeros pasos",id:"primeros-pasos",children:[{value:"Diccionarios",id:"diccionarios",children:[{value:"Instalaci\xf3n Diccionarios",id:"instalaci\xf3n-diccionarios",children:[],level:4}],level:3},{value:"Configuraci\xf3n Ajustes Avanzados",id:"configuraci\xf3n-ajustes-avanzados",children:[{value:"Popup",id:"popup",children:[],level:4},{value:"Popup Appearance",id:"popup-appearance",children:[],level:4},{value:"Popup Position &amp; Size",id:"popup-position--size",children:[],level:4},{value:"Audio",id:"audio",children:[],level:4}],level:3},{value:"Demostraci\xf3n",id:"demostraci\xf3n",children:[],level:3}],level:2}],w={toc:y};function A(e){var a=e.components,o=(0,t.Z)(e,g);return(0,r.kt)("wrapper",(0,i.Z)({},w,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sin importar la etapa en la que se encuentre o la dificultad del contenido que est\xe9 consumiendo, tarde o temprano se ver\xe1 en la obligaci\xf3n de usar un diccionario japon\xe9s. Ya sea para conocer una lectura o para entender el significado de una palabra."),(0,r.kt)("h2",{id:"qu\xe9-es-yomichan"},"\xbfQu\xe9 es Yomichan?"),(0,r.kt)("p",null,"Yomichan es una extensi\xf3n de navegador que le permitir\xe1 consultar uno o varios diccionarios al tiempo para una sola palabra permitiendo que pueda ver su significado y lectura en cualquier momento. Todo desde cualquier sitio web. Yomichan cuenta tambi\xe9n con funciones extras como integraci\xf3n con Anki que le permitir\xe1 ahorrar tiempo en su aprendizaje."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ejemplo-gif",src:n(7607).Z})),(0,r.kt)("h2",{id:"instalaci\xf3n-yomichan"},"Instalaci\xf3n Yomichan"),(0,r.kt)("p",null,"Esta herramienta se encuentra disponible para cualquier navegador web basado en Chromium y Firefox. Para dispositivos m\xf3viles s\xf3lo es posible instalar Yomichan en Android a trav\xe9s de alg\xfan navegador que soporte el uso de extensiones como Kiwi Browser. Enlaces de la extensi\xf3n aqu\xed abajo para cada plataforma."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/yomichan/ogmnaimimemjmbakcfefmnahgdfhfami"},"Chromium")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/yomichan/"},"Firefox"))),(0,r.kt)("p",null,"Navegadores para dispositivos m\xf3vles compatibles con extensiones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.kiwibrowser.browser"},"Kiwi Browser")," (Android)")),(0,r.kt)("h2",{id:"primeros-pasos"},"Primeros pasos"),(0,r.kt)("h3",{id:"diccionarios"},"Diccionarios"),(0,r.kt)("p",null,"Una vez instalado Yomichan se abrir\xe1 una nueva pesta\xf1a de forma autom\xe1tica. La cerramos. Nuestro primer paso ser\xe1 instalar los diccionarios ya que, por defecto, Yomichan no cuenta con diccionarios instalados. A continuaci\xf3n podr\xe1 encontrar el link de descarga donde podr\xe1 encontrar todos los diccionarios disponibles en Yomichan para el idioma japon\xe9s:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://drive.google.com/drive/folders/1tTdLppnqMfVC5otPlX_cs4ixlIgjv_lH"},"Paquete de diccionarios"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Informaci\xf3n")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Los diccionarios son proporcionados por ",(0,r.kt)("a",{parentName:"p",href:"https://learnjapanese.moe/"},"TheMoeWay"),"/Shoui."))),(0,r.kt)("p",null,"Estos son los diccionarios que, seg\xfan su caso, debe descargar. Si desea conocer en detalle qu\xe9 hace cada diccionario, ",(0,r.kt)("a",{href:"../utility/Diccionaries"},"aqu\xed")," encontrar\xe1 m\xe1s informaci\xf3n."),(0,r.kt)(v,{className:"unique-tabs",mdxType:"Tabs"},(0,r.kt)(f,{value:"apple",label:"Diccionarios para principiantes",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Los diccionarios que encontrar\xe1 en esta secci\xf3n contienen definiciones \xfanicamente del Japon\xe9s al Ingl\xe9s."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Carpeta Bilingual:")),(0,r.kt)("li",null,(0,r.kt)("code",null,"[Bilingual] JMdict (English).zip")),(0,r.kt)("li",null,(0,r.kt)("code",null,"[Bilingual] \u7814\u7a76\u793e\u3000\u65b0\u548c\u82f1\u5927\u8f9e\u5178\u3000\u7b2c\uff15\u7248.zip")),(0,r.kt)("li",null,(0,r.kt)("code",null,"[Bilingual] \u65b0\u548c\u82f1.zip")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Carpeta Pitch Accent:")),(0,r.kt)("li",null,(0,r.kt)("code",null,"[Pitch Accent] \u30a2\u30af\u30bb\u30f3\u30c8\u8f9e\u5178.zip")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Carpeta Kanji:")),(0,r.kt)("li",null,(0,r.kt)("code",null,"[Kanji] KANJIDIC (English).zip"))),(0,r.kt)(f,{value:"orange",label:"Diccionarios para Intermedios/Avanzados",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Carpeta Bilingual:")),(0,r.kt)("li",null,"Todos los diccionarios de esta carpeta."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Carpeta Monolingual:")),(0,r.kt)("li",null,"Todos los diccionarios de esta carpeta.")),(0,r.kt)(f,{value:"extras",label:"Diccionarios extras",default:!0,mdxType:"TabItem"})),(0,r.kt)("h4",{id:"instalaci\xf3n-diccionarios"},"Instalaci\xf3n Diccionarios"),(0,r.kt)("p",null,"Una vez descargue los diccionarios, se encontrar\xe1 con varios archivos en formato .zip, estos son los diccionarios y ",(0,r.kt)("strong",{parentName:"p"},"no deben ser extra\xeddos"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Presione el icono de Yomichan en la barra de herramientas del navegador y despu\xe9s, presione el \xedcono de ajustes."),(0,r.kt)("li",{parentName:"ol"},"Vaya al apartado \u201cDictionaries\u201d y presione \u201cConfigure installed and enabled dictionaries...\u201d. "),(0,r.kt)("li",{parentName:"ol"},"Presione el bot\xf3n \u201cImport\u201d y busque el directorio donde extrajo el paquete de diccionarios. Importe los diccionarios de su elecci\xf3n. ")),(0,r.kt)("p",null,"Al ser muchas entradas y diccionarios, es normal que la importaci\xf3n lleve un tiempo. Pero con esto concluir\xeda la instalaci\xf3n de diccionarios en Yomichan."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Orden de prioridad")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Despu\xe9s de finalizado el proceso de importaci\xf3n podr\xe1 cambiar la prioridad de cada diccionario, es decir, qu\xe9 diccionario ver\xe1 primero. El n\xfamero mayor que asigne ser\xe1 el primer diccionario que ver\xe1."))),(0,r.kt)("h3",{id:"configuraci\xf3n-ajustes-avanzados"},"Configuraci\xf3n Ajustes Avanzados"),(0,r.kt)("p",null,"Antes de probar Yomichan, haremos unos ajustes. Antes de seguir, verifique que tenga los ajustes avanzados activados en la esquina inferior izquierda como se aprecia en la imagen."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ajustes-Avanzados",src:n(2439).Z})),(0,r.kt)("h4",{id:"popup"},"Popup"),(0,r.kt)("p",null,"En el apartado Popup vamos a habilitar el escaneo dentro de las ventanas emergentes y eliminaremos el l\xedmite de ventanas emergentes. De esta forma podr\xe1 usar Yomichan con los diccionarios que ha importado cuantas veces quiera."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Popup-Ajustes",src:n(323).Z})),(0,r.kt)("h4",{id:"popup-appearance"},"Popup Appearance"),(0,r.kt)("p",null,"En el apartado de Popup Appearance vamos a hacer m\xe1s agradable la interfaz de Yomichan. Aqu\xed, de forma opcional, vamos a activar el modo nocturno. Y vamos a permitir que todos los diccionarios se puedan colapsar."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Popup-Apariencia1",src:n(2810).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Popup-Apariencia2",src:n(3079).Z})),(0,r.kt)("h4",{id:"popup-position--size"},"Popup Position & Size"),(0,r.kt)("p",null,"En el apartado Popup Position & Size vamos a incrementar el tama\xf1o de la ventana emergente para mejorar la nitidez del diccionario. Muy \xfatil sobre todo cuando se usan diccionarios monoling\xfces. Aqu\xed muestro mis ajustes de preferencia pero puede cambiarlos y experimentar con otros apartados seg\xfan sus preferencias."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Popup-Apariencia2",src:n(1263).Z})),(0,r.kt)("h4",{id:"audio"},"Audio"),(0,r.kt)("p",null,"En este apartado vamos a configurar las fuentes de donde se obtendr\xe1n los audios de cada palabra."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Audio-Ajustes",src:n(4183).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Audio-Ajustes2",src:n(6279).Z})),(0,r.kt)("h3",{id:"demostraci\xf3n"},"Demostraci\xf3n"),(0,r.kt)("p",null,"S\xf3lo queda probar Yomichan con alguna palabra en Japon\xe9s. Para usar Yomichan basta con ir a cualquier sitio web y mantener presionado ",(0,r.kt)("inlineCode",{parentName:"p"},"SHIFT")," mientras se pasa el cursor por alguna palabra que se quiera buscar en Yomichan. Puede experimentar con esta oraci\xf3n: \u307f\u3093\u306a\u604b\u611b\u306e\u8a71\u3059\u308b\u306e\u597d\u304d\u3060\u3082\u3093\u306a\u3002"),(0,r.kt)("p",null,"La ventana emergente de Yomichan quedar\xe1 similar a esta imagen:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ejemplo-Yomichan",src:n(6942).Z})),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"YOMICHAN EN PDFS")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"En navegadores basados en Chromium no es posible utilizar Yomichan en archivos PDFs."))))}A.isMDXComponent=!0},2439:function(e,a){a.Z="data:image/png;base64,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"},4183:function(e,a,n){a.Z=n.p+"assets/images/audio1_settings-762e9545d14be45274ab29c5dbfff09a.png"},6279:function(e,a,n){a.Z=n.p+"assets/images/audio2_settings-ae209047c2b96cd3969c6e7bdcd7c434.png"},7607:function(e,a,n){a.Z=n.p+"assets/images/example-gif-f50cded3d125afabf8fc7c84ed3e58ca.gif"},6942:function(e,a,n){a.Z=n.p+"assets/images/example_settings-61c80c61de71e212bc5dba606ab391ad.png"},2810:function(e,a,n){a.Z=n.p+"assets/images/popup_appearance1_settings-d76d9a9f176b31fa41856137785a3c1c.png"},3079:function(e,a,n){a.Z=n.p+"assets/images/popup_appearance2_settings-eacca0ba58c901876410e4a74f327bd7.png"},1263:function(e,a,n){a.Z=n.p+"assets/images/popup_positionSize_settings-424c1c88aa088c1d8ba5f13fdc1575f3.png"},323:function(e,a,n){a.Z=n.p+"assets/images/popup_settings-ee3db291f3eca79619d1097e0dc40563.png"}}]);