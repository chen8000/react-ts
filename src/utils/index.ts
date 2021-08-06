/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-22 16:34:21
 * @LastEditTime: 2021-08-06 16:15:37
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

/*
2. 
------------------------------------------------------
|
|   1-100 进度
|     inter(
|       // 第一个数组里是卡住的数字节点
|       // 第二个数组是速度
|       // [[32, 55, 63, 71, 85, 98], [100, 300, 160, 100, 50, 700]],
|       s => {
|         // s 是数字
|         this.loadingNum = s;
|       },
|       () => {
|         // 100 %
|         this.hideShow();
|       }
|     );
|
------------------------------------------------------
*/

export const inter = (
  arr: number[][],
  s: (s: number) => void,
  callback?: () => void
) => {
  let t: NodeJS.Timeout,
    num = 0,
    speedNum = 20;
  let interval = () => {
    num++;
    s(num);
    let index = arr[0].findIndex((value) => value === num);
    if (index >= 0) {
      clearInterval(t);
      t = setInterval(interval, arr[1][index]);
    }
    // 停止
    if (num === 60) {
      clearInterval(t);
      callback && callback(); // 回调函数
    }
  };
  t = setInterval(interval, speedNum);
};
