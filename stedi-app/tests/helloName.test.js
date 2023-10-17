import helloName from "../utils/helloName";

it("outputs a name", () => {
    expect(helloName()).toBe("hello Nathan");
})