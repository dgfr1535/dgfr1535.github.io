(window.webpackJsonp=window.webpackJsonp||[]).push([[214,82,201,215],{1246:function(t,e,n){"use strict";n.r(e);n(10),n(43);var c=n(15),o=n(16),r=n(18),l=n(17),m=n(8),d=n(1),h=n(0),f=n(575),v=n(576),main=n(65),C=n(3);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(m.a)(t);if(e){var o=Object(m.a)(this).constructor;n=Reflect.construct(c,arguments,o)}else n=c.apply(this,arguments);return Object(l.a)(this,n)}}var x=function(t){Object(r.a)(n,t);var e=y(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).MainStore=Object(h.getModule)(main.default,t.$store),t}return Object(o.a)(n,[{key:"cardStyle",get:function(){return this.editor.cardStyle}},{key:"familyPlaceholder",get:function(){return[[{type:"man",label:this.manTitle||"",name:"김신랑",color:"#24416b"},{type:"woman",label:this.womanTitle||"",name:"이신부",color:"#d97e80"}],[{type:"manFather",label:this.manFatherTitle||"",name:"김아빠",color:"#24416b"},{type:"womanFather",label:this.womanFatherTitle||"",name:"이아빠",color:"#d97e80"}],[{type:"manMother",label:this.manMotherTitle||"",name:"김엄마",color:"#24416b"},{type:"womanMother",label:this.womanMotherTitle||"",name:"이엄마",color:"#d97e80"}]]}},{key:"main",get:function(){return this.MainStore.editor.main}},{key:"family",get:function(){return this.MainStore.editor.family}},{key:"contact",get:function(){return this.MainStore.editor.contact}},{key:"manContact",get:function(){return this.contact.man}},{key:"manTitle",get:function(){return this.contact.manTitle}},{key:"manName",get:function(){return this.contact.manName}},{key:"manChristianName",get:function(){return this.contact.manChristianName}},{key:"manFatherContact",get:function(){return this.contact.manFather}},{key:"manFatherTitle",get:function(){return this.contact.manFatherTitle}},{key:"manFatherName",get:function(){return this.contact.manFatherName}},{key:"manFatherChristianName",get:function(){return this.contact.manFatherChristianName}},{key:"manMotherContact",get:function(){return this.contact.manMother}},{key:"manMotherTitle",get:function(){return this.contact.manMotherTitle}},{key:"manMotherName",get:function(){return this.contact.manMotherName}},{key:"manMotherChristianName",get:function(){return this.contact.manMotherChristianName}},{key:"womanContact",get:function(){return this.contact.woman}},{key:"womanTitle",get:function(){return this.contact.womanTitle}},{key:"womanName",get:function(){return this.contact.womanName}},{key:"womanChristianName",get:function(){return this.contact.womanChristianName}},{key:"womanFatherContact",get:function(){return this.contact.womanFather}},{key:"womanFatherTitle",get:function(){return this.contact.womanFatherTitle}},{key:"womanFatherName",get:function(){return this.contact.womanFatherName}},{key:"womanFatherChristianName",get:function(){return this.contact.womanFatherChristianName}},{key:"womanMotherContact",get:function(){return this.contact.womanMother}},{key:"womanMotherTitle",get:function(){return this.contact.womanMotherTitle}},{key:"womanMotherName",get:function(){return this.contact.womanMotherName}},{key:"womanMotherChristianName",get:function(){return this.contact.womanMotherChristianName}},{key:"names",get:function(){return{man:Object(C.f)(this.manName),woman:Object(C.f)(this.womanName),manFather:Object(C.f)(this.manFatherName),womanFather:Object(C.f)(this.womanFatherName),manMother:Object(C.f)(this.manMotherName),womanMother:Object(C.f)(this.womanMotherName)}}}]),n}(v.default),w=x=Object(d.a)([Object(h.Component)({components:{BaseSection:f.default}})],x),_=n(19),component=Object(_.a)(w,undefined,undefined,!1,null,null,null);e.default=component.exports},1288:function(t,e,n){var content=n(1346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("cdd62b8c",content,!0,{sourceMap:!1})},1345:function(t,e,n){"use strict";n(1288)},1346:function(t,e,n){var c=n(60)((function(i){return i[1]}));c.push([t.i,".medium .contactphone{height:1.5rem;width:1.5rem}.large .contactphone,.medium .contactmessage{height:1.75rem;width:1.75rem}.huge .contactphone,.large .contactmessage{height:2rem;width:2rem}.huge .contactmessage,.size4 .contactphone{height:2.25rem;width:2.25rem}.size4 .contactmessage,.size5 .contactphone{height:2.5rem;width:2.5rem}.size5 .contactmessage{height:2.75rem;width:2.75rem}",""]),c.locals={},t.exports=c},1367:function(t,e,n){"use strict";n.r(e);n(10),n(43);var c=n(15),o=n(16),r=n(18),l=n(17),m=n(8),d=n(1),h=n(0),f=n(602),v=n(1246),C=n(575);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(m.a)(t);if(e){var o=Object(m.a)(this).constructor;n=Reflect.construct(c,arguments,o)}else n=c.apply(this,arguments);return Object(l.a)(this,n)}}var x=function(t){Object(r.a)(n,t);var e=y(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"contactType",get:function(){return this.editor.contact.contactType}},{key:"show",get:function(){return this.contact.show}},{key:"main",get:function(){return this.editor.main}},{key:"order",get:function(){return this.basicData.order}},{key:"showenglishlabel",get:function(){return this.editor.showEnglishLabel}}]),n}(v.default),w=x=Object(d.a)([Object(h.Component)({components:{BaseSection:C.default,PreviewNotice:f.default}})],x),_=(n(1345),n(19)),component=Object(_.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("BaseSection",{staticClass:"bgpoint1",class:{"!pb-28":0===t.cardStyle.id&&0===t.bg.id&&t.nextbgbaseExistsAfter||0===t.cardStyle.id&&0===t.bg.id&&t.nextbgpoint2ExistsAfter||1===t.cardStyle.id&&0===t.bg.id&&t.nextbgbaseExistsAfter||1===t.cardStyle.id&&0===t.bg.id&&t.nextbgpoint2ExistsAfter||2===t.cardStyle.id&&0===t.bg.id&&t.nextbgbaseExistsAfter||2===t.cardStyle.id&&0===t.bg.id&&t.nextbgpoint2ExistsAfter||3===t.cardStyle.id&&0===t.bg.id&&t.nextbgbaseExistsAfter||3===t.cardStyle.id&&0===t.bg.id&&t.nextbgpoint2ExistsAfter||4===t.cardStyle.id&&0===t.bg.id&&t.nextbgbaseExistsAfter||4===t.cardStyle.id&&0===t.bg.id&&t.nextbgpoint2ExistsAfter||5===t.cardStyle.id&&0===t.bg.id&&t.nextbgbaseExistsAfter||5===t.cardStyle.id&&0===t.bg.id&&t.nextbgpoint2ExistsAfter,"!pt-0":t.contactprevExistsBefore&&t.inViewer,"bg-id-1":1===t.bg.id,"bg-id-2":2===t.bg.id,"bg-id-3":3===t.bg.id,"bg-id-4":4===t.bg.id,"bg-id-5":5===t.bg.id,"bg-id-6":6===t.bg.id,"bg-id-7":7===t.bg.id,"bg-id-8":8===t.bg.id,"bg-id-9":9===t.bg.id,bgpaper:t.bgpaper},attrs:{id:t.id,viewer:t.inViewer,top:"https://cdn2.makedear.com/homepage/img/bg3/gray-top.png",lovelytop:"https://cdn2.makedear.com/homepage/img/bg3/beige-top.png",style3top:"https://cdn2.makedear.com/homepage/img/bg3/gray-top.png",style4top:"https://cdn2.makedear.com/homepage/img/bg3/fdfafa.png",style5top:"https://cdn2.makedear.com/homepage/img/bg3/beige-top.png",style6top:"https://cdn2.makedear.com/homepage/img/bg3/gray-top.png"}},[1===t.contactType.id?e("div",{staticClass:"pt-1 flex justify-center",attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"relative flex flex-col justify-center items-center"},[e("button",{staticClass:"relative flex items-center",on:{click:function(e){return t.PopupStore.togglePhonePopup(!0)}}},[e("div",{staticClass:"contact-button-text contact-button p-6 z-10 flex flex-col items-center justify-center min-w-[20rem] rounded-md border text-base tracking-tight break-all"},[e("div",{domProps:{innerHTML:t._s(t.contact.buttonText)}})])]),t._v(" "),t.isEdit?e("PreviewNotice",{staticClass:"sm:hidden",attrs:{text:"안내글 : 버튼을 눌러 '연락하기' 팝업창을 확인해 주세요."}}):t._e()],1)]):t._e(),t._v(" "),2===t.contactType.id?e("div",{staticClass:"px-12 flex flex-col justify-center",attrs:{"data-aos":"fade-up"}},[t.showenglishlabel&&t.contact.engtitle?e("h2",{staticClass:"section-label whitespace-pre-wrap",class:{"!pb-16":!t.contact.title},attrs:{"data-aos":"fade-up"}},[e("div",{domProps:{innerHTML:t._s(t.contact.engtitle)}})]):t._e(),t._v(" "),t.contact.title?e("h1",{staticClass:"subtitle whitespace-pre-wrap",attrs:{"data-aos":"fade-up"}},[e("div",{domProps:{innerHTML:t._s(t.contact.title)}})]):t._e(),t._v(" "),t.contact.title?e("div",{staticClass:"section-line-div",attrs:{"data-aos":"fade-up"}},[e("hr",{staticClass:"section-line bgpoint1-line"})]):t._e(),t._v(" "),e("div",{staticClass:"section-contact-open mx-auto relative w-full tracking-tighter select-none"},[t.manContact||t.womanContact?e("div",{staticClass:"mb-16 last-of-type:mb-0 flex items-center justify-center contactgroomandbride",class:{"flex-row-reverse":"bride"===t.mainOrder}},[e("div",{staticClass:"w-1/2 contactgroom",class:{hidden:"right"===t.show}},[t.manContact?e("div",{staticClass:"flex flex-col items-center"},[e("div",{staticClass:"contactlabel text-base",domProps:{innerHTML:t._s(t.manTitle)}}),t._v(" "),e("div",{staticClass:"contactname pt-2 font-semibold text-base whitespace-pre-wrap break-keep",domProps:{innerHTML:t._s(t.manName)}}),t._v(" "),t.family.man.useChristianName?e("div",{staticClass:"christianname text-sm pt-2",domProps:{innerHTML:t._s(t.manChristianName)}}):t._e(),t._v(" "),e("div",{staticClass:"flex items-center"},[e("a",{staticClass:"pt-4 px-2 select-none",attrs:{href:"tel:".concat(t.manContact),draggable:"false"}},[e("img",{staticClass:"contactphone groomicon object-contain",attrs:{src:"https://cdn2.makedear.com/homepage/img/contact/call.png",draggable:"false"}})]),t._v(" "),e("a",{staticClass:"pt-4 px-2 select-none",attrs:{href:"sms:".concat(t.manContact),draggable:"false"}},[e("img",{staticClass:"contactmessage groomicon object-contain",attrs:{src:"https://cdn2.makedear.com/homepage/img/contact/mail.png",draggable:"false"}})])])]):t._e()]),t._v(" "),e("div",{staticClass:"w-1/2 contactbride",class:{hidden:"left"===t.show}},[t.womanContact?e("div",{staticClass:"flex flex-col items-center"},[e("div",{staticClass:"contactlabel text-base",domProps:{innerHTML:t._s(t.womanTitle)}}),t._v(" "),e("div",{staticClass:"contactname pt-2 font-semibold text-base whitespace-pre-wrap break-keep",domProps:{innerHTML:t._s(t.womanName)}}),t._v(" "),t.family.woman.useChristianName?e("div",{staticClass:"christianname text-sm pt-2",domProps:{innerHTML:t._s(t.womanChristianName)}}):t._e(),t._v(" "),e("div",{staticClass:"flex items-center"},[e("a",{staticClass:"pt-4 px-2 select-none",attrs:{href:"tel:".concat(t.womanContact),draggable:"false"}},[e("img",{staticClass:"contactphone brideicon object-contain",attrs:{src:"https://cdn2.makedear.com/homepage/img/contact/call.png",draggable:"false"}})]),t._v(" "),e("a",{staticClass:"pt-4 px-2 select-none",attrs:{href:"sms:".concat(t.womanContact),draggable:"false"}},[e("img",{staticClass:"contactmessage brideicon object-contain",attrs:{src:"https://cdn2.makedear.com/homepage/img/contact/mail.png",draggable:"false"}})])])]):t._e()])]):t._e(),t._v(" "),t.manFatherContact||t.womanFatherContact?e("div",{staticClass:"mb-16 last-of-type:mb-0 flex items-center justify-center contactfather",class:{"flex-row-reverse":"bride"===t.mainOrder}},[e("div",{staticClass:"w-1/2 contactgroom",class:{hidden:"right"===t.show}},[t.manFatherContact?e("div",{staticClass:"flex flex-col items-center"},[e("div",{staticClass:"contactlabel text-base",domProps:{innerHTML:t._s(t.manFatherTitle)}}),t._v(" "),e("div",{staticClass:"contactname pt-2 font-semibold text-base whitespace-pre-wrap break-keep",domProps:{innerHTML:t._s(t.manFatherName)}}),t._v(" "),t.family.man.father.useChristianName?e("div",{staticClass:"christianname text-sm pt-2",domProps:{innerHTML:t._s(t.manFatherChristianName)}}):t._e(),t._v(" "),e("div",{staticClass:"flex items-center"},[e("a",{staticClass:"pt-4 px-2 select-none",attrs:{href:"tel:".concat(t.manFatherContact),draggable:"false"}},[e("img",{staticClass:"contactphone groomicon object-contain",attrs:{src:"https://cdn2.makedear.com/homepage/img/contact/call.png",draggable:"false"}})]),t._v(" "),e("a",{staticClass:"pt-4 px-2 select-none",attrs:{href:"sms:".concat(t.manFatherContact),draggable:"false"}},[e("img",{staticClass:"contactmessage groomicon object-contain",attrs:{src:"https://cdn2.makedear.com/homepage/img/contact/mail.png",draggable:"false"}})])])]):t._e()]),t._v(" "),e("div",{staticClass:"w-1/2 contactbride",class:{hidden:"left"===t.show}},[t.womanFatherContact?e("div",{staticClass:"flex flex-col items-center"},[e("div",{staticClass:"contactlabel text-base",domProps:{innerHTML:t._s(t.womanFatherTitle)}}),t._v(" "),e("div",{staticClass:"contactname pt-2 font-semibold text-base whitespace-pre-wrap break-keep",domProps:{innerHTML:t._s(t.womanFatherName)}}),t._v(" "),t.family.woman.father.useChristianName?e("div",{staticClass:"christianname text-sm pt-2",domProps:{innerHTML:t._s(t.womanFatherChristianName)}}):t._e(),t._v(" "),e("div",{staticClass:"flex items-center"},[e("a",{staticClass:"pt-4 px-2 select-none",attrs:{href:"tel:".concat(t.womanFatherContact),draggable:"false"}},[e("img",{staticClass:"contactphone brideicon object-contain",attrs:{src:"https://cdn2.makedear.com/homepage/img/contact/call.png",draggable:"false"}})]),t._v(" "),e("a",{staticClass:"pt-4 px-2 select-none",attrs:{href:"sms:".concat(t.womanFatherContact),draggable:"false"}},[e("img",{staticClass:"contactmessage brideicon object-contain",attrs:{src:"https://cdn2.makedear.com/homepage/img/contact/mail.png",draggable:"false"}})])])]):t._e()])]):t._e(),t._v(" "),t.manMotherContact||t.womanMotherContact?e("div",{staticClass:"mb-16 last-of-type:mb-0 flex items-center justify-center contactmother",class:{"flex-row-reverse":"bride"===t.mainOrder}},[e("div",{staticClass:"w-1/2 contactgroom",class:{hidden:"right"===t.show}},[t.manMotherContact?e("div",{staticClass:"flex flex-col items-center"},[e("div",{staticClass:"contactlabel text-base",domProps:{innerHTML:t._s(t.manMotherTitle)}}),t._v(" "),e("div",{staticClass:"contactname pt-2 font-semibold text-base whitespace-pre-wrap break-keep",domProps:{innerHTML:t._s(t.manMotherName)}}),t._v(" "),t.family.man.mother.useChristianName?e("div",{staticClass:"christianname text-sm pt-2",domProps:{innerHTML:t._s(t.manMotherChristianName)}}):t._e(),t._v(" "),e("div",{staticClass:"flex items-center"},[e("a",{staticClass:"pt-4 px-2 select-none",attrs:{href:"tel:".concat(t.manMotherContact),draggable:"false"}},[e("img",{staticClass:"contactphone groomicon object-contain",attrs:{src:"https://cdn2.makedear.com/homepage/img/contact/call.png",draggable:"false"}})]),t._v(" "),e("a",{staticClass:"pt-4 px-2 select-none",attrs:{href:"sms:".concat(t.manMotherContact),draggable:"false"}},[e("img",{staticClass:"contactmessage groomicon object-contain",attrs:{src:"https://cdn2.makedear.com/homepage/img/contact/mail.png",draggable:"false"}})])])]):t._e()]),t._v(" "),e("div",{staticClass:"w-1/2 contactbride",class:{hidden:"left"===t.show}},[t.womanMotherContact?e("div",{staticClass:"flex flex-col items-center"},[e("div",{staticClass:"contactlabel text-base",domProps:{innerHTML:t._s(t.womanMotherTitle)}}),t._v(" "),e("div",{staticClass:"contactname pt-2 font-semibold text-base whitespace-pre-wrap break-keep",domProps:{innerHTML:t._s(t.womanMotherName)}}),t._v(" "),t.family.woman.mother.useChristianName?e("div",{staticClass:"christianname text-sm pt-2",domProps:{innerHTML:t._s(t.womanMotherChristianName)}}):t._e(),t._v(" "),e("div",{staticClass:"flex items-center"},[e("a",{staticClass:"pt-4 px-2 select-none",attrs:{href:"tel:".concat(t.womanMotherContact),draggable:"false"}},[e("img",{staticClass:"contactphone brideicon object-contain",attrs:{src:"https://cdn2.makedear.com/homepage/img/contact/call.png",draggable:"false"}})]),t._v(" "),e("a",{staticClass:"pt-4 px-2 select-none",attrs:{href:"sms:".concat(t.womanMotherContact),draggable:"false"}},[e("img",{staticClass:"contactmessage brideicon object-contain",attrs:{src:"https://cdn2.makedear.com/homepage/img/contact/mail.png",draggable:"false"}})])])]):t._e()])]):t._e()])]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PreviewNotice:n(602).default})},577:function(t,e,n){"use strict";n.r(e);n(10),n(43);var c=n(15),o=n(16),r=n(18),l=n(17),m=n(8),d=n(1),h=n(0);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(m.a)(t);if(e){var o=Object(m.a)(this).constructor;n=Reflect.construct(c,arguments,o)}else n=c.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t){Object(r.a)(n,t);var e=f(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"computedTextClass",get:function(){var t="tracking-tighter";return t+=this.textClass}},{key:"computedDense",get:function(){return"string"==typeof this.dense||this.dense}}]),n}(h.Vue);Object(d.a)([Object(h.Prop)()],v.prototype,"text",void 0),Object(d.a)([Object(h.Prop)({default:!1})],v.prototype,"dense",void 0),Object(d.a)([Object(h.Prop)({default:""})],v.prototype,"textClass",void 0),Object(d.a)([Object(h.Prop)({default:""})],v.prototype,"color",void 0),Object(d.a)([Object(h.Prop)({default:null})],v.prototype,"icon",void 0);var C=v=Object(d.a)([h.Component],v),y=n(19),component=Object(y.a)(C,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex text-[#aaa]"},[t.icon?e("span",{staticClass:"mr-1"},[t._v("\n    "+t._s(t.icon)+"\n  ")]):e("svg",{staticClass:"w-6 h-4 shrink-0",class:{"mt-2":!t.computedDense,"":t.computedDense},attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.0",viewBox:"0 0 128 300",preserveAspectRatio:"xMidYMid meet"}},[e("g",{attrs:{transform:"translate(0,300) scale(0.1,-0.1)",fill:"currentColor",stroke:"none"}},[e("path",{attrs:{d:"M540 2968 c-25 -14 -58 -44 -75 -67 -27 -39 -30 -50 -30 -120 0 -68 3 -82 27 -117 15 -21 44 -50 65 -64 31 -21 48 -25 113 -25 65 0 82 4 113 25 21 14 50 43 65 64 24 35 27 49 27 116 0 67 -3 81 -27 116 -44 62 -90 88 -167 92 -55 3 -74 -1 -111 -20z"}}),t._v(" "),e("path",{attrs:{d:"M210 2129 c-90 -37 -129 -153 -77 -229 46 -68 64 -75 213 -78 l134 -4 0 -743 0 -743 -182 -4 c-163 -3 -187 -5 -218 -24 -101 -59 -104 -195 -6 -268 26 -20 45 -21 297 -26 148 -3 390 -3 538 0 252 5 271 6 297 26 98 72 96 204 -3 265 -36 23 -49 24 -220 27 l-183 4 -2 853 c-3 844 -3 854 -24 881 -51 68 -52 69 -307 71 -140 1 -242 -2 -257 -8z"}})])]),t._v(" "),"string"==typeof t.text?e("div",{class:t.computedTextClass},[t._v("\n    "+t._s(t.text)+"\n  ")]):Array.isArray(t.text)?e("div",{class:t.computedTextClass},t._l(t.text,(function(n){return e("div",{key:n},[t._v("\n      "+t._s(n)+"\n    ")])})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},602:function(t,e,n){"use strict";n.r(e);n(10),n(43);var c=n(16),o=n(15),r=n(18),l=n(17),m=n(8),d=n(1),h=n(0),f=n(577);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(m.a)(t);if(e){var o=Object(m.a)(this).constructor;n=Reflect.construct(c,arguments,o)}else n=c.apply(this,arguments);return Object(l.a)(this,n)}}var C=function(t){Object(r.a)(n,t);var e=v(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n)}(h.Vue);Object(d.a)([Object(h.Prop)({default:""})],C.prototype,"text",void 0),Object(d.a)([Object(h.Prop)({default:"#f8f8f8"})],C.prototype,"background",void 0);var y=C=Object(d.a)([Object(h.Component)({components:{EditorNotice:f.default}})],C),x=n(19),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"my-4 px-4 py-1 mx-auto relative z-30 flex justify-center w-max bg-white border border-[#eee] rounded-full suit text-[1.4rem] leading-8",style:{backgroundColor:t.background}},[e("EditorNotice",{staticClass:"!text-[#222]",attrs:{text:t.text}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{EditorNotice:n(577).default})}}]);