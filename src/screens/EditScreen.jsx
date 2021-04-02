import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({ navigation }) {
	const id = navigation.getParam("id");

	const { state, editBlogPost } = useContext(Context);

	const blogPost = state.find(
		blogPost => blogPost.id === navigation.getParam("id")
	);

	return (
		<BlogPostForm
			initialValues={{ title: blogPost.title, content: blogPost.content }}
			onSubmit={(title, content) => {
				editBlogPost(id, title, content, () => navigation.pop());
			}}
		/>
	);
}

const styles = StyleSheet.create({});
