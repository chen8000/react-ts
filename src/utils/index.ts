/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 16:34:21
 * @LastEditTime: 2021-07-22 17:10:45
 * @LastEditors: zhanghui.chen
 */

export const remJs = (psd: number) => {
  setRootFontSize(psd);
  window.addEventListener(
    "resize",
    () => {
      setRootFontSize(psd);
    },
    false
  );
};

function setRootFontSize(psd: number) {
  let docWidth = document.documentElement.getBoundingClientRect().width;
  document.documentElement.style.fontSize = (docWidth / psd) * 100 + "px";
}
