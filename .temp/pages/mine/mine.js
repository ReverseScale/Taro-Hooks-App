import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';

import './mine.scss';
import avatar from '../../images/avatar.png';

export default class Mine extends Taro.Component {
  config = {
    navigationBarTitleText: '我的'
  };

  render() {
    return <View className="mine">
            <View>
                <Image src={avatar} className="mine-avatar" />
                <View className="mine-nickName">谢什么</View>
                <View className="mine-username">tuture</View>
            </View>
            <View className="mine-footer">👩‍💻👩🏻‍💻👩🏼‍💻👩🏽‍💻👩🏾‍💻👩🏿‍💻🧑‍💻🧑🏻‍💻🧑🏼‍💻🧑🏽‍💻🧑🏾‍💻🧑🏿‍💻</View>
            <View className="mine-footer"> - 来自搬砖全球化团队 - </View>
        </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

Mine.config = { navigationBarTitleText: '我的' };