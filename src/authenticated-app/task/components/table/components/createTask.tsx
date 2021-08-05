/*
 * @Author: zhanghui.chen
 * @Date: 2021-08-05 12:23:11
 * @LastEditTime: 2021-08-05 19:35:58
 * @LastEditors: zhanghui.chen
 */
import {
  Modal,
  Button,
  Form,
  Input,
  Select,
  Upload,
  Table,
  message,
  Progress,
} from "antd";
import { useState } from "react";
import { CreateModalTypes } from "./types";
import {
  CustomTitle,
  BtnGroup,
  CreateContainer,
  TemplateContainer,
} from "./styled";
import { RemarkComponent } from "components/remark";
import { useForm } from "antd/es/form/Form";

const { Item } = Form;

export const CreateTaskComponent = ({ children }: CreateModalTypes) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [addNumberState, setAddNumberState] = useState("one"); // 默认选中多个
  const [uploadValue, setUploadValue] = useState("点击上传文件");
  const [form] = useForm();

  // 上传中、完成、失败都会调用这个函数。
  const onUploadChange = (info: any) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      setUploadValue(info.file.name);
      message.success(`${info.file.name} 上传成功`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} 上传失败`);
    }
  };

  // 提交数据
  const onSubmit = () => {
    console.log(form.getFieldsValue());
  };

  return (
    <>
      <Button
        className={"icon-btn"}
        icon={<i className={"iconfont iconxinjian"} />}
        onClick={() => setIsModalVisible(true)}
      >
        {children}
      </Button>

      <Modal
        visible={isModalVisible}
        centered
        destroyOnClose
        focusTriggerAfterClose={false}
        maskClosable={false}
        closeIcon={<i className={"iconfont iconguanbi"} />}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        title={
          <CustomTitle>
            <span>新建号码任务</span>
          </CustomTitle>
        }
        footer={null}
      >
        <CreateContainer>
          <Form
            form={form}
            className={"create-form"}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            colon={false}
            initialValues={{ add_number: addNumberState }}
          >
            <Item
              name="task_name"
              label="任务名称"
              rules={[{ required: true }]}
            >
              <Input className={"form-input"} placeholder="请输入任务名称" />
            </Item>
            <Item
              name="add_number"
              label="添加数量"
              rules={[{ required: true }]}
            >
              <Select
                className={"form-select"}
                onChange={(value: string) => setAddNumberState(value)}
              >
                <Select.Option value="many">多个</Select.Option>
                <Select.Option value="one">单个</Select.Option>
              </Select>
            </Item>

            {addNumberState === "one" && (
              <Item
                name="phone_number"
                label="电话号码"
                rules={[{ required: true }]}
              >
                <Input className={"form-input"} placeholder="请输入电话号码" />
              </Item>
            )}

            <Item label="备注" name="remark">
              <Input className={"form-input"} placeholder="备注可为空" />
            </Item>
            {addNumberState === "many" && (
              <Item label="上传文件">
                <Upload
                  name="file"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  headers={{ authorization: "authorization-text" }}
                  onChange={onUploadChange}
                  className={"form-upload"}
                  maxCount={1}
                >
                  <Input
                    className={"form-input"}
                    placeholder={uploadValue}
                    suffix={<i className={"iconfont icondakaiwenjian"} />}
                  />
                  <Progress showInfo={false} percent={30} />
                </Upload>
                <RemarkComponent style={{ marginTop: ".1rem" }}>
                  *
                  仅备注可为空；上传表格的表头需严格遵循以下格式，只支持xls/xlsx/csv文件，上传时系统默认从第2行开始导入数据。
                </RemarkComponent>
                <TemplateContainer>
                  <Table
                    className={"template-table"}
                    dataSource={[
                      { key: "1", number: "(918) 321-0953", remark: "重点" },
                      { key: "2", number: "(837) 321-7390", remark: "-" },
                      { key: "3", number: "(076) 321-7278", remark: "-" },
                    ]}
                    columns={[
                      {
                        title: "序号",
                        render: (t: string, r: any, i: number) => i + 1,
                      },
                      { title: "号码", dataIndex: "number" },
                      { title: "备注", dataIndex: "remark" },
                    ]}
                    pagination={false}
                    bordered
                    size={"small"}
                  />
                  <button type="button" className={"download-btn"}>
                    下载模版
                  </button>
                </TemplateContainer>
              </Item>
            )}
            <Item>
              <BtnGroup>
                <Button type="primary" danger onClick={onSubmit}>
                  确定
                </Button>
                <Button ghost>取消</Button>
              </BtnGroup>
            </Item>
          </Form>
        </CreateContainer>
      </Modal>
    </>
  );
};