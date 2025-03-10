import React from "react";
import { Card, Typography, Image, Tag, List, Row, Col } from "antd";
import { LikeOutlined, ReadOutlined, StarOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import blogs from "../data/blog";

const { Title, Paragraph, Text } = Typography;

const iconStyle = { marginRight: 8, color: "#1890ff" };

const BlogDetails = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex] || {};

  // 元数据列表
  const metaData = [
    {
      icon: <ReadOutlined style={iconStyle} />,
      label: "阅读量",
      value: blog.reads,
    },
    {
      icon: <StarOutlined style={iconStyle} />,
      label: "收藏数",
      value: blog.collections,
    },
    {
      icon: <LikeOutlined style={iconStyle} />,
      label: "点赞数",
      value: blog.likes,
    },
  ];

  return (
    <div style={{ padding: "24px", maxWidth: 1200, margin: "0 auto" }}>
      <Card
        cover={
          <Image
            src={blog.coverImage}
            alt="封面图"
            height={400}
            style={{ objectFit: "cover" }}
            preview={false}
          />
        }
      >
        <Title level={2} style={{ marginBottom: 16 }}>
          {blog.title}
        </Title>

        <Row gutter={24}>
          <Col xs={24} md={16}>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
              <Text type="secondary" strong>
                {blog.author}
              </Text>

              {blog.tags?.length > 0 && (
                <div style={{ marginTop: 24 }}>
                  {blog.tags.map((tag) => (
                    <Tag
                      color={
                        ["#2db7f5", "#87d068", "#108ee9"][
                          Math.floor(Math.random() * 3)
                        ]
                      }
                      key={tag}
                      style={{ marginBottom: 8 }}
                    >
                      {tag}
                    </Tag>
                  ))}
                  <div style={{ textAlign: "left" }}>{blog.content}</div>
                </div>
              )}
            </Paragraph>
          </Col>

          <Col xs={24} md={8}>
            <List
              header={<Text strong>文章数据</Text>}
              dataSource={metaData.filter((item) => item.value)}
              renderItem={(item) => (
                <List.Item>
                  {item.icon}
                  <Text strong>{item.label}:</Text>
                  <Text style={{ marginLeft: 8 }}>
                    {item.value.toLocaleString()}
                  </Text>
                </List.Item>
              )}
              bordered
              style={{ marginTop: 24 }}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default BlogDetails;
