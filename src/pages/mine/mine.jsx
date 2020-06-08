import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './mine.scss'
import avatar from '../../images/avatar.png'

export default function Mine() {
    return (
        <View className="mine">
            <View>
                <Image src={avatar} className="mine-avatar" />
                <View className="mine-nickName">谢什么</View>
                <View className="mine-username">tuture</View>
            </View>
            <View className="mine-footer">👩‍💻👩🏻‍💻👩🏼‍💻👩🏽‍💻👩🏾‍💻👩🏿‍💻🧑‍💻🧑🏻‍💻🧑🏼‍💻🧑🏽‍💻🧑🏾‍💻🧑🏿‍💻</View>
            <View className="mine-footer"> - 来自搬砖全球化团队 - </View>
        </View>
    )
}

Mine.config = {
    navigationBarTitleText: '我的',
}
