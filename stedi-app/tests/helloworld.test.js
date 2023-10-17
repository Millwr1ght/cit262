import helloworld from "../utils/helloworld.js";

//this is the manual test
console.log(helloworld());

//this is the auto test
it("works", ()=> {
    expect(helloworld()).toBe("hello");
});