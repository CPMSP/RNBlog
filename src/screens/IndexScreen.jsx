import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

export default function IndexScreen() {
	const { data, addBlogPost } = useContext(BlogContext);

	return (
		<View>
			<Button title="Add Post" onPress={addBlogPost} />
			<FlatList
				data={data}
				keyExtractor={blogPost => blogPost.title}
				renderItem={({ item }) => {
					return <Text>{item.title}</Text>;
				}}></FlatList>
		</View>
	);
}

const styles = StyleSheet.create({});
