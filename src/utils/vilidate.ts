/*
 * @Date: 2020-11-24 14:00:44
 * @LastEditors: zhanghui.chen
 * @LastEditTime: 2021-08-04 16:19:48
 */
// 验证手机号
export const isPhone = (val: string) => {
  if (/^1[3456789]\d{9}$/.test(trim(val))) {
    return true;
  }
  return false;
};

// 验证邮箱格式
export const isEmail = (val: string) => {
  if (
    /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(
      trim(val)
    )
  ) {
    return true;
  }
  return false;
};

// 验证ip
export const isIp = (val: string) => {
  if (/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(trim(val))) {
    if (
      Number(RegExp.$1) < 256 &&
      Number(RegExp.$2) < 256 &&
      Number(RegExp.$3) < 256 &&
      Number(RegExp.$4) < 256
    )
      return true;
  }
  return false;
};

// 删除左右两侧的空格
export const trim = (str: string) => {
  return str.replace(/(^\s*)|(\s*$)/g, "");
};

// 判断一个数字是不是浮点型
export const isFloat = (str: string) => {
  return /^-?\d*\.\d+$/.test(str);
};

//匹配手机号 与 固话
export const phoneAndFixedLine = (str: string) => {
  return /^((0\d{2,3}\d{7,8})|(1[3584]\d{9}))$/.test(str);
};

// 去除所有空格
export const removeAllSpace = (str: string) => {
  return str.replace(/\s+/g, "");
};

// 去除所有中文
export const removeChinese = (str: string) => {
  return str.replace(/[\u4e00-\u9fa5]+/, "");
};

// 去除所有非数字
export const removeNotNumber = (str: string) => {
  return str.replace(/\D/, "");
};

// 去除特殊字符
export const removeSpecialStr = (str: string) => {
  let s = str.replace(/\\/g, "/"); // 把反斜杠转为正斜杠
  var pattern = new RegExp(
    "[`~@#$%\"\"^&*()={}':;',\\[\\]<>/?~!！@#￥……&*（）——|{}【】《》+=_‘；：”“'。，、？]"
  );
  var rs = "";
  for (var i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, "");
  }
  return rs;
};
