(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{274:function(t,e,a){},275:function(t,e){},302:function(t,e,a){"use strict";var n=a(274);a.n(n).a},303:function(t,e,a){"use strict";var n=a(275),i=a.n(n);e.default=i.a},324:function(t,e,a){"use strict";a.r(e);a(256),a(257),a(32),a(37),a(21),a(254),a(97);var n=a(96),i=a(267),o=a(255),r=a(294),s={components:{"u-heading":n.a,"u-author":i.a,"u-newsletter":o.a,"u-post-card":r.a},computed:{title:function(){return this.$page&&this.$page.tag?this.$page.tag.title:""},description:function(){return"Blog posts authored by ".concat(this.$static.metadata.author.name," about ").concat(this.$page.tag.title,".")},image:function(){return this.$static.metadata.url+"/images/hero/Muhammad-Rehan-Saeed-1600x900.jpg"},url:function(){return this.$static.metadata.url+this.$page.tag.path}},metaInfo:function(){return{title:this.title,link:[{rel:"canonical",href:this.url}],meta:[{name:"description",content:this.description},{name:"author",content:this.$static.metadata.author.name},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:this.$static.metadata.author.twitter},{name:"twitter:creator",content:this.$static.metadata.author.twitter},{name:"twitter:title",content:this.title},{name:"twitter:description",content:this.description},{name:"twitter:image",content:this.image},{property:"og:title",content:this.title},{property:"og:url",content:this.url},{property:"og:image",content:this.image},{property:"og:image:height",content:this.image.match(/(\d*)x(\d*)/)[2]},{property:"og:image:width",content:this.image.match(/(\d*)x(\d*)/)[1]},{property:"og:description",content:this.description},{property:"og:locale",content:this.$static.metadata.language.replace("-","_")},{property:"og:site_name",content:this.$static.metadata.name},{property:"og:type",content:"website"},{property:"fb:app_id",content:this.$static.metadata.facebookAppId}]}}},c=(a(302),a(1)),u=a(0),p=u.a.config.optionMergeStrategies.computed,h={metadata:{name:"Muhammad Rehan Saeed",url:"https://rehansaeed.com",language:"en-GB",facebookAppId:"632414437490344",author:{name:"Muhammad Rehan Saeed",twitter:"@RehanSaeedUK"}}},d=function(t){var e=t.options;e.__staticData?e.__staticData.data=h:(e.__staticData=u.a.observable({data:h}),e.computed=p({$static:function(){return e.__staticData.data}},e.computed))},m=a(303),g=Object(c.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"tag-page"},[e("u-heading",{attrs:{level:"1",center:""}},[this._v("# "+this._s(this.$page.tag.title))]),e("div",{staticClass:"tag-page__items"},this._l(this.$page.tag.belongsTo.edges,(function(t){return e("u-post-card",{key:t.node.id,attrs:{post:t.node}})})),1),e("u-newsletter",{staticClass:"tag-page__newsletter"})],1)])}),[],!1,null,null,null);"function"==typeof d&&d(g),"function"==typeof m.default&&Object(m.default)(g);e.default=g.exports}}]);