import { Text, View } from "react-native"
import { FilterList } from "./FilterList";

export const PostTile = ({post}) => {
  return (
    <View>
      <Text>{post.title}</Text>
      <FilterList filters={post.filters}/>
      <Text>{post.body}</Text>
    </View>
  );
};

