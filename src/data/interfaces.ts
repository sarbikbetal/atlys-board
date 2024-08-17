export interface User {
    name: string
    timestamp: string
    avatarUrl: string
}

export interface PostContent {
    emoji: string
    content: string
    commentCount: string
    isEdited?: boolean
}

export interface Post {
    user: User
    post: PostContent
}
