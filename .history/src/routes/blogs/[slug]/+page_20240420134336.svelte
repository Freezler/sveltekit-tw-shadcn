<script>
	export let data;
</script>

<main>
#if {data.post.title}
<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
</main>