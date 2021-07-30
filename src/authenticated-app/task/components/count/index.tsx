/*
 * @Author: zhanghui.chen
 * @Date: 2021-07-27 18:00:05
 * @LastEditTime: 2021-07-30 17:43:14
 * @LastEditors: zhanghui.chen
 */
import { CountStyled } from "./styled";
import { CountPropsTypes } from "./types";
export const CountComponent = ({ data }: CountPropsTypes) => {
  return (
    <CountStyled>
      <h3 className={"title"}>{data.title}</h3>
      <div className={"counts"}>
        {data.items.map((item) => (
          <div className={"count-item"} key={item.title}>
            <p>{item.title}</p>
            <div>
              <span className={"num1"}>{item.num1}</span>个
              <span className={"num2"}>{item.num2}</span>
            </div>
          </div>
        ))}
      </div>
    </CountStyled>
  );
};
