<script>
	export let data;
</script>

<main>
# {data.post.title}
<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
</main>