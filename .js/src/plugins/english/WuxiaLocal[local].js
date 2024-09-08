var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function l(e){try{s(n.next(e))}catch(e){i(e)}}function o(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,o)}s((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var r,n,a,i,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(l=0)),l;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),a=require("@libs/novelStatus"),i=require("cheerio"),l=r(require("dayjs")),o=r(require("qs")),s=new(function(){function r(e){var t;this.id=e.id,this.name=e.sourceName,this.icon="multisrc/local/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var r=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(2+r),this.filters=e.filters}return r.prototype.popularNovels=function(r,n){return e(this,arguments,void 0,(function(r,n){var a,i=this,l=n.filters;n.showLatestNovels;return t(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,new Promise((function(r,n){return e(i,void 0,void 0,(function(){var e,a,i,o,s,u=this;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch("https://raw.githubusercontent.com/anis-ellouzi/lnreader-plugins/plugins/v/.dist/novels.json")];case 1:if(!(e=t.sent()).ok)throw new Error("HTTP error! Status: ".concat(e.status));return[4,e.json()];case 2:return a=t.sent(),i=a.filter((function(e){var t=!0;return l&&l.genres&&l.genres.value&&e.tags&&"all"!=e.tags&&(t=e.tags.includes(l.genres.value)),t})),o=i.sort((function(e,t){return new Date(t.lastChapterUpdatedOn).getTime()-new Date(e.lastChapterUpdatedOn).getTime()})).map((function(e){return{name:e.name,cover:u.site+e.cover,path:e.url}})),r(o),[3,4];case 3:return s=t.sent(),n(s),[3,4];case 4:return[2]}}))}))}))];case 1:return[2,r.sent()];case 2:throw a=r.sent(),console.error("Error fetching popular novels:",a),a;case 3:return[2]}}))}))},r.prototype.parseNovel=function(r){return e(this,void 0,void 0,(function(){var e,o,s,u,c,h,f,p;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(this.site+r).then((function(e){return e.text()}))];case 1:if(e=t.sent(),o=(0,i.load)(e),(s={path:r,name:o("h1.novel-title").text()||""}).author=o("span[itemprop=author]").text(),s.cover=this.site+o("figure.cover > img").attr("data-src"),s.summary=o(".summary").text().replace("Summary","").trim(),s.genres=o("div.categories > ul > li").map((function(e,t){var r;return null===(r=o(t).text())||void 0===r?void 0:r.trim()})).get().join(","),o("div.header-stats > span").each((function(){"Status"===o(this).find("small").text()&&(s.status="Ongoing"===o(this).find("strong").text()?a.NovelStatus.Ongoing:a.NovelStatus.Completed)})),u=parseInt(o(".header-stats").find("span > strong").first().text().trim()),c=o(".chapter-list li").map((function(e,t){var r,n,a,i=o(t).find("a .chapter-title").text().trim(),s=null===(r=o(t).find("a").attr("href"))||void 0===r?void 0:r.trim();if(!i||!s)return null;var u=o(t).find("a .chapter-update").text().trim();if(null===(n=null==u?void 0:u.includes)||void 0===n?void 0:n.call(u,"ago")){var c=(null===(a=u.match(/\d+/))||void 0===a?void 0:a[0])||"0",h=parseInt(c,10);if(h){var f=(0,l.default)();(u.includes("hours ago")||u.includes("hour ago"))&&f.subtract(h,"hours"),(u.includes("days ago")||u.includes("day ago"))&&f.subtract(h,"days"),(u.includes("months ago")||u.includes("month ago"))&&f.subtract(h,"months"),u=f.format("LL")}}return{name:i,path:s,releaseTime:u,chapterNumber:e+1}})).get().filter((function(e){return e})),u>c.length)for(h=parseInt((null===(p=c[c.length-1].path.match(/_(\d+)\.html/))||void 0===p?void 0:p[1])||"",10),f=(h||c.length)+1;f<=u;f++)c.push({name:"Chapter "+f,path:r.replace(".html","_"+f+".html"),releaseTime:null,chapterNumber:f});return s.chapters=c,[2,s]}}))}))},r.prototype.parseChapter=function(r){return e(this,void 0,void 0,(function(){var e,a;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(this.site+r).then((function(e){return e.text()}))];case 1:return e=t.sent(),a=(0,i.load)(e),[2,a(".chapter-content").html()||""]}}))}))},r.prototype.searchNovels=function(r){return e(this,void 0,void 0,(function(){var e,a,l=this;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(this.site+"/e/search/index.php",{headers:{"Content-Type":"application/x-www-form-urlencoded",Referer:this.site+"/search.html",Origin:this.site},method:"POST",body:o.default.stringify({show:"title",tempid:1,tbname:"news",keyboard:r})}).then((function(e){return e.text()}))];case 1:return e=t.sent(),a=(0,i.load)(e),[2,a("li.novel-item").map((function(e,t){return{name:a(t).find("h4").text()||"",cover:l.site+a(t).find("img").attr("data-src"),path:a(t).find("a").attr("href")||""}})).get().filter((function(e){return e.name&&e.path}))]}}))}))},r}())({id:"wuxialocal",sourceSite:"https://www.wuxiaspot.com",sourceName:"WuxiaLocal",filters:{sort:{label:"Sort By",options:[{label:"New",value:"newstime"},{label:"Popular",value:"onclick"},{label:"Updates",value:"lastdotime"}],value:"newstime",type:"Picker"},status:{label:"Status",options:[{label:"All",value:"all"},{label:"Completed",value:"Completed"},{label:"Ongoing",value:"Ongoing"}],value:"all",type:"Picker"},genres:{label:"Genres",type:"Picker",options:[{label:"All",value:"all"},{label:"Action",value:"action"},{label:"Adventure",value:"adventure"},{label:"Comedy",value:"comedy"},{label:"Fantasy",value:"fantasy"},{label:"Harem",value:"harem"},{label:"Martial Arts",value:"martial-arts"},{label:"Mecha",value:"mecha"},{label:"Mystery",value:"mystery"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"}]}}});exports.default=s;