var e=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(n,l){function i(e){try{u(r.next(e))}catch(e){l(e)}}function s(e){try{u(r.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,r,n,l,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function s(s){return function(u){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;l&&(l=0,s[0]&&(i=0)),i;)try{if(a=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/fetch"),n=require("@libs/novelStatus"),l=require("cheerio"),i=a(require("dayjs")),s=new(function(){function a(e){var t;this.id=e.id,this.name=e.sourceName,this.icon="multisrc/local/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var a=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(15+a),this.filters=e.filters,this.jsonUrl="https://raw.githubusercontent.com/anis-ellouzi/lnreader-plugins/plugins/v/public/static/novels.json"}return a.prototype.popularNovels=function(a,r){return e(this,arguments,void 0,(function(a,r){var n,l=this,i=r.filters;r.showLatestNovels;return t(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,new Promise((function(a,r){return e(l,void 0,void 0,(function(){var e,n,l,s,u,o,c,h=this;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(this.jsonUrl)];case 1:if(!(e=t.sent()).ok)throw new Error("HTTP error! Status: ".concat(e.status));return[4,e.json()];case 2:return n=t.sent(),l=n.filter((function(e){var t=!0,a=!0,r=!0,n=!0,l=!0,s=!1;if(i&&(i.name&&i.name.value&&i.name.value.length>0&&e.name&&(a=e.name.toLowerCase().includes(i.name.value.toLowerCase())),i.status&&i.status.value&&i.status.value.length>0&&"all"!=i.status.value&&e.status&&(t=e.status.toLowerCase().includes(i.status.value.toLowerCase())),i.genres&&i.genres.value&&i.genres.value.include&&i.genres.value.include.length>0&&e.tags&&(r=i.genres.value.include.every((function(t){return e.tags.toLowerCase().includes(t.toLowerCase())}))),i.genres&&i.genres.value&&i.genres.value.exclude&&i.genres.value.exclude.length>0&&e.tags&&(s=i.genres.value.exclude.some((function(t){return e.tags.toLowerCase().includes(t.toLowerCase())}))),i.nbChapters&&i.nbChapters.value&&i.nbChapters.value.length>0&&"all"!=i.nbChapters.value&&i.nbChapters.value.includes(",")&&e.chapter)){var u=i.nbChapters.value.split(",");l=parseInt(e.chapter,0)<=parseInt(u[1],0),n=parseInt(e.chapter,0)>=parseInt(u[0],0)}return a&&t&&r&&!s&&n&&l})),s=null===(c=null==i?void 0:i.sort)||void 0===c?void 0:c.value,u=l.sort((function(e,t){switch(s){case"name":return e.name.localeCompare(t.name);case"chapters":return parseInt(t.chapter,0)-parseInt(e.chapter,0);default:return new Date(t.lastChapterUpdatedOn).getTime()-new Date(e.lastChapterUpdatedOn).getTime()}})).map((function(e){return{name:h.getPathWithPrefix(e.baseUrl,e.url),cover:e.baseUrl+e.cover,path:h.getPathWithPrefix(e.baseUrl,e.url)}})),a(u),[3,4];case 3:return o=t.sent(),r(o),[3,4];case 4:return[2]}}))}))}))];case 1:return[2,a.sent()];case 2:throw n=a.sent(),console.error("Error fetching popular novels:",n),n;case 3:return[2]}}))}))},a.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,s,u,o,c,h,v,p,f,d,b,m=this;return t(this,(function(t){switch(t.label){case 0:return e=this.getSite(a),s=e+this.getPath(a),[4,(0,r.fetchApi)(s).then((function(e){return e.text()}))];case 1:if(u=t.sent(),alert(a),alert(s),alert(u),o=(0,l.load)(u),(c={path:a,name:o("h1.novel-title").text()||""}).author=o("span[itemprop=author]").text(),c.cover=e+o("figure.cover > img").attr("data-src"),c.summary=o(".summary").text().replace("Summary","").trim(),c.genres=o("div.categories > ul > li").map((function(e,t){var a;return null===(a=o(t).text())||void 0===a?void 0:a.trim()})).get().join(","),o("div.header-stats > span").each((function(){"Status"===o(this).find("small").text()&&(c.status="Ongoing"===o(this).find("strong").text()?n.NovelStatus.Ongoing:n.NovelStatus.Completed)})),h=parseInt(o(".header-stats").find("span > strong").first().text().trim()),v=o(".chapter-list li").map((function(t,a){var r,n,l,s=o(a).find("a .chapter-title").text().trim(),u=null===(r=o(a).find("a").attr("href"))||void 0===r?void 0:r.trim();if(!s||!u)return null;var c=o(a).find("a .chapter-update").text().trim();if(null===(n=null==c?void 0:c.includes)||void 0===n?void 0:n.call(c,"ago")){var h=(null===(l=c.match(/\d+/))||void 0===l?void 0:l[0])||"0",v=parseInt(h,10);if(v){var p=(0,i.default)();(c.includes("hours ago")||c.includes("hour ago"))&&p.subtract(v,"hours"),(c.includes("days ago")||c.includes("day ago"))&&p.subtract(v,"days"),(c.includes("months ago")||c.includes("month ago"))&&p.subtract(v,"months"),c=p.format("LL")}}return{name:s,chapterPath:m.getPathWithPrefix(e,u),releaseTime:c,chapterNumber:t+1}})).get().filter((function(e){return e})),h>v.length)for(p=parseInt((null===(b=v[v.length-1].path.match(/_(\d+)\.html/))||void 0===b?void 0:b[1])||"",10),f=(p||v.length)+1;f<=h;f++)d=this.getPathWithPrefix(e,a.replace(".html","_"+f+".html")),v.push({name:"Chapter "+f,path:d,releaseTime:null,chapterNumber:f});return c.chapters=v,[2,c]}}))}))},a.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,n,i,s;return t(this,(function(t){switch(t.label){case 0:return e=this.getSite(a),n=e+this.getPath(a),[4,(0,r.fetchApi)(n).then((function(e){return e.text()}))];case 1:return i=t.sent(),s=(0,l.load)(i),[2,s(".chapter-content").html()||""]}}))}))},a.prototype.searchNovels=function(a){return e(this,void 0,void 0,(function(){var r,n=this;return t(this,(function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,new Promise((function(r,l){return e(n,void 0,void 0,(function(){var e,n,i,s,u,o=this;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(this.jsonUrl)];case 1:if(!(e=t.sent()).ok)throw new Error("HTTP error! Status: ".concat(e.status));return[4,e.json()];case 2:return n=t.sent(),i=n.filter((function(e){var t=!0;return a&&(t=e.name.toLowerCase().includes(a.toLowerCase())),t})),s=i.sort((function(e,t){return new Date(t.lastChapterUpdatedOn).getTime()-new Date(e.lastChapterUpdatedOn).getTime()})).map((function(e){return{name:e.name,cover:e.baseUrl+e.cover,path:o.getPathWithPrefix(e.baseUrl,e.url)}})),r(s),[3,4];case 3:return u=t.sent(),l(u),[3,4];case 4:return[2]}}))}))}))];case 1:return[2,l.sent()];case 2:throw r=l.sent(),console.error("Error fetching popular novels:",r),r;case 3:return[2]}}))}))},a.prototype.replaceWithFullUrl=function(e){return e.includes("/wuxiaspot/")?e.replace("/wuxiaspot/","https://www.wuxiaspot.com/"):e.includes("/wuxiabox/")?e.replace("/wuxiabox/","https://www.wuxiabox.com/"):e.includes("/freewebnovel/")?e.replace("/freewebnovel/","https://www.freewebnovel.com/"):e},a.prototype.getPathWithPrefix=function(e,t){return e.includes("wuxiaspot")?"/wuxiaspot"+t:e.includes("wuxiabox")?"/wuxiabox"+t:e.includes("freewebnovel")?"/freewebnovel"+t:t},a.prototype.getSite=function(e){return e.includes("/wuxiaspot")?"https://www.wuxiaspot.com":e.includes("/wuxiabox")?"https://www.wuxiabox.com":e.includes("/freewebnovel")?"https://www.freewebnovel.com":e},a.prototype.getPath=function(e){return e.includes("/wuxiaspot")?e.replace("/wuxiaspot",""):e.includes("/wuxiabox")?e.replace("/wuxiabox",""):e.includes("/freewebnovel")?e.replace("/freewebnovel",""):e},a}())({id:"wuxialocal",sourceSite:"https://www.wuxiaspot.com",sourceName:"WuxiaLocal",filters:{name:{type:"Text",label:"Name",value:""},sort:{type:"Picker",label:"Sort By",value:"lastdotime",options:[{label:"New",value:"newstime"},{label:"Name",value:"name"},{label:"Updates",value:"lastdotime"},{label:"Chapters",value:"chapters"}]},genres:{label:"Genres",type:"XCheckbox",value:{include:[],exclude:[]},options:[{label:"Action",value:"action"},{label:"Adventure",value:"adventure"},{label:"Comedy",value:"comedy"},{label:"Urban",value:"Urban"},{label:"Fantasy",value:"fantasy"},{label:"Harem",value:"harem"},{label:"Martial Arts",value:"martial-arts"},{label:"Mecha",value:"mecha"},{label:"Sci-fi",value:"sci-fi"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"},{label:"System",value:"System"},{label:"Cheats",value:"Cheats"},{label:"Family",value:"Family"},{label:"Clan",value:"Clan"},{label:"Mystery",value:"mystery"},{label:"School Life",value:"school-life"},{label:"Magic",value:"Magic"},{label:"Transmigration",value:"transmigration"},{label:"Reincarnation",value:"reincarnation"},{label:"Wizards",value:"wizards"},{label:"Eastern",value:"eastern"},{label:"Overpowered",value:"overpowered"},{label:"Fan-fiction",value:"Fan-fiction"},{label:"Farming",value:"farming"},{label:"Cultivation",value:"cultivation"},{label:"Rebirth",value:"rebirth"},{label:"KingdomBuilding",value:"kingdombuilding"}]},status:{label:"Status",options:[{label:"All",value:"all"},{label:"Completed",value:"Completed"},{label:"Ongoing",value:"Ongoing"}],value:"all",type:"Picker"},nbChapters:{label:"Chapters",options:[{label:"all",value:"all"},{label:"0-100",value:"0,100"},{label:"100-200",value:"100,200"},{label:"200-500",value:"200,500"},{label:"501-1000",value:"500,1000"},{label:"> 1000",value:"1000,100000"}],value:"all",type:"Picker"}}});exports.default=s;