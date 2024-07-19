"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
<<<<<<< HEAD
=======
  "./pages/mine/mine.js";
<<<<<<< HEAD
  "./pages/toplist/toplist.js";
  "./pages/songlist/songlist.js";
=======
>>>>>>> 9faf4a4b05d61c6715c4b29bbdf54e16823c734b
>>>>>>> main
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
