import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function BlogPostForm({ onSubmit, initialValues }) {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);

	return (
		<View>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={text => setTitle(text)}
			/>
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={text => setContent(text)}
			/>
			<Button
				onPress={() => onSubmit(title, content)}
				title="Save Post"
			/>
		</View>
	);
}

BlogPostForm.defaultProps = {
	initialValues: {
		title: "",
		content: "",
	},
};

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: "black",
		marginBottom: 15,
		padding: 5,
		margin: 5,
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5,
	},
});
