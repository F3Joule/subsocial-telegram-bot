import { appsUrl } from '../env'
import { resolveSubsocialApi } from '../Substrate/subsocialConnect';
import { SpaceId } from '@subsocial/types/substrate/interfaces';

export const createHrefForPost = (spaceId: string, postId: string, name: string) => {
	return `<a href="${appsUrl}/${spaceId}/${postId}">${name}</a>`
}

export const createHrefForSpace = (spaceId: string, name: string) => {
	return `<a href="${appsUrl}/${spaceId}">${name}</a>`
}

export const createHrefForAccount = (followingId: string, name: string) => {
	return `<a href="${appsUrl}/accounts/${followingId}">${name}</a>`
}

export const createMessageForNotifs = (date: string, account: string, msg: string, link: string) => {
	return account + " <b>" + msg + "</b> " + link + "\n" + date
}

export const createMessageForFeeds = (link: string, account: string, spaceName: string, date: string) => {
	return link + "\n" + "Posted by " + account + " in space " + spaceName + "\n" + date
}

export const createMessageForProfile = (
	accountName: string,
	balance: string,
	reputation: string,
	followings: string,
	followers: string
) => {
	return "Name: " + accountName
	+ "\nBalance: " + balance
	+ "\nReputation: " + reputation
	+ "\nMy followings: " + followings
	+ "\nMy followers: " + followers
}

export const getAccountName = async (account: string): Promise<string> => {
	const subsocial = await resolveSubsocialApi()
	const profile = await subsocial.findProfile(account)
	if (profile.content) {
		const name = profile.content.name
		return name
	}
	else return account
}

export const getSpaceName = async (spaceId: SpaceId): Promise<string> => {
	const subsocial = await resolveSubsocialApi()
	const space = await subsocial.findSpace({ id: spaceId })
	if (space.content) {
		const name = space.content.name
		return name
	}
	else return ''
}