"use strict";var l=Object.defineProperty;var r=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var u=(o,e)=>{for(var i in e)l(o,i,{get:e[i],enumerable:!0})},f=(o,e,i,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of d(e))!h.call(o,a)&&a!==i&&l(o,a,{get:()=>e[a],enumerable:!(n=r(e,a))||n.enumerable});return o};var A=o=>f(l({},"__esModule",{value:!0}),o);var w={};u(w,{default:()=>s});module.exports=A(w);var t=require("@raycast/api"),c=require("react"),p=require("react/jsx-runtime");function s(){let[o,e]=(0,c.useState)([]);return(0,c.useEffect)(()=>{async function i(){e(await(0,t.getApplications)())}i()},[]),(0,p.jsx)(t.List,{isLoading:o.length===0,searchBarPlaceholder:"Filter applications by name...",children:o.map(i=>(0,p.jsx)(m,{application:i},i.bundleId))})}function m(o){let e=o.application;return(0,p.jsx)(t.List.Item,{title:e.name,icon:{fileIcon:e.path},actions:(0,p.jsx)(t.ActionPanel,{children:(0,p.jsx)(t.Action,{title:`Open with ${e.name}`,onAction:async()=>{try{let i=await(0,t.getSelectedFinderItems)();if(await(0,t.closeMainWindow)({clearRootSearch:!0,popToRootType:t.PopToRootType.Suspended}),i.length!=0)for(let n=0;n<i.length;n++)await(0,t.open)(i[n].path,e.bundleId);else await(0,t.showHUD)("\u26A0\uFE0F  No Finder selection to open.")}catch{await(0,t.showHUD)("\u26A0\uFE0F  No Finder selection to open.")}(0,t.closeMainWindow)(),(0,t.popToRoot)({clearSearchBar:!0})}})})},e.bundleId)}0&&(module.exports={});