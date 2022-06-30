import { useEffect, useState } from "react";

export default function Home() {
	useEffect(() => {
		copyToClipboard("");
		toDataURL(
			"https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlyZHxlbnwwfHwwfHw%3D&w=1000&q=80"
		).then((dataUrl) => {
			let pasteboardItems = [
				{
					// "com.instagram.sharedSticker.backgroundImage": dataUrl,
					"com.instagram.sharedSticker.backgroundTopColor": "#ff0000",
					"com.instagram.sharedSticker.backgroundBottomColor": "#00ff00",
				},
			];

			copyToClipboard(pasteboardItems);

			// return () => {

			// };
		});
	}, []);

	const copyToClipboard = (textToCopy) => {
		navigator.clipboard.writeText(textToCopy);
		alert("copy to pasteboard");
	};

	const toDataURL = (url) =>
		fetch(url)
			.then((response) => response.blob())
			.then(
				(blob) =>
					new Promise((resolve, reject) => {
						const reader = new FileReader();
						reader.onloadend = () => resolve(reader.result);
						reader.onerror = reject;
						reader.readAsDataURL(blob);
					})
			);

	return (
		<div
			style={{
				padding: "40px",
			}}
		>
			<a
				href="instagram-stories://share"
				style={{
					padding: "10px 20px",
					fontSize: "18px",
					color: "blue",
					backgroundColor: "lightGray",
					borderRadius: "10px",
				}}
			>
				Share to instagram
			</a>
		</div>
	);
}
