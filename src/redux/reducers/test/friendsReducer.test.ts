import {addPostAC, PostDataType, profileReducer} from "../profileReducer";
import {v1} from "uuid";
import {FriendsDataType, friendsReducer} from "../friendsReducer";


// test("correct should be added post", () => {
//
//     const startState: FriendsDataType = {
//         friends: [
//             {
//                 id: "1",
//                 name: "First",
//                 followed: true,
//                 photos: "",
//                 status: "",
//                 email: ''
//             },
//             {
//                 id: "2",
//                 name: "Second",
//                 followed: true,
//                 photos: "",
//                 status: "",
//                 email: ''
//             }
//         ],
//         foundFriends: [],
//         pageSize: 10,
//         totalFoundFriends: 12,
//         currentPageFoundFriends: 1,
//         isFetching: false,
//         isFollowingInProgress: []
//     }
//
//     const endState = friendsReducer(startState, addPostAC("New post"))
//
//     expect(endState.posts.length).toBe(1);
//     expect(endState.posts[0].text).toBe("New post");
// })