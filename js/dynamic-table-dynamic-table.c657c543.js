(window.webpackJsonp=window.webpackJsonp||[]).push([["dynamic-table-dynamic-table","dynamic-table-hooks","auth-system-access-columns","dynamic-table-hooks-useCalculate","dynamic-table-hooks-useDragCol","dynamic-table-hooks-useDragRow","dynamic-table-hooks-useExpandLoading"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},"2b19":function(e,t,n){n("23e7")({target:"Object",stat:!0},{is:n("129f")})},"44a3":function(e,t,n){"use strict";n.r(t),n.d(t,"useCalculate",(function(){return u}));var o=n("2909"),r=n("1da1"),a=(n("96cf"),n("159b"),n("b64b"),n("d81d"),n("a9e3"),n("7a23")),c=n("55ac"),u=function(){var e;return{setCalculateRow:function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r,u,i,l,s,d,b,f,p,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.nextTick)();case 2:if(r=n.tableRef,u=n.dataSource,i=void 0===u?[]:u,l=n.columns,s=void 0===l?[]:l,d=n.sumText,b=n.summaryFunc,i.length){t.next=5;break}return t.abrupt("return");case 5:f=r.value.$el.querySelector(".ant-table-tbody"),e||((e=null===(p=f.lastElementChild)||void 0===p?void 0:p.cloneNode(!0)).style.backgroundColor="#f8f8f9",e.style.position="sticky",e.style.zIndex="999",e.style.bottom="0",e.setAttribute("data-row-key",String(Math.random()))),(m=function(t){if(Object(c.b)(b)){var n=b({dataSource:i,columns:s});Object(o.a)(e.children).forEach((function(e,t){e.textContent=n[t],e.style.backgroundColor="inherit"}))}else{var r=Object.keys(i[0]).reduce((function(e,t){var n=i.map((function(e){return e[t]})).reduce((function(e,t){return t+e}),0);return e[t]=isNaN(Number(n))?"N/A":n,e}),{}),a=s.map((function(e){var t;return null!==(t=e.dataIndex)&&void 0!==t?t:e.key}));Object(o.a)(e.children).forEach((function(e,t){e.textContent=0==t?d:r[a[t]],e.style.backgroundColor="inherit"}))}null!=t&&t.length&&Object(o.a)(e.children).forEach((function(e,n){Object.keys(t[n].style||[]).forEach((function(o){var r=t[n].style[o];e.style[r]=t[n].style[r],e.className=t[n].className}))}))})(),f.contains(e)||(f.appendChild(e),setTimeout((function(){var e,t,n=null===(e=r.value.$el.querySelector(".ant-table-tbody"))||void 0===e||null===(t=e.firstElementChild)||void 0===t?void 0:t.children;n&&m(Object(o.a)(n))}),500));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},"6c0e":function(e,t,n){"use strict";n.r(t);var o=n("5530"),r=(n("4de4"),n("7a23"));Object(r.pushScopeId)("data-v-7a42462e");var a=Object(r.createTextVNode)(" 您确定要删除吗？ ");Object(r.popScopeId)();var c,u=n("1da1"),i=n("ade3"),l=(n("2a26"),n("768f")),s=(n("2ef0"),n("9839")),d=(n("288f"),n("cdeb")),b=(n("c68a"),n("0020")),f=(n("96cf"),n("b0c0"),n("7db0"),n("caad"),n("2532"),n("2b19"),n("d3b7"),n("fb6a"),n("b356")),p=n("9720"),m=Object(r.defineComponent)({name:"DynamicTable",components:(c={Table:b.a},Object(i.a)(c,d.a.name,d.a),Object(i.a)(c,s.b.name,s.b),Object(i.a)(c,l.a.name,l.a),Object(i.a)(c,"Option",s.b.Option),c),inheritAttrs:!1,props:{dataSource:{type:Array},columns:{type:Object,required:!0},getListFunc:{type:Function},rowSelection:{type:Object},rowKey:{type:[String,Function]},pageOption:{type:Object,default:function(){return{}}},showSummary:{type:Boolean,default:!1},sumText:{type:String,default:"合计"},summaryFunc:{type:Function},dragColEnable:{type:Boolean,default:!0},dragRowEnable:Boolean},emits:["change","update:pageOption"],setup:function(e,t){var n,a=t.emit,c=(t.slots,Object(r.ref)()),i=Object(f.a)().pageOptions,l=Object(p.useCalculate)().setCalculateRow;Object.assign(i.value,e.pageOption),e.dragColEnable&&Object(p.useDragCol)(e.columns);var s=Object(r.reactive)({expandItemRefs:{},customRow:function(){return{}},tableData:[],actions:(null===(n=e.columns.find((function(e){return[e.dataIndex,e.key].includes("action")})))||void 0===n?void 0:n.actions)||[],loading:!1});Object(r.watch)((function(){return e.dataSource}),(function(e){e&&(s.tableData=e)}),{deep:!0,immediate:!0});var d=function(){var t=Object(u.a)(regeneratorRuntime.mark((function t(){var n,r,a,u,d,b,f,m,O,v,j,g,h,y,w=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=w.length>0&&void 0!==w[0]?w[0]:{},r=w.length>1&&void 0!==w[1]&&w[1],!Object.is(e.dataSource,void 0)||!Object.prototype.toString.call(e.getListFunc).includes("Function")){t.next=14;break}return u=Object(o.a)(Object(o.a)({pageNumber:r?1:i.value.current,pageSize:i.value.pageSize},e.pageOption),n),s.loading=!0,t.next=7,null==e||null===(a=e.getListFunc)||void 0===a?void 0:a.call(e,u).finally((function(){return s.loading=!1}));case 7:d=t.sent,b=d.data,f=d.pageNumber,m=d.pageSize,O=d.total,Object.assign(i.value,{current:~~f,pageSize:~~m,total:~~O}),s.tableData=b;case 14:e.showSummary&&(v=i.value,j=v.pageSize,g=v.current,h=Math.max(j,g*j),y=Object.is(e.dataSource,void 0)?s.tableData:s.tableData.slice(h-j,h),l({columns:e.columns,dataSource:y,tableRef:c,sumText:e.sumText,summaryFunc:e.summaryFunc})),e.dragRowEnable&&(s.customRow=Object(p.useDragRow)(s.tableData));case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();d();var b=function(){var t=Object(u.a)(regeneratorRuntime.mark((function t(n,o){var r,a=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:"",t.prev=1,t.next=4,o({record:n,props:e},(function(){return setTimeout(d)}));case 4:"del"==r&&s.tableData.length<2&&(i.value.current=Math.max(1,i.value.current-1)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(o.a)(Object(o.a)({},Object(r.toRefs)(s)),{},{tableRef:c,pageOptions:i,buttonProps:{size:"small"},actionEvent:b,refreshTableData:d,paginationChange:function(t,n,r,c){var u=c.currentDataSource,l=r.field,s=r.order;i.value=Object(o.a)(Object(o.a)({},i.value),t),d(Object(o.a)(Object(o.a)(Object(o.a)({pageSize:t.pageSize,pageNumber:t.current},e.pageOption),n),{},{field:l,order:s})),a("change",t,n,r,{currentDataSource:u})}})}});n("e49d"),m.render=function(e,t,n,c,u,i){var l=Object(r.resolveComponent)("a-button"),s=Object(r.resolveComponent)("a-popconfirm"),d=Object(r.resolveComponent)("Table"),b=Object(r.resolveDirective)("permission");return Object(r.openBlock)(),Object(r.createBlock)(d,Object(r.mergeProps)({ref:"tableRef",columns:e.columns,loading:e.loading,rowSelection:e.rowSelection,rowKey:e.rowKey,size:"middle","data-source":e.tableData,pagination:e.pageOptions,bordered:"",customRow:e.customRow},e.$attrs,{onChange:e.paginationChange}),Object(r.createSlots)({_:2},[Object(r.renderList)(e.$slots,(function(t,n){return{name:n,fn:Object(r.withCtx)((function(t){return[Object(r.renderSlot)(e.$slots,n,Object(r.normalizeProps)(Object(r.guardReactiveProps)(t)),void 0,!0)]}))}})),Object(r.renderList)(e.columns.filter((function(e){var t;return!(null===(t=e.slots)||void 0===t||!t.customRender)})),(function(t){return{name:t.slots.customRender,fn:Object(r.withCtx)((function(n){var c,u,i,d,f,p,m,O;return[null!==(c=t.slots)&&void 0!==c&&c.customRender&&e.$slots[null===(u=t.slots)||void 0===u?void 0:u.customRender]?Object(r.renderSlot)(e.$slots,null===(i=t.slots)||void 0===i?void 0:i.customRender,Object(r.normalizeProps)(Object(r.mergeProps)({key:0},n)),void 0,!0):(Object(r.openBlock)(),Object(r.createElementBlock)(r.Fragment,{key:1},["action"!==(null===(d=t.slots)||void 0===d?void 0:d.customRender)?(Object(r.openBlock)(),Object(r.createElementBlock)(r.Fragment,{key:0},["component"==t.slotsType?(Object(r.openBlock)(),Object(r.createBlock)(Object(r.resolveDynamicComponent)(null==t||null===(f=t.slotsFunc)||void 0===f?void 0:f.call(t,n.record)),{key:0})):Object(r.createCommentVNode)("",!0),"format"==t.slotsType?(Object(r.openBlock)(),Object(r.createElementBlock)(r.Fragment,{key:1},[Object(r.createTextVNode)(Object(r.toDisplayString)(null==t||null===(p=t.slotsFunc)||void 0===p?void 0:p.call(t,n.record[null!==(m=t.dataIndex)&&void 0!==m?m:t.key],n.record)),1)],64)):Object(r.createCommentVNode)("",!0)],64)):Object(r.createCommentVNode)("",!0),"action"==(null===(O=t.slots)||void 0===O?void 0:O.customRender)?(Object(r.openBlock)(),Object(r.createElementBlock)("div",{key:t.slots.customRender,class:"actions"},[(Object(r.openBlock)(!0),Object(r.createElementBlock)(r.Fragment,null,Object(r.renderList)(e.actions,(function(t,c){return Object(r.openBlock)(),Object(r.createElementBlock)(r.Fragment,null,["button"===t.type?Object(r.withDirectives)((Object(r.openBlock)(),Object(r.createBlock)(l,Object(r.mergeProps)({key:0},Object(o.a)(Object(o.a)({},e.buttonProps),t.props),{key:c,onClick:function(o){return e.actionEvent(n.record,t.func)}}),{default:Object(r.withCtx)((function(){return[Object(r.createTextVNode)(Object(r.toDisplayString)(t.text),1)]})),_:2},1040,["onClick"])),[[b,t.permission]]):Object(r.createCommentVNode)("",!0),"popconfirm"===t.type?(Object(r.openBlock)(),Object(r.createBlock)(s,{key:c,placement:"leftTop",onConfirm:function(o){return e.actionEvent(n.record,t.func,"del")}},{title:Object(r.withCtx)((function(){return[a]})),default:Object(r.withCtx)((function(){return[Object(r.withDirectives)(Object(r.createVNode)(l,Object(r.normalizeProps)(Object(r.guardReactiveProps)(Object(o.a)(Object(o.a)({},e.buttonProps),t.props))),{default:Object(r.withCtx)((function(){return[Object(r.createTextVNode)(Object(r.toDisplayString)(t.text),1)]})),_:2},1040),[[b,t.permission]])]})),_:2},1032,["onConfirm"])):Object(r.createCommentVNode)("",!0)],64)})),256))])):Object(r.createCommentVNode)("",!0)],64))]}))}}))]),1040,["columns","loading","rowSelection","rowKey","data-source","pagination","customRow","onChange"])},m.__scopeId="data-v-7a42462e",t.default=m},"780e":function(e,t,n){"use strict";n.r(t),n.d(t,"useExpandLoading",(function(){return c}));var o=n("1da1"),r=(n("96cf"),n("d3b7"),n("7a23")),a=n("8fe6"),c=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,c,u,i,l,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.expanded,c=t.record,u=t.expandItemEl,i=t.asyncFunc,l=t.params,!n||!c.children||Array.isArray(c.children)){e.next=12;break}if(!u){e.next=11;break}return s=u.closest("td").querySelector(".ant-table-row-expand-icon"),Object(r.render)(Object(r.createVNode)(a.a),s),e.next=7,Object(r.nextTick)();case 7:return s.classList.add("loading-icon"),e.abrupt("return",i(l).finally(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(r.render)(null,s),e.next=3,Object(r.nextTick)();case 3:s.classList.remove("loading-icon");case 4:case"end":return e.stop()}}),e)})))));case 11:return e.abrupt("return",i(l));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"96cd":function(e,t,n){},9720:function(e,t,n){"use strict";n.r(t);var o=n("9bfe");n.d(t,"useDragCol",(function(){return o.useDragCol}));var r=n("da93");n.d(t,"useDragRow",(function(){return r.useDragRow}));var a=n("780e");n.d(t,"useExpandLoading",(function(){return a.useExpandLoading}));var c=n("44a3");n.d(t,"useCalculate",(function(){return c.useCalculate}))},"9bfe":function(e,t,n){"use strict";n.r(t),n.d(t,"useDragCol",(function(){return r}));var o=n("5530"),r=(n("159b"),function(e){var t,n,r,a,c=function(){return a.onmouseup=a.onmousedown=a.onmousemove=null};e.forEach((function(u){var i,l,s=null!==(i=null==u||null===(l=u.customHeaderCell)||void 0===l?void 0:l.call(u,e))&&void 0!==i?i:{};u.customHeaderCell=function(e){return Object(o.a)(Object(o.a)({},s),{},{onmouseenter:function(){var o,u;a=e.title[0].el.closest("th"),null!==(o=r)&&void 0!==o||(r=a.closest(".ant-table-wrapper")),null!==(u=n)&&void 0!==u||(n=r.clientWidth),a.onmousemove=function(e){e.offsetX>this.offsetWidth-10?this.style.cursor="col-resize":this.style.cursor="default",null==t&&(t=this),null!=t.mouseDown&&1==t.mouseDown&&(t.style.cursor="default",t.oldWidth+(e.x-t.oldX)>0&&(t.width=t.oldWidth+(e.x-t.oldX)),t.style.width=t.width,r.style.width=n+(e.x-t.oldX)+"px",t.style.cursor="col-resize")},a.onmousedown=function(e){t=this,e.offsetX>t.offsetWidth-10&&(t.mouseDown=!0,t.oldX=e.x,t.oldWidth=t.offsetWidth)},a.onmouseup=c,r.onmouseup=function(){c(),null==t&&(t=this),t.mouseDown=!1,t.style.cursor="default",n=r.clientWidth}},onmouseup:function(){return c}})}}))})},b356:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("5530"),r=n("7a23");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.ref)(Object(o.a)({current:1,pageSize:10,total:0,pageSizeOptions:["10","20","30","40","50"],showQuickJumper:!0,showSizeChanger:!0,showTotal:function(e){return"共 ".concat(e," 条")},onChange:function(t,n){var o;return null==e||null===(o=e.pageChange)||void 0===o?void 0:o.call(e,t,n)},onShowSizeChange:function(t,n){var o;return null==e||null===(o=e.pageChange)||void 0===o?void 0:o.call(e,t,n)}},e)),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.assign(t.value,e)};return{pageOptions:t,updatePageOption:n}}},da93:function(e,t,n){"use strict";function o(e){var t,n;return function(o){return{draggable:!0,ondrag:function(e){t=o},ondrop:function(e){n=o},ondragend:function(o){if(t!==n){var r=e.indexOf(t),a=e.indexOf(n),c=[e[a],e[r]];e[r]=c[0],e[a]=c[1]}},ondragover:function(e){return!1}}}}n.r(t),n.d(t,"useDragRow",(function(){return o}))},e49d:function(e,t,n){"use strict";n("96cd")}}]);