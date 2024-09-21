var e=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function i(e){try{u(a.next(e))}catch(e){l(e)}}function o(e){try{u(a.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}u((a=a.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var n,a,r,l,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,o[0]&&(i=0)),i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("@libs/novelStatus"),r=require("cheerio"),l=n(require("dayjs")),i=new(function(){function n(e){var t;this.id=e.id,this.name=e.sourceName,this.icon="multisrc/local/icon.png",this.site=e.sourceSite;var n=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(40+n),this.filters=e.filters,this.jsonUrl="https://raw.githubusercontent.com/anis-ellouzi/lnreader-plugins/plugins/v/public/static/novels.json"}return n.prototype.popularNovels=function(n,a){return e(this,arguments,void 0,(function(n,a){var r,l=this,i=a.filters;a.showLatestNovels;return t(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,new Promise((function(a,r){return e(l,void 0,void 0,(function(){var e,l,o,u,s,c,v,h,d,f;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(this.jsonUrl)];case 1:if(!(e=t.sent()).ok)throw new Error("HTTP error! Status: ".concat(e.status));return[4,e.json()];case 2:return l=t.sent(),o=l.filter((function(e){var t,n,a,r,l,o,u,s,c,v,h=i||{},d=h.name,f=void 0===d?e.name:d,p=h.status,m=void 0===p?e.status:p,b=h.genres,w=void 0===b?e.tags:b,g=h.nbChapters,y=void 0===g?e.chapter:g,x=function(e){return null==e?void 0:e.map((function(e){return e.toString().split(",")})).flat()},C=!(null===(n=null===(t=f.value)||void 0===t?void 0:t.include)||void 0===n?void 0:n.length)||x(f.value.include).some((function(t){var n;return null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase())})),N=!!(null===(r=null===(a=f.value)||void 0===a?void 0:a.exclude)||void 0===r?void 0:r.length)&&x(f.value.exclude).every((function(t){var n;return null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase())})),S=!m.value||"all"===m.value||(null===(l=e.status)||void 0===l?void 0:l.toLowerCase().includes(m.value.toLowerCase())),L=!(null===(u=null===(o=w.value)||void 0===o?void 0:o.include)||void 0===u?void 0:u.length)||w.value.include.every((function(t){var n;return null===(n=e.tags)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase())})),k=!!(null===(c=null===(s=w.value)||void 0===s?void 0:s.exclude)||void 0===c?void 0:c.length)&&w.value.exclude.some((function(t){var n;return null===(n=e.tags)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase())})),U=!(null===(v=y.value)||void 0===v?void 0:v.includes(","))||function(){var t=y.value.split(",").map(Number),n=t[0],a=t[1],r=parseInt(e.chapter,10);return r>=n&&r<=a}();return C&&!N&&S&&L&&!k&&U})),u=null===(f=null==i?void 0:i.sort)||void 0===f?void 0:f.value,s=o.sort((function(e,t){switch(u){case"name":return e.name.localeCompare(t.name);case"chapters":return parseInt(t.chapter,0)-parseInt(e.chapter,0);default:return new Date(t.lastChapterUpdatedOn).getTime()-new Date(e.lastChapterUpdatedOn).getTime()}})).map((function(e){return{name:e.name,cover:e.baseUrl+e.cover,path:e.url}})),v=(c=36*(n-1))+36,h=s.slice(c,v),1==n&&h.unshift({name:"Total : "+s.length,cover:"",path:""}),a(h),[3,4];case 3:return d=t.sent(),r(d),[3,4];case 4:return[2]}}))}))}))];case 1:return[2,a.sent()];case 2:throw r=a.sent(),console.error("Error fetching popular novels:",r),r;case 3:return[2]}}))}))},n.prototype.parseNovel=function(n){return e(this,void 0,void 0,(function(){var e,i,o,u,s,c,v,h;return t(this,(function(t){switch(t.label){case 0:return[4,this.fetchNovel(this.site,n)];case 1:if(!(e=t.sent()))throw new Error("Both primary and fallback fetch requests failed.");if(i=(0,r.load)(e),(o={path:n,name:i("h1.novel-title").text()||""}).author=i("span[itemprop=author]").text(),o.cover=this.site+i("figure.cover > img").attr("data-src"),o.summary=i(".summary").text().replace("Summary","").trim(),o.genres=i("div.categories > ul > li").map((function(e,t){var n;return null===(n=i(t).text())||void 0===n?void 0:n.trim()})).get().join(","),i("div.header-stats > span").each((function(){"Status"===i(this).find("small").text()&&(o.status="Ongoing"===i(this).find("strong").text()?a.NovelStatus.Ongoing:a.NovelStatus.Completed)})),u=parseInt(i(".header-stats").find("span > strong").first().text().trim()),s=i(".chapter-list li").map((function(e,t){var n,a,r,o=i(t).find("a .chapter-title").text().trim(),u=null===(n=i(t).find("a").attr("href"))||void 0===n?void 0:n.trim();if(!o||!u)return null;var s=i(t).find("a .chapter-update").text().trim();if(null===(a=null==s?void 0:s.includes)||void 0===a?void 0:a.call(s,"ago")){var c=(null===(r=s.match(/\d+/))||void 0===r?void 0:r[0])||"0",v=parseInt(c,10);if(v){var h=(0,l.default)();(s.includes("hours ago")||s.includes("hour ago"))&&h.subtract(v,"hours"),(s.includes("days ago")||s.includes("day ago"))&&h.subtract(v,"days"),(s.includes("months ago")||s.includes("month ago"))&&h.subtract(v,"months"),s=h.format("LL")}}return{name:o,path:u,releaseTime:s,chapterNumber:e+1}})).get().filter((function(e){return e})),u>s.length)for(c=parseInt((null===(h=s[s.length-1].path.match(/_(\d+)\.html/))||void 0===h?void 0:h[1])||"",10),v=(c||s.length)+1;v<=u;v++)s.push({name:"Chapter "+v,path:n.replace(".html","_"+v+".html"),releaseTime:null,chapterNumber:v});return o.chapters=s,[2,o]}}))}))},n.prototype.parseChapter=function(n){return e(this,void 0,void 0,(function(){var e,a;return t(this,(function(t){switch(t.label){case 0:return[4,this.fetchNovel(this.site,n)];case 1:if(!(e=t.sent()))throw new Error("Both primary and fallback fetch requests failed.");return a=(0,r.load)(e),[2,a(".chapter-content").html()||""]}}))}))},n.prototype.searchNovels=function(n){return e(this,void 0,void 0,(function(){var a,r=this;return t(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,new Promise((function(a,l){return e(r,void 0,void 0,(function(){var e,r,i,o,u;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(this.jsonUrl)];case 1:if(!(e=t.sent()).ok)throw new Error("HTTP error! Status: ".concat(e.status));return[4,e.json()];case 2:return r=t.sent(),i=r.filter((function(e){var t=!0;return n&&(t=e.name.toLowerCase().includes(n.toLowerCase())),t})),o=i.sort((function(e,t){return new Date(t.lastChapterUpdatedOn).getTime()-new Date(e.lastChapterUpdatedOn).getTime()})).map((function(e){return{name:e.name,cover:e.baseUrl+e.cover,path:e.url}})),a(o),[3,4];case 3:return u=t.sent(),l(u),[3,4];case 4:return[2]}}))}))}))];case 1:return[2,l.sent()];case 2:throw a=l.sent(),console.error("Error fetching popular novels:",a),a;case 3:return[2]}}))}))},n.prototype.getNovel=function(n){return e(this,void 0,void 0,(function(){var a=this;return t(this,(function(r){return[2,new Promise((function(r,l){return e(a,void 0,void 0,(function(){var e,a,i,o,u;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(this.jsonUrl)];case 1:if(!(e=t.sent()).ok)throw new Error("HTTP error! Status: ".concat(e.status));return[4,e.json()];case 2:return a=t.sent(),i=a.filter((function(e){return e.url===n})),(o=i.map((function(e){return{name:e.name,cover:e.baseUrl+e.cover,baseUrl:e.baseUrl,path:e.url}}))[0])?r(o):l(new Error("Novel not found")),[3,4];case 3:return u=t.sent(),l(u),[3,4];case 4:return[2]}}))}))}))]}))}))},n.prototype.fetchNovel=function(n,a){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){return e=!1,fetch(n+a).then((function(t){if(!t.ok)throw e=!0,new Error("Primary URL failed");return t.text()})).then((function(e){return e})).catch((function(t){e=!0})).then((function(){if(e){return fetch("https://www.wuxiabox.com"+a).then((function(e){return e.ok?e.text():null}))}})).then((function(e){if(e)return e})),[2]}))}))},n}())({id:"wuxialocal",sourceSite:"https://www.wuxiaspot.com",sourceName:"WuxiaLocal",filters:{sort:{type:"Picker",label:"Sort By",value:"lastdotime",options:[{label:"New",value:"newstime"},{label:"Name",value:"name"},{label:"Updates",value:"lastdotime"},{label:"Chapters",value:"chapters"}]},genres:{label:"Genres",type:"XCheckbox",value:{include:[],exclude:[]},options:[{label:"Action",value:"action"},{label:"Adventure",value:"adventure"},{label:"Comedy",value:"comedy"},{label:"Urban",value:"Urban"},{label:"Fantasy",value:"fantasy"},{label:"Harem",value:"harem"},{label:"Martial Arts",value:"martial-arts"},{label:"Mecha",value:"mecha"},{label:"Sci-fi",value:"sci-fi"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"},{label:"System",value:"System"},{label:"Cheats",value:"Cheats"},{label:"Family",value:"Family"},{label:"Clan",value:"Clan"},{label:"Mystery",value:"mystery"},{label:"School Life",value:"school-life"},{label:"Magic",value:"Magic"},{label:"Transmigration",value:"transmigration"},{label:"Reincarnation",value:"reincarnation"},{label:"Wizards",value:"wizards"},{label:"Eastern",value:"eastern"},{label:"Overpowered",value:"overpowered"},{label:"Fan-fiction",value:"Fan-fiction"},{label:"Farming",value:"farming"},{label:"Cultivation",value:"cultivation"},{label:"Rebirth",value:"rebirth"},{label:"KingdomBuilding",value:"kingdombuilding"}]},status:{label:"Status",options:[{label:"All",value:"all"},{label:"Completed",value:"Completed"},{label:"Ongoing",value:"Ongoing"}],value:"all",type:"Picker"},name:{label:"Name",value:[],type:"XCheckbox",options:[{label:"all",value:""},{label:"Family,Clan",value:"Family,Clan"},{label:"wives,marry,children,concubine,wife,maid,daughter",value:"wives,marry,children,concubine,wife"},{label:"starting,longevity",value:"starting,longevity"},{label:"wizard,witch",value:"wizard,witch"},{label:"sign-in,signin,sign in",value:"sign-in"}]},nbChapters:{label:"Chapters",options:[{label:"all",value:"all"},{label:"0-100",value:"0,100"},{label:"100-200",value:"100,200"},{label:"200-500",value:"200,500"},{label:"500-1000",value:"500,1000"},{label:"> 1000",value:"1000,100000"}],value:"all",type:"Picker"}}});exports.default=i;