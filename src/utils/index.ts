/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 16:34:21
 * @LastEditTime: 2021-08-04 18:40:33
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

// 获取body的宽度和高度
export const getBodyWH = () => {
  return {
    width: document.documentElement.clientWidth || document.body.clientWidth,
    height: document.documentElement.clientHeight || document.body.clientHeight,
  };
};

/*
10 
-----------------------------------------------------
|
|       获取元素距离浏览器顶部的距离
| 
-----------------------------------------------------
*/
export const getElemTop = (elem: HTMLDivElement) => {
  let elemTop = elem.offsetTop; //获得elem元素距相对定位的父元素的top
  elem = elem.offsetParent as HTMLDivElement; //将elem换成起相对定位的父元素

  while (elem != null) {
    //只要还有相对定位的父元素
    /*获得父元素 距他父元素的top值,累加到结果中 */
    elemTop += elem.offsetTop;
    //再次将elem换成他相对定位的父元素上;
    elem = elem.offsetParent as HTMLDivElement;
  }
  return elemTop;
};
