import { HttpClient } from "./../../scripts/client";

describe("category module test", () => {
  let createId: string;

  beforeAll(async () => {
    await HttpClient.initDatabase();
  });

  afterAll(async () => {});

  it("[post] /category/", async () => {
    const reqBody = {
      name: "categoryName",
      slug: "created",
      order: 100,
      description: "category test desc"
    };
    const res = await HttpClient.cmsApi.categoryCreate(reqBody);
    expect(res.status).toBe(201);
    createId = res.data.id;
    expect(res.data.name).toBe(reqBody.name);
  });

  it("[put] /category/", async () => {
    const reqBody = {
      id: createId,
      name: "newCategoryName",
      slug: "newCategoryName_slug",
      order: 100,
      description: "category updated test"
    };

    const res = await HttpClient.cmsApi.categoryUpdate(reqBody);
    expect(res.status).toBe(200);
    expect(res.data.name).toBe(reqBody.name);
  });

  it("[get] /category/query", async () => {
    const res = await HttpClient.cmsApi.categoryQuery();
    expect(res.status).toBe(200);
  });

  it("[get] /category/search", async () => {
    const res = await HttpClient.cmsApi.categorySearch();
    expect(res.status).toBe(200);
  });

  it("[get] /category/{id}", async () => {
    const res = await HttpClient.cmsApi.categoryFindOne(createId);
    expect(res.status).toBe(200);
  });

  it("[delete] /category/{id}", async () => {
    const res = await HttpClient.cmsApi.categoryRemove(createId);
    expect(res.status).toBe(200);
  });
});
