import helloName from "../utils/helloName";

//auto test
it("outputs a name", () => {
    expect(helloName()).toBe("hello Nathan");
})

//for example
//it("does the thing if", ()=>{
//    expect(thingtotest()).toBe("result");
//})