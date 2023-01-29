import { SafeAreaView, View } from "react-native"
import { BasicStylesheet } from "../styles/BasicStylesheet";
import { PostsContext } from "../contexts/PostsContext";
import { useContext, useEffect, useState } from "react";
import { FilterBar } from "../components/FilterBar";
import { PostsList } from "../components/PostsList";

export const FeedScreen = () => {
  const postsCtx = useContext(PostsContext);

  const posts = postsCtx;

  // mantains search query and filtered posts
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  // re-filter when posts from the backend or search term changes
  useEffect(() => {
    setFilteredPosts(filter(posts, search, filters));
  }, [posts, search, filters]);

  // sets the current search term whenever changed (also the filters?)
  const onFilter = (newSearch, newFilters) => {
    setSearch(newSearch);
    setFilters(newFilters);
  };

  return (
    <SafeAreaView style={BasicStylesheet.container}>
        <View>
          <FilterBar onFilter={onFilter}/>
          <PostsList posts={filteredPosts}/>
        </View>
    </SafeAreaView>
  );
};

const filter = (posts, search, filters) => {
  const searchNorm = search.toLowerCase();

  return posts.filter(post => {
    const title = post.title.toLowerCase();
    const body = post.body.toLowerCase();
    // const isContained = filters.every(val => post.filters.includes(val));

    return (title.includes(searchNorm) || body.includes(searchNorm)); //&& isContained;
  });
};