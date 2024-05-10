CNVS.AjaxTrigger = function() {
	var __core = SEMICOLON.Core;

	var _load = function(params) {
		fetch(params.loader).then( function(response) {
			return response.text();
		}).then( function(html) {
			_scripts(params.loadCSS, params.loadJS);

			var domParser = new DOMParser();
			var parsedHTML = domParser.parseFromString(html, 'text/html');

			if( params.placement == 'append' ) {
				params.container?.insertAdjacentHTML('beforeend', parsedHTML.body.innerHTML);
			} else {
				params.container?.insertAdjacentHTML('afterbegin', parsedHTML.body.innerHTML);
			}

			if( params.triggerHide == 'true' ) {
				params.trigger.classList.add('d-none');
			}

			__core.runContainerModules(params.container);
			__core.viewport();

			if( params.triggerDisable == 'true' ) {
				setTimeout( function() {
					params.trigger.onclick = function(e) {
						e.stopPropagation();
						e.preventDefault();

						return false;
					};
				}, 1000);
			}
		}).catch( function(err) {
			var errorDIV = document.createElement("div");
			errorDIV.classList.add( 'd-inline-block', 'text-danger', 'me-3' );
			errorDIV.innerText = 'Content Cannot be Loaded!';
			params.container?.prepend( errorDIV, ': ' + err );
		});
	};

	var _scripts = function(loadCSS=false, loadJS=false) {
		if( loadCSS ) {
			loadCSS = JSON.parse(loadCSS);
			if( loadCSS.length > 0 ) {
				loadCSS.forEach( function(css) {
					__core.loadCSS(css);
				});
			}
		}

		if( loadJS ) {
			loadJS = JSON.parse(loadJS);
			if( loadJS.length > 0 ) {
				loadJS.forEach( function(js) {
					__core.loadJS(js);
				});
			}
		}
	};

	return {
		init: function(selector) {
			if( __core.getSelector(selector, false, false).length < 1 ){
				return true;
			}

			__core.initFunction({ class: 'has-plugin-ajaxtrigger', event: 'pluginAjaxTriggerReady' });

			selector = __core.getSelector( selector, false );
			if( selector.length < 1 ){
				return true;
			}

			selector.forEach( function(el) {
				var params = {
					trigger: el,
					loader: el.getAttribute('data-ajax-loader'),
					triggerType: el.getAttribute('data-ajax-trigger-type') || 'click',
					loadDelay: el.getAttribute('data-ajax-load-delay') || 2222,
					container: document.querySelector( el.getAttribute('data-ajax-container') ),
					contentPlacement: el.getAttribute('data-ajax-insertion') || 'append',
					triggerHide: el.getAttribute('data-ajax-trigger-hide') || 'true',
					triggerDisable: el.getAttribute('data-ajax-trigger-disable') || 'true',
					loadCSS: el.getAttribute('data-ajax-loadcss') || false,
					loadJS: el.getAttribute('data-ajax-loadjs') || false,
				}

				if( params.triggerType == 'load' ) {
					setTimeout( function() {
						_load(params);
					}, Number(params.loadDelay));
				} else {
					params.trigger.onclick = function(e) {
						e.preventDefault();
						_load(params);
					};
				}
			});
		}
	};
}();
