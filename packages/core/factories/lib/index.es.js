import{ref as t,watch as n,computed as e}from"@vue/composition-api";import{usePersistedState as r}from"@vue-storefront/utils";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function u(t,n,e,r){return new(e||(e=Promise))((function(u,a){function o(t){try{i(r.next(t))}catch(t){a(t)}}function c(t){try{i(r.throw(t))}catch(t){a(t)}}function i(t){t.done?u(t.value):new e((function(n){n(t.value)})).then(o,c)}i((r=r.apply(t,n||[])).next())}))}function a(t,n){var e,r,u,a,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(u=2&a[0]?r.return:a[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,a[1])).done)return u;switch(r=0,u&&(a=[2&a[0],u.value]),a[0]){case 0:case 1:u=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(u=(u=o.trys).length>0&&u[u.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!u||a[1]>u[0]&&a[1]<u[3])){o.label=a[1];break}if(6===a[0]&&o.label<u[1]){o.label=u[1],u=a;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(a);break}u[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(t,o)}catch(t){a=[6,t],r=0}finally{e=u=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function o(r){var o=t(null),c=t(!1);return function(){var t=this;n((function(){return u(t,void 0,void 0,(function(){var t;return a(this,(function(n){switch(n.label){case 0:return r.cart.value||c.value?[3,2]:(c.value=!0,t=r.cart,[4,r.loadCart()]);case 1:t.value=n.sent(),c.value=!1,n.label=2;case 2:return[2]}}))}))}));return{cart:e((function(){return r.cart.value})),isOnCart:function(t){return e((function(){return r.isOnCart(r.cart.value,t)}))},addToCart:function(n,e){return u(t,void 0,void 0,(function(){var t;return a(this,(function(u){switch(u.label){case 0:return c.value=!0,[4,r.addToCart(r.cart.value,n,e)];case 1:return t=u.sent(),r.cart.value=t,c.value=!1,[2]}}))}))},refreshCart:function(){return u(t,void 0,void 0,(function(){var t;return a(this,(function(n){switch(n.label){case 0:return t=r.cart,[4,r.loadCart()];case 1:return t.value=n.sent(),[2]}}))}))},removeFromCart:function(n){return u(t,void 0,void 0,(function(){var t;return a(this,(function(e){switch(e.label){case 0:return c.value=!0,[4,r.removeFromCart(r.cart.value,n)];case 1:return t=e.sent(),r.cart.value=t,c.value=!1,[2]}}))}))},clearCart:function(){return console.log("useCart:clearCart")},updateQuantity:function(n,e){return u(t,void 0,void 0,(function(){var t;return a(this,(function(u){switch(u.label){case 0:return e>0?(c.value=!0,[4,r.updateQuantity(r.cart.value,n,e)]):[3,2];case 1:t=u.sent(),r.cart.value=t,c.value=!1,u.label=2;case 2:return[2]}}))}))},coupon:e((function(){return o.value})),applyCoupon:function(){return console.log("useCart:applyCoupon")},removeCoupon:function(){return console.log("useCart:removeCoupon")},loading:e((function(){return c.value}))}}}function c(n){return function(o){var c=this,i=r(o),l=i.state,s=i.persistedResource,v=t(l||[]),f=t(!1);return{search:function(t){return u(c,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:return l||(f.value=!0),e=v,[4,s(n.categorySearch,t)];case 1:return e.value=r.sent(),f.value=!1,[2]}}))}))},loading:e((function(){return f.value})),categories:e((function(){return v.value}))}}}function i(n){return function(r){var o=this;console.info("SSR Temporarly disbled for product composable https://github.com/DivanteLtd/next/issues/232",r);var c=t([]),i=t(!1),l=t(0);return{products:e((function(){return c.value})),search:function(t){return u(o,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:return i.value=!0,e=c,[4,n.productsSearch(t)];case 1:return e.value=r.sent(),i.value=!1,[2]}}))}))},loading:e((function(){return i.value})),totalProducts:e((function(){return l.value}))}}}export{o as useCartFactory,c as useCategoryFactory,i as useProductFactory};