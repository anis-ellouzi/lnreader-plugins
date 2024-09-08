var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function l(e){try{u(r.next(e))}catch(e){i(e)}}function o(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}u((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var n,r,a,i,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(l=0)),l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/fetch"),a=require("@libs/novelStatus"),i=require("cheerio"),l=n(require("dayjs")),o=n(require("qs")),u=new(function(){function n(e){var t;this.id=e.id,this.name=e.sourceName,this.icon="multisrc/local/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var n=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(2+n),this.filters=e.filters}return n.prototype.popularNovels=function(n,r){return e(this,arguments,void 0,(function(n,r){var a,i=this,l=r.filters;r.showLatestNovels;return t(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,new Promise((function(n,r){return e(i,void 0,void 0,(function(){var e,a,i,o,u,s=this;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch("https://raw.githubusercontent.com/anis-ellouzi/lnreader-plugins/plugins/v/.dist/novels.json")];case 1:if(!(e=t.sent()).ok)throw new Error("HTTP error! Status: ".concat(e.status));return[4,e.json()];case 2:return a=t.sent(),i=a.filter((function(e){var t,n,r,a,i=!0,o=!0;return l&&((null===(n=null===(t=l.genres.value)||void 0===t?void 0:t.include)||void 0===n?void 0:n.length)&&(i=l.genres.value.include.some((function(t){return e.tags.includes(t)}))),(null===(a=null===(r=l.genres.value)||void 0===r?void 0:r.exclude)||void 0===a?void 0:a.length)&&(o=l.genres.value.exclude.some((function(t){return e.tags.includes(t)})))),i&&o})),o=i.map((function(e){return{name:e.name,cover:s.site+e.cover,path:s.site+e.url}})),n(o),[3,4];case 3:return u=t.sent(),r(u),[3,4];case 4:return[2]}}))}))}))];case 1:return[2,n.sent()];case 2:throw a=n.sent(),console.error("Error fetching popular novels:",a),a;case 3:return[2]}}))}))},n.prototype.parseNovel=function(n){return e(this,void 0,void 0,(function(){var e,o,u,s,c,h,d,f;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(this.site+n).then((function(e){return e.text()}))];case 1:if(e=t.sent(),o=(0,i.load)(e),(u={path:n,name:o("h1.novel-title").text()||""}).author=o("span[itemprop=author]").text(),u.cover=this.site+o("figure.cover > img").attr("data-src"),u.summary=o(".summary").text().replace("Summary","").trim(),u.genres=o("div.categories > ul > li").map((function(e,t){var n;return null===(n=o(t).text())||void 0===n?void 0:n.trim()})).get().join(","),o("div.header-stats > span").each((function(){"Status"===o(this).find("small").text()&&(u.status="Ongoing"===o(this).find("strong").text()?a.NovelStatus.Ongoing:a.NovelStatus.Completed)})),s=parseInt(o(".header-stats").find("span > strong").first().text().trim()),c=o(".chapter-list li").map((function(e,t){var n,r,a,i=o(t).find("a .chapter-title").text().trim(),u=null===(n=o(t).find("a").attr("href"))||void 0===n?void 0:n.trim();if(!i||!u)return null;var s=o(t).find("a .chapter-update").text().trim();if(null===(r=null==s?void 0:s.includes)||void 0===r?void 0:r.call(s,"ago")){var c=(null===(a=s.match(/\d+/))||void 0===a?void 0:a[0])||"0",h=parseInt(c,10);if(h){var d=(0,l.default)();(s.includes("hours ago")||s.includes("hour ago"))&&d.subtract(h,"hours"),(s.includes("days ago")||s.includes("day ago"))&&d.subtract(h,"days"),(s.includes("months ago")||s.includes("month ago"))&&d.subtract(h,"months"),s=d.format("LL")}}return{name:i,path:u,releaseTime:s,chapterNumber:e+1}})).get().filter((function(e){return e})),s>c.length)for(h=parseInt((null===(f=c[c.length-1].path.match(/_(\d+)\.html/))||void 0===f?void 0:f[1])||"",10),d=(h||c.length)+1;d<=s;d++)c.push({name:"Chapter "+d,path:n.replace(".html","_"+d+".html"),releaseTime:null,chapterNumber:d});return u.chapters=c,[2,u]}}))}))},n.prototype.parseChapter=function(n){return e(this,void 0,void 0,(function(){var e,a;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(this.site+n).then((function(e){return e.text()}))];case 1:return e=t.sent(),a=(0,i.load)(e),[2,a(".chapter-content").html()||""]}}))}))},n.prototype.searchNovels=function(n){return e(this,void 0,void 0,(function(){var e,a,l=this;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(this.site+"/e/search/index.php",{headers:{"Content-Type":"application/x-www-form-urlencoded",Referer:this.site+"/search.html",Origin:this.site},method:"POST",body:o.default.stringify({show:"title",tempid:1,tbname:"news",keyboard:n})}).then((function(e){return e.text()}))];case 1:return e=t.sent(),a=(0,i.load)(e),[2,a("li.novel-item").map((function(e,t){return{name:a(t).find("h4").text()||"",cover:l.site+a(t).find("img").attr("data-src"),path:a(t).find("a").attr("href")||""}})).get().filter((function(e){return e.name&&e.path}))]}}))}))},n}())({id:"wuxialocal",sourceSite:"https://www.wuxiaspot.com",sourceName:"WuxiaLocal",filters:{sort:{label:"Sort By",options:[{label:"New",value:"newstime"},{label:"Popular",value:"onclick"},{label:"Updates",value:"lastdotime"}],value:"newstime",type:"Picker"},status:{label:"Status",options:[{label:"All",value:"all"},{label:"Completed",value:"Completed"},{label:"Ongoing",value:"Ongoing"}],value:"all",type:"Picker"},genres:{label:"Genres",type:"ExcludableCheckboxGroup",options:[{label:"All",value:"all"},{label:"Action",value:"action"},{label:"Adventure",value:"adventure"},{label:"Comedy",value:"comedy"},{label:"Fantasy",value:"fantasy"},{label:"Harem",value:"harem"},{label:"Martial Arts",value:"martial-arts"},{label:"Mecha",value:"mecha"},{label:"Mystery",value:"mystery"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"}]}}});exports.default=u;