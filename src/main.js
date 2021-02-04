import '@babel/polyfill';
import Vue from 'vue';
//import vuetify from './plugins/vuetify';
import './plugins/vuetify-extra';
import App from './App.vue';
import router from './router/index';
import i18n from './i18n';
/*require('../src/assets/assets/css/preloader.css');
require('../src/assets/assets/css/style.css');
require('../src/assets/modules/materialize/materialize.min.css');
require('../src/assets/modules/fonts/mdi/materialdesignicons.min.css');
require('../src/assets/modules/perfect-scrollbar/perfect-scrollbar.css');



require('../src/assets/assets/css/style.css');
require('../src/assets/modules/jquery/jquery-2.2.4.min.js');
require('../src/assets/modules/materialize/materialize.js');
require('../src/assets/modules/perfect-scrollbar/perfect-scrollbar.min.js');
require('../src/assets/modules/app/init.js');
require('../src/assets/modules/app/settings.js');
require('../src/assets/modules/app/scripts.js');
require('../src/assets/assets/js/variables.js');*/


Vue.config.productionTip = false

const init = () => {
  new Vue({
   // vuetify,
    router,
    i18n,
    render: h => h(App)
  }).$mount('#app')
};

// Wait for the deviceready event to start the render
document.addEventListener("deviceready", () => {
  // eslint-disable-next-line
  console.log("Ready, Render the App");
  $("#tabs-swipe-demo").tabs({ swipeable: true });
  init();
});

// If we are not in Cordova, manually trigger the deviceready event
const isCordovaApp = (typeof window.cordova !== "undefined");
if (!isCordovaApp){
  document.dispatchEvent(new CustomEvent("deviceready", {}));
}