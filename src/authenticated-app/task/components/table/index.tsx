/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-04 19:26:55
 * @LastEditTime: 2021-08-06 11:06:52
 * @LastEditors: zhanghui.chen
 */
import {
  TaskTableContainerStyled,
  SearchBarStyled,
  BtnGroupStyled,
  TableContainer,
} from "./styled";
import { Form, Input, Select, Button, Table, Dropdown, Menu } from "antd";
import { PaginationComponent as Pagination } from "components";
import { TableItemsTypes } from "./types";
import { useTr } from "customHooks";
import { useRef, useEffect, useState } from "react";
import _ from "lodash";
import { CreateTaskComponent } from "./components/createTask";
export const TableComponent = () => {
  const tableRef = useRef<HTMLDivElement | null>(null);
  const trs = useTr();
  const [pageSize, setPageSize] = useState(1);
  const [renderData, setRenderData] = useState<TableItemsTypes[][]>([[]]);
  const [current, setCurrent] = useState(1); // 当前页
  const data: TableItemsTypes[] = [];

  // 计算表格
  useEffect(() => {
    setPageSize(trs({ table: tableRef.current as HTMLDivElement, h: 57 }) - 2);
  }, [tableRef]);

  // 数据分页
  useEffect(() => {
    pageSize > 1 && setRenderData(_.chunk(data, pageSize));
  }, [pageSize]);

  const areas = [
    { label: "Beijing", value: "Beijing" },
    { label: "Shanghai", value: "Shanghai" },
  ];
  const columns = [
    {
      title: "#",
      render: (text: string, record: any, index: number) =>
        (current - 1) * pageSize + index + 1,
    },
    {
      title: "任务名称",
      dataIndex: "task_name",
      // render: (text: string) => <a>{text}</a>,
    },
    {
      title: "创建人",
      dataIndex: "creater",
    },
    {
      title: "上传时间",
      dataIndex: "upload_time",
    },
    {
      title: "号码数量",
      dataIndex: "numbers",
    },
    {
      title: "完成分析率",
      dataIndex: "finish",
    },
    {
      title: "已完成分析",
      dataIndex: "completed",
    },
    {
      title: "未完成分析",
      dataIndex: "undone",
    },
    {
      title: "任务分析状态",
      dataIndex: "task_type",
      render: (text: string) => {
        let color = "#A1ACBB";
        switch (text) {
          case "已完成":
            color = "#7BC5F3";
            break;
          case "分析中":
            color = "#FFE28C";
            break;
        }
        return <span style={{ color }}>{text}</span>;
      },
    },
    {
      title: "备注",
      dataIndex: "remark",
    },
    {
      title: "操作",
      render: (text: string, record: TableItemsTypes) => {
        return <Button ghost>查看详情</Button>;
      },
    },
  ];

  const datas = {
    task_name: "号码分析",
    creater: "用户名2",
    upload_time: "2021.04.13 16:44:44",
    numbers: "10",
    finish: "100%",
    completed: "23",
    undone: "77",
    task_type: "分析中",
    remark: "--",
  };

  for (let i = 0; i < 195; i++) {
    data.push({
      ...datas,
      task_name: datas.task_name + i,
      key: i,
    });
  }

  const rowSelection = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: TableItemsTypes[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    preserveSelectedRowKeys: true,
  };

  return (
    <>
      <TaskTableContainerStyled>
        <SearchBarStyled>
          <Form size={"middle"} layout="inline">
            <Form.Item>
              <Input
                style={{ minWidth: "2.6rem" }}
                placeholder="请输入任务名称进行搜索"
                suffix={<i className={"iconfont iconsousuo1"}></i>}
              />
            </Form.Item>
            <Form.Item label="任务分析状态">
              <Select
                style={{ minWidth: "1rem" }}
                options={areas}
                defaultValue={"全部"}
              >
                <Select.Option value="全部">全部</Select.Option>
              </Select>
            </Form.Item>
          </Form>
          {/*  */}
          <BtnGroupStyled>
            {/* 新建任务 按钮及窗口*/}
            <CreateTaskComponent>新建任务</CreateTaskComponent>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item>导出所选</Menu.Item>
                  <Menu.Item>导出全部</Menu.Item>
                </Menu>
              }
            >
              <Button
                className={"icon-btn"}
                icon={<i className={"iconfont icondaochu"} />}
              >
                EXCEL导出任务
              </Button>
            </Dropdown>
          </BtnGroupStyled>
        </SearchBarStyled>
        <TableContainer ref={tableRef}>
          <Table
            rowSelection={{
              ...rowSelection,
            }}
            columns={columns}
            dataSource={renderData[current - 1]}
            size={"middle"}
            pagination={false}
          />
          <Pagination
            onChange={(page) => setCurrent(page)}
            total={data.length - 1}
            pageSize={pageSize}
          />
        </TableContainer>
      </TaskTableContainerStyled>
    </>
  );
};
