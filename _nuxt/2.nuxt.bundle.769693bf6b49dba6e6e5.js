webpackJsonp([2],{194:function(t,e,n){function i(t){n(250)}var a=n(18)(n(207),n(237),i,"data-v-52a999bc",null);t.exports=a.exports},196:function(t,e,n){"use strict";e.a={pie:{chart:{type:"pie"},title:{text:"Default Title"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{type:"pie",name:"Browser share",data:[["Firefox",45],["IE",26.8],["Chrome",12.8],["Safari",8.5],["Opera",6.2],["Others",.7]]}]}}},198:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(82),a=n.n(i);e.default={props:["query","list"],data:function(){return{model:this.value,processedList:[]}},watch:{query:function(t){this.processedList=this.processList(t),this.$emit("onListFiltred",this.processedList)}},methods:{processList:function(t){return this.list&&this.list.length&&""!==t?this.list.filter(function(e){var n=a()(e),i=0;return n.forEach(function(n){"string"==typeof e[n]?e[n].toLowerCase().indexOf(t.toLowerCase())>-1&&(i+=1):i+=e[n]===t?1:0}),i>0}):[]}}}},200:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(224),a=n.n(i);e.default={props:["list","box-id","box-placeholder"],components:{filtredList:a.a},data:function(){return{fl:{list:[],searchQuery:""}}},methods:{onBackEvent:function(){this.$emit("on-box-back")},onSelectedItemEvent:function(t){this.$emit("on-box-selected-item",t),this.fl.searchQuery=""}}}},207:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(20),a=n.n(i),o=n(53),s=n.n(o),r=n(196),l=n(226),c=n.n(l),A=n(19);e.default={components:{searchBox:c.a},data:function(){return{items:null,chartDefaults:r.a.pie,chartOptions:null,search:"",ngo_name:"CANCER RESEARCH UK",createMode:!1,editionMode:!1,selectedFund:{id:1,name:"All resolutions"},resolutionFilters:[]}},methods:s()({onSelectSideItem:function(t){this.selectedFund=t,this.resolutionFilters=t.resolutions?t.resolutions:[]},showChart:function(t){this.chartOptions=a()(this.chartDefaults,t)},addNewFund:function(t){this.addFund(t),this.createMode=!1},editName:function(t){this.updateSelectedNgo(t),this.editionMode=!1},cancelEdit:function(t){this.editionMode=!1},doneEdit:function(t){this.editionMode=!1},setNgoList:function(t){this.fl.list=t}},n.i(A.mapActions)({fetchNgoFunds:"FETCH_NGO_FUNDS",fetchNgos:"FETCH_NGOS",fetchResolutions:"FETCH_RESOLUTIONS",fetchResolutionHeaders:"FETCH_RESOLUTION_HEADERS",fetchFunds:"FETCH_FUNDS",updateSelectedNgo:"UPDATE_SELECTED_NGO",clearResolutions:"CLEAR_RESOLUTIONS",addFund:"ADD_FUND"})),computed:s()({},n.i(A.mapGetters)({ngos:"getNgos",resolutions:"getResolutions",resolutionHeaders:"getResolutionHeaders",funds:"getFunds",selectedNgo:"getSelectedNgo"}),{filtredResolutions:function(){var t=this;return this.resolutionFilters.length?this.resolutions.filter(function(e){return t.resolutionFilters.indexOf(e.id)>-1}):this.resolutions}}),beforeMount:function(){this.fetchResolutionHeaders(),this.fetchResolutions(1),this.fetchFunds(),this.fetchNgos()},directives:{"ngo-edit-focus":function(t,e){e.value&&t.focus()}}}},215:function(t,e,n){e=t.exports=n(28)(!0),e.push([t.i,".container[data-v-52a999bc]{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title[data-v-52a999bc]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-52a999bc]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-52a999bc]{padding-top:15px}.animated-progress[data-v-52a999bc]{background-color:#eee;margin:3px 0}.animated-progress__bar[data-v-52a999bc]{width:0;text-align:right;-webkit-transition:1s;-o-transition:1s;transition:1s}.animated-progress__number[data-v-52a999bc]{color:#fff;padding-right:5px}.animated-progress__number.small[data-v-52a999bc]{color:#000;margin-right:-27px}.menu-button-text.active[data-v-52a999bc]{font-weight:700}.pending .list__tile[data-v-52a999bc]:hover{background:transparent!important}.pending .list__tile .menu-button-text[data-v-52a999bc]{cursor:default}.chart-wrapper[data-v-52a999bc]{position:relative}.chart-container[data-v-52a999bc]{position:absolute;top:0;right:0;margin-top:-10px;width:380px;height:auto;overflow:auto}.chart-close[data-v-52a999bc]{position:relative;float:right;z-index:1;top:0;right:0;padding:10px;margin:3px;font-size:30px;line-height:16px}.fund-name[data-v-52a999bc]{font-size:.7em;color:#000;margin-left:1rem}.card-actions--bottom[data-v-52a999bc]{display:inline-block;position:absolute;bottom:0;right:0;width:100%}.card__title>h5[data-v-52a999bc]{margin-bottom:0}.input-group[data-v-52a999bc]{margin-top:0;margin-bottom:0}.edit-ngo-name[data-v-52a999bc]{padding-bottom:18px}.ngo-name[data-v-52a999bc]{margin-bottom:10px;padding:7px 0;border:2px dashed transparent;-webkit-transition:all .5s;-o-transition:.5s all;transition:all .5s}.ngo-name[data-v-52a999bc]:hover{border-color:#ddd;cursor:pointer}","",{version:3,sources:["/Users/emilianoerrecalde/Documents/emi/capitalusm/pages/resolutions.vue"],names:[],mappings:"AACA,4BAEE,iBAAkB,AAClB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,iBAAmB,CACpB,AACD,wBAEE,uHAAwI,AACxI,cAAe,AACf,gBAAiB,AACjB,gBAAiB,AACjB,cAAe,AACf,kBAAoB,CACrB,AACD,2BAEE,gBAAiB,AACjB,eAAgB,AAChB,cAAe,AACf,iBAAkB,AAClB,mBAAqB,CACtB,AACD,wBAEE,gBAAkB,CACnB,AACD,oCACE,sBAAuB,AACvB,YAAc,CACf,AACD,yCACE,QAAU,AACV,iBAAkB,AAClB,sBAAuB,AACvB,iBAAkB,AAClB,aAAe,CAChB,AACD,4CACE,WAAa,AACb,iBAAmB,CACpB,AACD,kDACE,WAAa,AACb,kBAAoB,CACrB,AACD,0CACE,eAAkB,CACnB,AACD,4CACE,gCAAmC,CACpC,AACD,wDACE,cAAgB,CACjB,AACD,gCACE,iBAAmB,CACpB,AACD,kCACE,kBAAmB,AACnB,MAAO,AACP,QAAS,AACT,iBAAkB,AAClB,YAAa,AACb,YAAa,AACb,aAAe,CAChB,AACD,8BACE,kBAAmB,AACnB,YAAa,AACb,UAAW,AACX,MAAO,AACP,QAAS,AACT,aAAc,AACd,WAAY,AACZ,eAAgB,AAChB,gBAAiB,CAClB,AACD,4BACE,eAAiB,AACjB,WAAa,AACb,gBAAkB,CACnB,AACD,uCACE,qBAAsB,AACtB,kBAAmB,AACnB,SAAU,AACV,QAAS,AACT,UAAY,CACb,AAID,iCACE,eAAiB,CAClB,AACD,8BACE,aAAc,AACd,eAAiB,CAClB,AACD,gCACE,mBAAqB,CACtB,AACD,2BACE,mBAAoB,AACpB,cAAe,AACf,8BAA+B,AAC/B,2BAA6B,AAC7B,sBAAwB,AACxB,kBAAqB,CACtB,AACD,iCACE,kBAAmB,AACnB,cAAgB,CACjB",file:"resolutions.vue",sourcesContent:['\n.container[data-v-52a999bc]\n{\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n}\n.title[data-v-52a999bc]\n{\n  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */\n  display: block;\n  font-weight: 300;\n  font-size: 100px;\n  color: #35495e;\n  letter-spacing: 1px;\n}\n.subtitle[data-v-52a999bc]\n{\n  font-weight: 300;\n  font-size: 42px;\n  color: #526488;\n  word-spacing: 5px;\n  padding-bottom: 15px;\n}\n.links[data-v-52a999bc]\n{\n  padding-top: 15px;\n}\n.animated-progress[data-v-52a999bc] {\n  background-color: #EEE;\n  margin: 3px 0;\n}\n.animated-progress__bar[data-v-52a999bc] {\n  width: 0%;\n  text-align: right;\n  -webkit-transition: 1s;\n  -o-transition: 1s;\n  transition: 1s;\n}\n.animated-progress__number[data-v-52a999bc] {\n  color: white;\n  padding-right: 5px;\n}\n.animated-progress__number.small[data-v-52a999bc] {\n  color: black;\n  margin-right: -27px;\n}\n.menu-button-text.active[data-v-52a999bc] {\n  font-weight: bold;\n}\n.pending .list__tile[data-v-52a999bc]:hover {\n  background: transparent !important;\n}\n.pending .list__tile .menu-button-text[data-v-52a999bc] {\n  cursor: default;\n}\n.chart-wrapper[data-v-52a999bc] {\n  position: relative;\n}\n.chart-container[data-v-52a999bc] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: -10px;\n  width: 380px;\n  height: auto;\n  overflow: auto;\n}\n.chart-close[data-v-52a999bc] {\n  position: relative;\n  float: right;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  margin: 3px;\n  font-size: 30px;\n  line-height: 16px\n}\n.fund-name[data-v-52a999bc] {\n  font-size: 0.7em;\n  color: black;\n  margin-left: 1rem;\n}\n.card-actions--bottom[data-v-52a999bc] {\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n/*.table.table tbody tr:hover {\n  background: rgba(0,0,0,0.05);\n}*/\n.card__title > h5[data-v-52a999bc] {\n  margin-bottom: 0;\n}\n.input-group[data-v-52a999bc] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.edit-ngo-name[data-v-52a999bc] {\n  padding-bottom: 18px;\n}\n.ngo-name[data-v-52a999bc] {\n  margin-bottom: 10px;\n  padding: 7px 0;\n  border: 2px dashed transparent;\n  -webkit-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  transition: 0.5s all;\n}\n.ngo-name[data-v-52a999bc]:hover{\n  border-color: #ddd;\n  cursor: pointer;\n}\n'],sourceRoot:""}])},216:function(t,e,n){e=t.exports=n(28)(!0),e.push([t.i,".filtred-list-wrapper{margin-top:-18px}","",{version:3,sources:["/Users/emilianoerrecalde/Documents/emi/capitalusm/components/SearchBox.vue"],names:[],mappings:"AACA,sBACE,gBAAkB,CACnB",file:"SearchBox.vue",sourcesContent:["\n.filtred-list-wrapper {\n  margin-top: -18px;\n}\n"],sourceRoot:""}])},219:function(t,e,n){e=t.exports=n(28)(!0),e.push([t.i,".floating-menu{list-style-type:none;top:0;right:0;font-size:1rem}.floating-menu,.list-container{position:absolute;max-height:300px;overflow:auto}.list-container{z-index:2;width:100%}.list-wrapper{position:relative}","",{version:3,sources:["/Users/emilianoerrecalde/Documents/emi/capitalusm/components/FiltredList.vue"],names:[],mappings:"AACA,eACE,qBAAsB,AAEtB,MAAO,AACP,QAAS,AAGT,cAAgB,CACjB,AACD,+BAPE,kBAAmB,AAGnB,iBAAkB,AAClB,aAAe,CAShB,AAND,gBAEE,UAAW,AACX,UAAY,CAGb,AACD,cACE,iBAAmB,CACpB",file:"FiltredList.vue",sourcesContent:["\n.floating-menu {\n  list-style-type: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  max-height: 300px;\n  overflow: auto;\n  font-size: 1rem;\n}\n.list-container {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  max-height: 300px;\n  overflow: auto;\n}\n.list-wrapper {\n  position: relative;\n}\n"],sourceRoot:""}])},224:function(t,e,n){function i(t){n(254)}var a=n(18)(n(198),n(241),i,null,null);t.exports=a.exports},226:function(t,e,n){function i(t){n(251)}var a=n(18)(n(200),n(238),i,null,null);t.exports=a.exports},237:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-spacer"),t.editionMode?t._e():n("v-flex",{attrs:{xs12:""}},[n("h4",{staticClass:"text-xs-right ngo-name",class:{editing:t.editionMode}},[n("span",{on:{click:function(e){t.editionMode=!0}}},[t._v(t._s(t.selectedNgo))])])]),t.editionMode?n("v-flex",{attrs:{xs4:""}},[n("search-box",{staticClass:"edit-ngo-name",attrs:{list:t.ngos,"box-id":"ngos-search-box","box-placeholder":t.selectedNgo},on:{"on-box-back":function(e){t.editionMode=!1},"on-box-selected-item":t.editName}})],1):t._e()],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-card",{staticClass:"card--equal-hight",attrs:{tile:""}},[n("v-card-title",[n("h5",[t._v("My Funds")])]),n("v-list",t._l(t.funds,function(e){return n("v-list-tile",{key:e.id,attrs:{disabled:e.pending}},[n("v-list-tile-content",{on:{click:function(n){n.preventDefault(),t.onSelectSideItem(e)}}},[n("v-list-tile-title",{staticClass:"menu-button-text",class:{active:t.selectedFund.id===e.id}},[t._v("\n                "+t._s(e.name)+" "),e.pending?n("span",{staticClass:"pending-fund grey--text"},[t._v("(pending)")]):t._e()])],1),t.selectedFund.id===e.id?n("v-list-tile-action",[n("v-icon",{staticClass:"light-green--text"},[t._v("keyboard_arrow_right")])],1):t._e()],1)})),n("div",{staticClass:"card-actions--bottom"},[t.createMode?n("v-card-actions",[t.createMode?n("v-flex",{attrs:{xs12:""}},[n("search-box",{staticClass:"new-fund",attrs:{list:t.funds,"box-id":"funds-search-box","box-placeholder":"Type fund name.."},on:{"on-box-back":function(e){t.createMode=!1},"on-box-selected-item":t.addNewFund}})],1):t._e()],1):t._e(),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{flat:"",dark:"",secondary:""},nativeOn:{click:function(e){t.createMode=!t.createMode}}},[n("v-icon",{staticClass:"light-green--text"},[t._v("add")]),t._v("Add fund")],1)],1)],1)],1)],1),n("v-flex",[n("v-card",{attrs:{tile:""}},[n("v-card-title",[n("h5",[t._v("Resolutions "),n("small",[t._v("("+t._s(t.filtredResolutions.length)+")")]),n("span",{staticClass:"fund-name"},[t._v(t._s(t.selectedFund.name))])]),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.resolutionHeaders,items:t.filtredResolutions,search:t.search},scopedSlots:t._u([{key:"headerCell",fn:function(e){return[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip:bottom",value:{html:e.header.text},expression:"{ 'html': props.header.text }",arg:"bottom"}]},[t._v("\n              "+t._s(e.header.text)+"\n            ")])]}},{key:"items",fn:function(e){return[n("td",{staticStyle:{width:"70px"}},[t._v(t._s(e.item.companyName))]),n("td",[n("span",[t._v(t._s(e.item.resolutionName))]),e.item.progress?n("div",{staticClass:"animated-progress"},[n("div",{staticClass:"animated-progress__bar secondary",style:{width:e.item.progress+"%"}},[n("span",{staticClass:"animated-progress__number",class:{small:e.item.progress<10}},[t._v(t._s(e.item.progress)+"%")])])]):t._e()]),n("td",{staticClass:"chart-wrapper",staticStyle:{width:"20px"}},[e.item.chart?n("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:right",value:{html:e.item.chart.text},expression:"{ 'html': props.item.chart.text }",arg:"right"}],staticClass:"light-green--text",attrs:{icon:""},nativeOn:{click:function(n){!function(){t.showChart(e.item.chart.props)}()}}},[n("v-icon",[t._v("equalizer")])],1):t._e(),e.item.chart&&t.chartOptions?n("v-card",{staticClass:"chart-container"},[n("button",{staticClass:"chart-close",on:{click:function(e){t.chartOptions=null}}},[t._v("×")]),n("highcharts",{ref:"highcharts",attrs:{options:t.chartOptions}})],1):t._e()],1),n("td",{staticStyle:{width:"30px"}},[t._v(t._s(e.item.support))]),n("td",{staticStyle:{width:"20px"}},[t._v(t._s(e.item.origin))])]}}])})],1)],1)],1)],1)},staticRenderFns:[]}},238:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-text-field",{attrs:{name:t.boxId,label:t.boxPlaceholder||"Type something...","hide-details":"","single-line":"","append-icon":"search","prepend-icon":"arrow_back","prepend-icon-cb":t.onBackEvent,type:"text"},model:{value:t.fl.searchQuery,callback:function(e){t.fl.searchQuery=e},expression:"fl.searchQuery"}}),n("filtred-list",{staticClass:"filtred-list-wrapper",attrs:{query:t.fl.searchQuery,list:t.list},scopedSlots:t._u([{key:"item",fn:function(e){return[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-content",[n("v-list-tile-title",{on:{click:function(n){t.onSelectedItemEvent(e.text)}}},[t._v(t._s(e.text))])],1)],1)]}}])})],1)},staticRenderFns:[]}},241:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-wrapper"},[n("v-card",{staticClass:"list-container"},[t.processedList.length?n("v-list",{attrs:{subheader:""}},[t._l(t.processedList,function(e){return t._t("item",null,{text:e.name})})],2):t._e()],1)],1)},staticRenderFns:[]}},250:function(t,e,n){var i=n(215);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(29)("681dd642",i,!0)},251:function(t,e,n){var i=n(216);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(29)("11f0fcb0",i,!0)},254:function(t,e,n){var i=n(219);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(29)("7d767a74",i,!0)}});