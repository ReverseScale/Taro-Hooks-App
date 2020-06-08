import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { PostCard, PostForm } from "../../components/index";
import './index.scss';

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    const [posts, setPosts] = Taro.useState([{
      title: '我是标题，因为我比较大',
      content: '我是描述，因为我比标题小一点'
    }]);
    const [formTitle, setFormTitle] = Taro.useState('');
    const [formContent, setFormContent] = Taro.useState('');

    function handleSubmit(e) {
      e.preventDefault();

      const newPosts = posts.concat({ title: formTitle, content: formContent });
      setPosts(newPosts);
      setFormTitle('');
      setFormContent('');
    }

    return <View className="index">
      {posts.map((post, index) => <PostCard key={index} title={post.title} content={post.content} isList />)}
      <PostForm formTitle={formTitle} formContent={formContent} handleSubmit={e => handleSubmit(e)} handleTitleInput={e => setFormTitle(e.target.value)} handleContentInput={e => setFormContent(e.target.value)} />
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

Index.config = { navigationBarTitleText: '首页' };