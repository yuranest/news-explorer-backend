const request = require("supertest");
const app = require("../app");
describe("API Health Check", () => {
  it("GET / should return 404 or similar fallback", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBeGreaterThanOrEqual(400);
  });
});
