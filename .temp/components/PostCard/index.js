import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';

import './index.scss';

export default class PostCard extends Taro.Component {
  render() {
    const props = this.props;

    const handleClick = () => {
      // 如果是列表，那么就响应点击事件，跳转到帖子详情
      if (props.isList) {
        const { title, content } = this.props;
        Taro.navigateTo({
          url: `/pages/post/post?title=${title}&content=${content}`
        });
      }
    };

    return <View className="postcard" onClick={handleClick}>
            <View className="post-title">{props.title}</View>
            <View className="post-content">{props.content}</View>
        </View>;
  }

}