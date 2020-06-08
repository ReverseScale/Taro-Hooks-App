import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';

import './index.scss';

export default class PostCard extends Taro.Component {
  render() {
    const props = this.props;

    return <View className="postcard">
            <View className="post-title">{props.title}</View>
            <View className="post-content">{props.content}</View>
        </View>;
  }

}