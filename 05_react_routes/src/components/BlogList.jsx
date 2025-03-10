import React from "react";
import { List, Card, Row, Col } from "antd";
import blogs from "../data/blog";
import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <div style={{ padding: "24px" }}>
      <List
        grid={{
          gutter: 16,
          column: 2,
        }}
        dataSource={blogs}
        renderItem={(blog, index) => (
          <List.Item>
            <Card
              title={<Link to={`/blog/${index}`}>{blog.title}</Link>}
              hoverable
              style={{ marginBottom: 16 }}
            >
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <p>{blog.content.substring(0, 100)}...</p>
                </Col>
              </Row>
            </Card>
          </List.Item>
        )}
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
        }}
      />
    </div>
  );
};

export default BlogList;
