import React, { PureComponent } from 'react';
import { List, Card } from 'antd';
import moment from 'moment';
import { connect } from 'dva';
import { AvatarList } from 'ant-design-pro';
import stylesProjects from '../../List/Projects.less';

@connect(({ list }: any) => ({
  list,
}))
class Center extends PureComponent<any> {
  render() {
    const {
      list: { list },
    } = this.props;
    return (
      <List
        className={stylesProjects.coverCardList}
        rowKey="id"
        grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
        dataSource={list}
        renderItem={(item: any) => (
          <List.Item>
            <Card
              className={stylesProjects.card}
              hoverable
              cover={<img alt={item.title} src={item.cover} />}
            >
              <Card.Meta title={<a>{item.title}</a>} description={item.subDescription} />
              <div className={stylesProjects.cardItemContent}>
                <span>{moment(item.updatedAt).fromNow()}</span>
                <div className={stylesProjects.avatarList}>
                  <AvatarList size={"mini" as any}>
                    {item.members.map((member: any) => (
                      <AvatarList.Item
                        key={`${item.id}-avatar-${member.id}`}
                        src={member.avatar}
                        tips={member.name}
                      />
                    ))}
                  </AvatarList>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default Center;
