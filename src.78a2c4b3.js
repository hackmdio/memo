parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var a=document.getElementById("satisfaction").getContext("2d"),e=new Chart(a,{type:"horizontalBar",data:{labels:["滿意度"],datasets:[{label:"MemoMD",backgroundColor:"#1cd1a4",borderColor:"#1cd1a4",data:[98]},{label:"HackMD",backgroundColor:"#1cd1a4)",borderColor:"#1cd1a4)",data:[75]}]},options:{scales:{xAxes:[{ticks:{suggestedMin:0,suggestedMax:100}}]}}});a=document.getElementById("usability").getContext("2d"),e=new Chart(a,{type:"horizontalBar",data:{labels:["易用性"],datasets:[{label:"MemoMD",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[100]},{label:"HackMD",backgroundColor:"rgb(255, 99, 132))",borderColor:"rgb(255, 99, 132))",data:[150]}]},options:{scales:{xAxes:[{ticks:{suggestedMin:0,suggestedMax:180}}]}}}),a=document.getElementById("perf").getContext("2d"),e=new Chart(a,{type:"horizontalBar",data:{labels:["延遲"],datasets:[{label:"MemoMD",backgroundColor:"#1c64d1",borderColor:"#1c64d1",data:[5]},{label:"HackMD",backgroundColor:"#1c64d1)",borderColor:"#1c64d1)",data:[1e-4]}]},options:{scales:{xAxes:[{ticks:{suggestedMin:0,suggestedMax:7}}]}}});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/memo/src.78a2c4b3.js.map