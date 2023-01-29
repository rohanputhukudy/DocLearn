import { FlatList, View } from "react-native"
import { FilterBubble } from "./FilterBubble"

export const FilterList = ({ filters }) => {
  return (
    <View> 
      <FlatList
      data={filters}
      renderItem={({ item }) => (
        <View>
          <FilterBubble text={item} />
        </View>
      )}
      horizontal
      ItemSeparatorComponent={
        () => <View style={{ width: 13 }} />
      }
    />
    </View>
  )
}