fetch("https://v1.hitokoto.cn")
	.then(response => response.json())
	.then(result => {
		const text = `<span>「${result.hitokoto}」</span>`;
		// showMessage(result.hitokoto, 6000, 9);
		// setTimeout(() => {
		// 	showMessage(text, 4000, 9);
		// }, 6000);
		const node=document.getElementById('hitokoto');
		node.innerHTML=text;
		
	});