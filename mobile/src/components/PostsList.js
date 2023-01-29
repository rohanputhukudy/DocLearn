import { useNavigation } from "@react-navigation/core";
import { Pressable, View } from "react-native";
import { PostTile } from './PostTile.js';

export const PostsList = ({ posts }) => {
  const navigation = useNavigation();

  const postTiles = posts.map(post =>
    <Pressable key={post.id} onPress={() => navigation.navigate('Post', { post })}>
      <View>
        <PostTile post={post}/>
      </View>
    </Pressable>
  );

  return (
    <View>
      {postTiles}
    </View>
  );
};