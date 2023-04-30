import {addMessageAC, MessagesDataType, messagesReducer} from "../messagesReducer";


test("correct should be added message", () => {

    const startState: MessagesDataType = {
        messages: [
            {id: "1", message: "Hello"},
        ]
    }

    const endState = messagesReducer(startState, addMessageAC("Bye"))

    expect(endState.messages.length).toBe(2);
    expect(endState.messages[1].message).toBe("Bye");
})