import {addPostAC, clickLikeAC, deletePostAC, PostDataType, profileReducer} from "../profileReducer";

test("correct should be added post", () => {

    const startState: PostDataType = {
        posts: [],
        profile: null,
        status: ""
    }

    const endState = profileReducer(startState, addPostAC("New post"))

    expect(endState.posts.length).toBe(1);
    expect(endState.posts[0].text).toBe("New post");
})

test("correct should be removed post", () => {

    const startState: PostDataType = {
        posts: [      {
            id: "1",
            name: "Janice Griffith",
            date: "02.03.2021, 17:02:02",
            text: "World's most beautiful car in Curabitur #test drive booking ! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
            views: 125,
            comments: 10,
            like: 14,
            dislike: 3,
            isLike: false,
            isDislike: false,
        },
            {
                id: "2",
                name: "Janice Griffith",
                date: "02.03.2021, 17:02:02",
                text: "Curabitur world's most beautiful car in #test drive booking! the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
                views: 145,
                comments: 445,
                like: 45,
                dislike: 2,
                isLike: false,
                isDislike: false,
            }
            ],
        profile: null,
        status: ""
    }

    const endState = profileReducer(startState, deletePostAC("1"))

    expect(endState.posts.length).toBe(1);
    expect(endState.posts[0].id).toBe("2");
})

test("correct should be liked post", () => {

    const startState: PostDataType = {
        posts: [      {
            id: "1",
            name: "",
            date: "",
            text: "",
            views: 1,
            comments: 1,
            like: 1,
            dislike: 1,
            isLike: false,
            isDislike: false,
        },
            {
                id: "2",
                name: "",
                date: "",
                text: "",
                views: 2,
                comments: 2,
                like: 2,
                dislike: 2,
                isLike: false,
                isDislike: false,
            }
        ],
        profile: null,
        status: ""
    }

    const endState = profileReducer(startState, clickLikeAC("2", "like"))

    expect(endState.posts[1].like).toBe(3);
    expect(endState.posts[1].isLike).toBeTruthy();
})