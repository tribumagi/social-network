import React, {ReactElement} from "react"
import {Post} from "./Post/Post"
import {useAppSelector} from "../../../../../hooks/useAppSelector"

export const Posts = (): ReactElement => {
    const postsData = useAppSelector(state => state.profileData)

    const postElement = postsData.posts.map(post => (
        <Post
            key={post.id}
            id={post.id}
            name={post.name}
            date={post.date}
            text={post.text}
            views={post.views}
            comments={post.comments}
            like={post.like}
            dislike={post.dislike}
            isLike={post.isLike}
            isDislike={post.isDislike}
        />
    ))

    return <div>{postElement}</div>
}
