import pb from '../../../lib/pocketbase.js';
export async function load({ params }) {
	var blogPost = await pb.collection('posts').getOne(params.id);
	blogPost = blogPost.$export();
	return {
		blogPost
	};
}
