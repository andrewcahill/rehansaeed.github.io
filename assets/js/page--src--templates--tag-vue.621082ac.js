(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3ewn":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s}));a("rB9j"),a("Rm1S"),a("UxlC");function n(t){var e=t.match(/(.*)\/(.+)-(\d+)x(\d+)/);return{alt:e[2].replace("-"," ").replace("_"," "),height:e[4],width:e[3]}}function i(t){var e=n(t);return[{property:"og:image",content:t},{property:"og:image:alt",content:e.alt},{property:"og:image:height",content:e.height},{property:"og:image:width",content:e.width}]}function s(t){var e=n(t);return{"@type":"ImageObject",url:t,alternativeHeadline:e.alt,width:e.width,height:e.height}}},"5urB":function(t,e,a){},"6Kmc":function(t,e,a){"use strict";a("bP6F")},"8d1i":function(t,e,a){},DhVo:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/Logo-260x260.7ff51a0.f04f9a806a9e60a3b671e75b223480d9.png",size:{width:120,height:120},sizes:"(max-width: 120px) 100vw, 120px",srcset:["/assets/static/Logo-260x260.7ff51a0.f04f9a806a9e60a3b671e75b223480d9.png 120w"]}},Fryl:function(t,e,a){"use strict";a("5urB")},Mh7a:function(t,e,a){"use strict";var n={name:"u-tags",components:{"u-link-button":a("TUbx").a},props:{tags:{isRequired:!0,type:Array}}},i=(a("Zglw"),a("KHd+")),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},t._l(t.tags,(function(e){return a("u-link-button",{key:e.id,staticClass:"tags__link",attrs:{bordered:"",to:e.path}},[t._v(t._s(e.title))])})),1)}),[],!1,null,null,null);e.a=s.exports},Zglw:function(t,e,a){"use strict";a("8d1i")},bP6F:function(t,e,a){},hyx5:function(t,e,a){"use strict";a("z2JD")},k8r6:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("DQNa");var n=a("NoME"),i=a("FVam"),s=a("cnyc"),o=a("sWYD");function r(t){if(t)return function(t){var e=new Date;return Object(n.a)(e,t)<=30?Object(i.a)(t,e,{addSuffix:!0}):Object(s.a)(e)==Object(s.a)(t)?Object(o.a)(t,"d MMMM"):Object(o.a)(t,"d MMMM yyyy")}(new Date(t))}},kL9j:function(t,e,a){"use strict";var n=a("bYPN"),i=a("qAcn"),s=a("scFS"),o=a("Mh7a"),r=a("3ewn"),c={name:"u-post-card",components:{"u-card":n.a,"u-heading":i.a,"u-post-meta":s.a,"u-tags":o.a},props:{post:{type:Object}},computed:{imageMeta:function(){return Object(r.a)(this.post.heroImage)}}},u=(a("q73z"),a("KHd+")),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-card",{staticClass:"post-card",class:{"post-card--has-poster":t.post.poster},attrs:{tag:"article",hoverable:"",focusable:""}},[a("div",{staticClass:"post-card__header"},[t.post.heroImage?a("g-image",{staticClass:"post-card__image",attrs:{alt:t.imageMeta.alt,src:t.post.heroImage}}):t._e()],1),a("div",{staticClass:"post-card__content"},[a("u-heading",{staticClass:"post-card__title",attrs:{id:t.post.title,to:t.post.path,level:"2"}},[t._v(t._s(t.post.title))]),a("p",{staticClass:"post-card__description"},[t._v(t._s(t.post.description))]),a("u-post-meta",{staticClass:"post-card__meta",attrs:{meta:t.post}}),t.post.tags?a("u-tags",{staticClass:"post-card__tags",attrs:{tags:t.post.tags}}):t._e()],1)])}),[],!1,null,null,null);e.a=d.exports},mVoE:function(t,e,a){"use strict";var n=a("qAcn"),i=a("RdX2"),s={name:"u-author",components:{"u-heading":n.a,"u-social-links":i.a}},o=(a("hyx5"),a("KHd+")),r=a("Kw5r"),c=r.a.config.optionMergeStrategies.computed,u={metadata:{name:"Muhammad Rehan Saeed",description:"Software Developer at Microsoft, Open Source Contributor and Blogger",url:"https://rehansaeed.com"}},d=function(t){var e=t.options;e.__staticData?e.__staticData.data=u:(e.__staticData=r.a.observable({data:u}),e.computed=c({$static:function(){return e.__staticData.data}},e.computed))},p=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"author h-card"},[n("g-image",{staticClass:"author__image u-photo",attrs:{alt:t.$static.metadata.name,immediate:"",src:a("DhVo"),width:"120",height:"120"}}),n("u-heading",{staticClass:"author__site-title",attrs:{id:t.$static.metadata.name,"link-class":"u-url u-uid p-name",level:"1",href:t.$static.metadata.url,center:""}},[t._v(t._s(t.$static.metadata.name))]),n("p",{staticClass:"author__description p-note"},[t._v(t._s(t.$static.metadata.description))]),n("u-social-links")],1)}),[],!1,null,null,null);"function"==typeof d&&d(p);e.a=p.exports},plPW:function(t,e,a){},q73z:function(t,e,a){"use strict";a("plPW")},scFS:function(t,e,a){"use strict";var n=a("k8r6"),i={name:"u-post-meta",props:{meta:{type:Object}},computed:{postedDisplayDate:function(){return Object(n.a)(this.meta.date)},updatedDisplayDate:function(){return Object(n.a)(this.meta.dateModified)}}},s=(a("6Kmc"),a("KHd+")),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.meta.dateModified?a("p",{staticClass:"post-meta"},[t._v("\n    Posted\n    "),a("time",{staticClass:"dt-published",attrs:{datetime:t.meta.date,title:t.meta.date}},[t._v(t._s(t.postedDisplayDate))]),t._v("\n    and updated\n    "),a("time",{attrs:{datetime:t.meta.dateModified,title:t.meta.dateModified}},[t._v(t._s(t.updatedDisplayDate))]),t._v("\n    - "),a("strong",[t._v(t._s(t.meta.timeToRead)+" min read")])]):a("p",{staticClass:"post-meta"},[t._v("\n    Posted\n    "),a("time",{staticClass:"dt-updated",attrs:{datetime:t.meta.date,title:t.meta.date}},[t._v(t._s(t.postedDisplayDate))]),t._v("\n    - "),a("strong",[t._v(t._s(t.meta.timeToRead)+" min read")])])])}),[],!1,null,null,null);e.a=o.exports},y3F6:function(t,e,a){"use strict";a.r(e);a("pNMO"),a("4Brf"),a("ma9I"),a("TeQF"),a("2B1R"),a("sMBO"),a("rB9j"),a("Rm1S"),a("UxlC");var n=a("qAcn"),i=a("mVoE"),s=a("w5yD"),o=a("kL9j"),r={components:{"u-heading":n.a,"u-author":i.a,"u-newsletter":s.a,"u-post-card":o.a},computed:{metadata:function(){return this.$static.metadata},tag:function(){return this.$page.tag},posts:function(){return this.tag.belongsTo.edges.map((function(t){return t.node})).filter((function(t){return t.published}))},title:function(){return this.tag.title},description:function(){return"Blog posts authored by ".concat(this.metadata.author.name," about ").concat(this.title,".")},image:function(){return"".concat(this.metadata.url,"/images/hero/Muhammad-Rehan-Saeed-1600x900.jpg")},url:function(){return this.metadata.url+this.tag.path}},metaInfo:function(){return{title:this.title,link:[{rel:"canonical",href:this.url}],meta:[{name:"description",content:this.description},{name:"author",content:this.metadata.author.name},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:this.metadata.author.twitter.user},{name:"twitter:creator",content:this.metadata.author.twitter.user},{name:"twitter:title",content:this.title},{name:"twitter:description",content:this.description},{name:"twitter:image",content:this.image},{property:"og:title",content:this.title},{property:"og:url",content:this.url},{property:"og:image",content:this.image},{property:"og:image:height",content:this.image.match(/(\d*)x(\d*)/)[2]},{property:"og:image:width",content:this.image.match(/(\d*)x(\d*)/)[1]},{property:"og:description",content:this.description},{property:"og:locale",content:this.metadata.language.replace("-","_")},{property:"og:site_name",content:this.metadata.name},{property:"og:type",content:"website"},{property:"fb:app_id",content:this.metadata.facebookAppId}]}}},c=(a("Fryl"),a("KHd+")),u=a("Kw5r"),d=u.a.config.optionMergeStrategies.computed,p={metadata:{name:"Muhammad Rehan Saeed",url:"https://rehansaeed.com",language:"en-GB",facebookAppId:"632414437490344",author:{name:"Muhammad Rehan Saeed",twitter:{user:"@RehanSaeedUK"}}}},l=function(t){var e=t.options;e.__staticData?e.__staticData.data=p:(e.__staticData=u.a.observable({data:p}),e.computed=d({$static:function(){return e.__staticData.data}},e.computed))},m=null,h=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"tag-page"},[e("u-heading",{attrs:{id:this.title,level:"1",center:"",to:this.tag.path}},[this._v("# "+this._s(this.title))]),e("div",{staticClass:"tag-page__items"},this._l(this.posts,(function(t){return e("u-post-card",{key:t.id,attrs:{post:t}})})),1),e("u-newsletter",{staticClass:"tag-page__newsletter"})],1)])}),[],!1,null,null,null);"function"==typeof l&&l(h),"function"==typeof m&&m(h);e.default=h.exports},z2JD:function(t,e,a){}}]);