/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-03 16:28:13
 * @LastEditTime: 2021-08-03 16:37:59
 * @LastEditors: zhanghui.chen
 */

import { TaskHeaderStyled } from "./styled";
import { CountComponent } from "../charts/count";
import { TopComponent } from "../charts/top";
import { ActiveComponent } from "../charts/active";

export const HeaderComponent = () => {
  const CountItem1 = {
    title: "任务",
    items: [
      {
        name: "未完成分析",
        value: "70",
        percent: "70.77%",
      },
      {
        name: "已完成分析",
        value: "30",
        percent: "29.23%",
      },
    ],
  };
  const CountItem2 = {
    title: "已分析号码",
    total: {
      label: "总个数",
      value: "2980",
      unit: "个",
    },
    items: [
      {
        name: "未注册",
        value: "980",
        percent: "32.68%",
      },
      {
        name: "已注册",
        value: "2000",
        percent: "67.32%",
      },
    ],
  };
  return (
    <TaskHeaderStyled>
      <div className={"item"}>
        <CountComponent data={CountItem1} />
      </div>
      <div className={"item"}>
        <CountComponent showTotal={true} data={CountItem2} />
      </div>
      <div className={"item"}>
        <TopComponent />
      </div>
      <div className={"item"}>
        <ActiveComponent />
      </div>
    </TaskHeaderStyled>
  );
};
