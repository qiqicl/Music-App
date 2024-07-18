"use strict";
const common_vendor = require("../../common/vendor.js");
<<<<<<< HEAD
const common_assets = require("../../common/assets.js");
=======
>>>>>>> 9faf4a4b05d61c6715c4b29bbdf54e16823c734b
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {}
};
<<<<<<< HEAD
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.t($data.title)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
=======
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2)();
}
const _easycom_uni_icons = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "bars",
      size: "30"
    }),
    b: common_vendor.o(_ctx.search),
    c: common_vendor.o(_ctx.input)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
>>>>>>> 9faf4a4b05d61c6715c4b29bbdf54e16823c734b
wx.createPage(MiniProgramPage);
