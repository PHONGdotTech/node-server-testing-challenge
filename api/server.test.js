require("dotenv").config();
describe('server', function(){

    describe('environment', function(){

        it("should use testing environment when running tests", function() {
            expect(process.env.NODE_ENV).toBe("testing");
        });
    })
})