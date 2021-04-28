(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ "./node_modules/downloadjs/download.js":
/*!*********************************************!*\
  !*** ./node_modules/downloadjs/download.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {

	return function download(data, strFileName, strMimeType) {

		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function(a){return String(a);},
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
			myBlob= myBlob.call ? myBlob.bind(self) : Blob ;
	  
		if(String(this)==="true"){ //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload=[payload, mimeType];
			mimeType=payload[0];
			payload=payload[1];
		}


		if(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
		  	if(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:
        		var ajax=new XMLHttpRequest();
        		ajax.open( "GET", url, true);
        		ajax.responseType = 'blob';
        		ajax.onload= function(e){ 
				  download(e.target.response, fileName, defaultMime);
				};
        		setTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:
			    return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)){
		
			if(payload.length > (1024*1024*1.999) && myBlob !== toString ){
				payload=dataUrlToBlob(payload);
				mimeType=payload.type || defaultMime;
			}else{			
				return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload) ; // everyone else can save dataURLs un-processed
			}
			
		}else{//not data url, is it a string with special needs?
			if(/([\x80-\xff])/.test(payload)){			  
				var i=0, tempUiArr= new Uint8Array(payload.length), mx=tempUiArr.length;
				for(i;i<mx;++i) tempUiArr[i]= payload.charCodeAt(i);
			 	payload=new myBlob([tempUiArr], {type: mimeType});
			}		  
		}
		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], {type: mimeType}) ;


		function dataUrlToBlob(strUrl) {
			var parts= strUrl.split(/[:;,]/),
			type= parts[1],
			decoder= parts[2] == "base64" ? atob : decodeURIComponent,
			binData= decoder( parts.pop() ),
			mx= binData.length,
			i= 0,
			uiArr= new Uint8Array(mx);

			for(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);

			return new myBlob([uiArr], {type: type});
		 }

		function saver(url, winMode){

			if ('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function() {
					anchor.click();
					document.body.removeChild(anchor);
					if(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				if(/^data:/.test(url))	url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if(!window.open(url)){ // popup blocked, offer direct download:
					if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")){ location.href=url; }
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if(!winMode && /^data:/.test(url)){ // force a mime that will download:
				url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src=url;
			setTimeout(function(){ document.body.removeChild(f); }, 333);

		}//end saver




		if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if(self.URL){ // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		}else{
			// handle non-Blob()+non-URL browsers:
			if(typeof blob === "string" || blob.constructor===toString ){
				try{
					return saver( "data:" +  mimeType   + ";base64,"  +  self.btoa(blob)  );
				}catch(y){
					return saver( "data:" +  mimeType   + "," + encodeURIComponent(blob)  );
				}
			}

			// Blob but not URL support:
			reader=new FileReader();
			reader.onload=function(e){
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
}));


/***/ }),

/***/ "./node_modules/vue-json-excel/JsonExcel.vue":
/*!***************************************************!*\
  !*** ./node_modules/vue-json-excel/JsonExcel.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JsonExcel_vue_vue_type_template_id_fb865680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JsonExcel.vue?vue&type=template&id=fb865680& */ "./node_modules/vue-json-excel/JsonExcel.vue?vue&type=template&id=fb865680&");
