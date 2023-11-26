import pb from '../../lib/pocketbase';
export async function load() {
	var blogPosts = await pb.collection('posts').getFullList();
	blogPosts = blogPosts.map((post) => {
		return post.$export();
	});
	return {
		blogPosts
	};
}
