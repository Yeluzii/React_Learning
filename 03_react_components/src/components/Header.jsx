import { Layout, Menu, Row, Col } from "antd";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader>
      <Row justify="space-between">
        <Col>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[
              { key: "1", label: "首页" },
              { key: "2", label: "产品" },
              { key: "3", label: "关于我们" },
            ]}
          />
        </Col>
      </Row>
    </AntHeader>
  );
};

export default Header;