/* harmony import */ var _JsonExcel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JsonExcel.vue?vue&type=script&lang=js& */ "./node_modules/vue-json-excel/JsonExcel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JsonExcel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JsonExcel_vue_vue_type_template_id_fb865680___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JsonExcel_vue_vue_type_template_id_fb865680___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-json-excel/JsonExcel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-json-excel/JsonExcel.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./node_modules/vue-json-excel/JsonExcel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_JsonExcel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib??vue-loader-options!./JsonExcel.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-json-excel/JsonExcel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_JsonExcel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-json-excel/JsonExcel.vue?vue&type=template&id=fb865680&":
/*!**********************************************************************************!*\
  !*** ./node_modules/vue-json-excel/JsonExcel.vue?vue&type=template&id=fb865680& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_JsonExcel_vue_vue_type_template_id_fb865680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../vue-loader/lib??vue-loader-options!./JsonExcel.vue?vue&type=template&id=fb865680& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-json-excel/JsonExcel.vue?vue&type=template&id=fb865680&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_JsonExcel_vue_vue_type_template_id_fb865680___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_JsonExcel_vue_vue_type_template_id_fb865680___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-json-excel/JsonExcel.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-json-excel/JsonExcel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! downloadjs */ "./node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    // mime type [xls, csv]
    type: {
      type: String,
      default: "xls"
    },
    // Json to download
    data: {
      type: Array,
      required: false,
      default: null
    },
    // fields inside the Json Object that you want to export
    // if no given, all the properties in the Json are exported
    fields: {
      type: Object,
      required: false
    },
    // this prop is used to fix the problem with other components that use the
    // variable fields, like vee-validate. exportFields works exactly like fields
    exportFields: {
      type: Object,
      required: false
    },
    // Use as fallback when the row has no field values
    defaultValue: {
      type: String,
      required: false,
      default: ""
    },
    // Title(s) for the data, could be a string or an array of strings (multiple titles)
    title: {
      default: null
    },
    // Footer(s) for the data, could be a string or an array of strings (multiple footers)
    footer: {
      default: null
    },
    // filename to export
    name: {
      type: String,
      default: "data.xls"
    },
    fetch: {
      type: Function,
    },
    meta: {
      type: Array,
      default: () => []
    }, 
    worksheet: {
      type: String, 
      default: "Sheet1"
    },
    //event before generate was called
    beforeGenerate:{
      type: Function,
    },
    //event before download pops up
    beforeFinish:{
      type: Function,
    },
  },
  computed: {
    // unique identifier
    idName() {
      var now = new Date().getTime();
      return "export_" + now;
    },

    downloadFields() {
      if (this.fields !== undefined) return this.fields;

      if (this.exportFields !== undefined) return this.exportFields;
    }
  },
  methods: {
    async generate() {
      if(typeof this.beforeGenerate === 'function'){
        await this.beforeGenerate();
      }
      let data = this.data;
      if(typeof this.fetch === 'function' || !data)
         data = await this.fetch();

      if (!data || !data.length) {
        return;
      }

      let json = this.getProcessedJson(data, this.downloadFields);
      if (this.type === "html") {
        // this is mainly for testing
        return this.export(
          this.jsonToXLS(json),
          this.name.replace(".xls", ".html"),
          "text/html"
        );
      } else if (this.type === "csv") {
        return this.export(
          this.jsonToCSV(json),
          this.name.replace(".xls", ".csv"),
          "application/csv"
        );
      }
      return this.export(
        this.jsonToXLS(json),
        this.name,
        "application/vnd.ms-excel"
      );
    },
    /*
		Use downloadjs to generate the download link
		*/
    export:async function(data, filename, mime) {
      let blob = this.base64ToBlob(data, mime);
      if(typeof this.beforeFinish === 'function')
        await this.beforeFinish();
      downloadjs__WEBPACK_IMPORTED_MODULE_0___default()(blob, filename, mime);
    },
    /*
		jsonToXLS
		---------------
		Transform json data into an xml document with MS Excel format, sadly
		it shows a prompt when it opens, that is a default behavior for
		Microsoft office and cannot be avoided. It's recommended to use CSV format instead.
		*/
    jsonToXLS(data) {
      let xlsTemp =
        '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>';
      let xlsData = "<thead>";
      const colspan = Object.keys(data[0]).length;
      let _self = this;

      //Header
      if (this.title != null) {
        xlsData += this.parseExtraData(
          this.title,
          '<tr><th colspan="' + colspan + '">${data}</th></tr>'
        );
      }

      //Fields
      xlsData += "<tr>";
      for (let key in data[0]) {
        xlsData += "<th>" + key + "</th>";
      }
      xlsData += "</tr>";
      xlsData += "</thead>";

      //Data
      xlsData += "<tbody>";
      data.map(function(item, index) {
        xlsData += "<tr>";
        for (let key in item) {
          xlsData += "<td>" + _self.valueReformattedForMultilines(item[key]) + "</td>";
        }
        xlsData += "</tr>";
      });
      xlsData += "</tbody>";

      //Footer
      if (this.footer != null) {
        xlsData += "<tfoot>";
        xlsData += this.parseExtraData(
          this.footer,
          '<tr><td colspan="' + colspan + '">${data}</td></tr>'
        );
        xlsData += "</tfoot>";
      }

      return xlsTemp.replace("${table}", xlsData).replace("${worksheet}", this.worksheet);
    },
    /*
		jsonToCSV
		---------------
		Transform json data into an CSV file.
		*/
    jsonToCSV(data) {
      var csvData = [];
      //Header
      if (this.title != null) {
        csvData.push(this.parseExtraData(this.title, "${data}\r\n"));
      }
      //Fields
      for (let key in data[0]) {
        csvData.push(key);
        csvData.push(",");
      }
      csvData.pop();
      csvData.push("\r\n");
      //Data
      data.map(function(item) {
        for (let key in item) {
          let escapedCSV = '=\"' + item[key] + '\"'; // cast Numbers to string
          if (escapedCSV.match(/[,"\n]/)) {
            escapedCSV = '"' + escapedCSV.replace(/\"/g, '""') + '"';
          }
          csvData.push(escapedCSV);
          csvData.push(",");
        }
        csvData.pop();
        csvData.push("\r\n");
      });
      //Footer
      if (this.footer != null) {
        csvData.push(this.parseExtraData(this.footer, "${data}\r\n"));
      }
      return csvData.join("");
    },
    /*
		getProcessedJson
		---------------
		Get only the data to export, if no fields are set return all the data
		*/
    getProcessedJson(data, header) {
      let keys = this.getKeys(data, header);
      let newData = [];
      let _self = this;
      data.map(function(item, index) {
        let newItem = {};
        for (let label in keys) {
          let property = keys[label];
          newItem[label] = _self.getValue(property, item);
        }
        newData.push(newItem);
      });

      return newData;
    },
    getKeys(data, header) {
      if (header) {
        return header;
      }

      let keys = {};
      for (let key in data[0]) {
        keys[key] = key;
      }
      return keys;
    },
    /*
		parseExtraData
		---------------
		Parse title and footer attribute to the csv format
		*/
    parseExtraData(extraData, format) {
      let parseData = "";
      if (Array.isArray(extraData)) {
        for (var i = 0; i < extraData.length; i++) {
          parseData += format.replace("${data}", extraData[i]);
        }
      } else {
        parseData += format.replace("${data}", extraData);
      }
      return parseData;
    },

    getValue(key, item) {
      const field = typeof key   !== "object" ? key : key.field;
      let indexes = typeof field !== "string" ? []  : field.split(".");
      let value   = this.defaultValue;
    
      if (!field)
	      value = item;
      else if( indexes.length > 1 )
        value = this.getValueFromNestedItem(item, indexes);
      else
        value = this.parseValue(item[field]);
      
      if( key.hasOwnProperty('callback'))
        value = this.getValueFromCallback(value, key.callback);
      
      return value;
    },

    /*
    convert values with newline \n characters into <br/>
    */
    valueReformattedForMultilines(value) {
      if (typeof(value)=="string") return(value.replace(/\n/ig,"<br/>"));
      else return(value);
    },

    getValueFromNestedItem(item, indexes){
      let nestedItem = item;
      for (let index of indexes) {
        if(nestedItem)
          nestedItem = nestedItem[index];
      }
      return this.parseValue(nestedItem);
    },

    getValueFromCallback(item, callback){
      if(typeof callback !== "function")
        return this.defaultValue
      const value = callback(item);
      return this.parseValue(value);
    },
    parseValue(value){
      return value || value === 0 || typeof value === 'boolean'
          ? value
          : this.defaultValue;
    },
    base64ToBlob(data, mime) {
      let base64 = window.btoa(window.unescape(encodeURIComponent(data)));
      let bstr = atob(base64);
      let n = bstr.length;
      let u8arr = new Uint8ClampedArray(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    }
  } // end methods
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-json-excel/JsonExcel.vue?vue&type=template&id=fb865680&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-json-excel/JsonExcel.vue?vue&type=template&id=fb865680& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: _vm.idName }, on: { click: _vm.generate } },
    [
      _vm._t("default", [_vm._v("\n\t\tDownload " + _vm._s(_vm.name) + "\n\t")])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);