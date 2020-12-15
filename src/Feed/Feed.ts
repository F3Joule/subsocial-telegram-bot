import { PostId } from '@subsocial/types/substrate/interfaces';
import { resolveSubsocialApi } from '../Substrate/subsocialConnect';
import { createHrefForPost } from '../utils/utils';

export const getPostPreview = async (postId: string): Promise<string> => {
	const subsocial = await resolveSubsocialApi()

	const post = await subsocial.findPost({ id: postId as unknown as PostId })
	const spaceId = post.struct.space_id
	const content = post.content.body

	const url = createHrefForPost(spaceId.toString(), postId.toString(), content)

	return url
}
