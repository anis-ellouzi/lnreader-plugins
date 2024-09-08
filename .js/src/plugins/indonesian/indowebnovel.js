var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("cheerio"),r=require("@libs/fetch"),i=require("@libs/novelStatus"),s=function(){function s(){this.id="IDWN.id",this.name="IndoWebNovel",this.icon="src/id/indowebnovel/icon.png",this.site="https://indowebnovel.id/",this.version="1.2.3"}return s.prototype.parseNovels=function(t){var e=this,n=[];return t(".flexbox2-item").each((function(r,i){var s=t(i).find(".flexbox2-title span").first().text(),o=t(i).find("img").attr("src"),a=t(i).find(".flexbox2-content > a").attr("href");a&&n.push({name:s,cover:o,path:a.slice(e.site.length)})})),n},s.prototype.popularNovels=function(){return t(this,arguments,void 0,(function(t){var i,s,o;return void 0===t&&(t=1),e(this,(function(e){switch(e.label){case 0:return i=this.site+"page/".concat(t,"/?s"),[4,(0,r.fetchApi)(i)];case 1:return[4,e.sent().text()];case 2:return s=e.sent(),o=(0,n.load)(s),[2,this.parseNovels(o)]}}))}))},s.prototype.parseNovel=function(s){return t(this,void 0,void 0,(function(){var t,o,a,c,u=this;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(this.site+s)];case 1:return[4,e.sent().text()];case 2:return t=e.sent(),(o=(0,n.load)(t))(".series-synops div").remove(),(a={path:s,name:o(".series-title h2").text().trim()||"Untitled",cover:o(".series-thumb img").attr("src"),author:o(".series-infolist li:contains('Author') span").text().trim(),status:"Completed"===o(".status").text().trim()?i.NovelStatus.Completed:i.NovelStatus.Ongoing,summary:o(".series-synops").text().trim(),chapters:[]}).genres=o(".series-genres a").map((function(t,e){return o(e).text().trim()})).toArray().join(","),c=[],o(".series-chapterlist li").each((function(t,e){var n=o(e).find("a").text().trim(),r=o(e).find("a").attr("href");r&&c.push({name:n,path:r.slice(u.site.length)})})),a.chapters=c.reverse(),[2,a]}}))}))},s.prototype.parseChapter=function(i){return t(this,void 0,void 0,(function(){var t,s;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(this.site+i)];case 1:return[4,e.sent().text()];case 2:return t=e.sent(),s=(0,n.load)(t),[2,s(".adsads").html()||""]}}))}))},s.prototype.searchNovels=function(i){return t(this,arguments,void 0,(function(t,i){var s,o,a;return void 0===i&&(i=1),e(this,(function(e){switch(e.label){case 0:return s=this.site+"page/".concat(i,"/?s=").concat(t),[4,(0,r.fetchApi)(s)];case 1:return[4,e.sent().text()];case 2:return o=e.sent(),a=(0,n.load)(o),[2,this.parseNovels(a)]}}))}))},s}();exports.default=new s;