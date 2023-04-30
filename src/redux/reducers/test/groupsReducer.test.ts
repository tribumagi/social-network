import {GroupsDataType, groupsReducer, leaveGroupAC} from "../groupsReducer";


test("one group must be correctly lost", () => {

    const startState: GroupsDataType = [
        {id: "1", name: "Funparty", follow: 32, type: "Public", logo: "group1"},
        {id: "2", name: "ABC News", follow: 5, type: "Private", logo: "group2"},
        {id: "3", name: "SEO Zone", follow: 32, type: "Public", logo: "group3"},
    ]

    const endState = groupsReducer(startState, leaveGroupAC("2"))

    expect(endState.length).toBe(2);
    expect(endState[0].id).toBe("1");
    expect(endState[1].id).toBe("3");
})