<script>
	export let contacts;
	console.log(contacts);
</script>

<svelte:head>
	<title>Contacts List</title>
</svelte:head>

<ul>
	{#each contacts as contacts}
		<li>{contacts.firstName} {contacts.lastName}</li>
	{/each}
</ul>

<a href="/contacts/manage">Manage Contacts</a>
