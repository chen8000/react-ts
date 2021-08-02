/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:23:14
 * @LastEditTime: 2021-08-02 16:38:04
 * @LastEditors: zhanghui.chen
 */

import { TaskContainerStyled, TaskHeaderStyled } from "./styled";
import { CountComponent } from "./components/count";
import { TopComponent } from "./components/top";

export const TaskPage = () => {
  return (
    <TaskContainerStyled>
      {/* header */}
      <TaskHeaderStyled>
        <div className={"item"}>
          <CountComponent
            data={{
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
            }}
          />
        </div>
        <div className={"item"}>
          <CountComponent
            showTotal={true}
            data={{
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
            }}
          />
        </div>
        <div className={"item"}>
          <TopComponent />
        </div>
        <div className={"item"}>4</div>
      </TaskHeaderStyled>
      {/* list */}
      <div></div>
    </TaskContainerStyled>
  );
};
