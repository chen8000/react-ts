/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-23 18:23:14
 * @LastEditTime: 2021-07-27 18:50:54
 * @LastEditors: zhanghui.chen
 */

import { TaskContainerStyled, TaskHeaderStyled } from "./styled";
import { CountComponent } from "./components/count";

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
                  title: "已完成分析",
                  num1: "50",
                  num2: "29.23%",
                },
                {
                  title: "未完成分析",
                  num1: "50",
                  num2: "70.77%",
                },
              ],
            }}
          />
        </div>
        <div className={"item"}>
          <CountComponent
            data={{
              title: "已分析号码",
              items: [
                {
                  title: "已注册",
                  num1: "2000",
                  num2: "67.32%",
                },
                {
                  title: "未完成分析",
                  num1: "980",
                  num2: "32.68%",
                },
              ],
            }}
          />
        </div>
        <div className={"item"}>3</div>
        <div className={"item"}>4</div>
      </TaskHeaderStyled>
      {/* list */}
      <div></div>
    </TaskContainerStyled>
  );
};
