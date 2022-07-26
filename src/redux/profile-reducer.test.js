import profileReducer, { deletePost } from "./profile-reducer";


let state = {
    posts: [{ message: 'Hello', likes: 0, id:0 }, 
    { message: 'Bye', likes: 23, id: 1 }],
}

it ("length of arr posts should be reduced", () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
}) 