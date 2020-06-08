import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { PostCard } from "../../components/index";

import './post.scss';

export default class Post extends Taro.Component {
  config = {
    navigationBarTitleText: '帖子详情'
  };

  render() {
    const router = Taro.useRouter();
    const { params } = router;

    return <View className="post">
            <PostCard title={params.title} content={params.content} />
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

Post.config = { navigationBarTitleText: '帖子详情' };