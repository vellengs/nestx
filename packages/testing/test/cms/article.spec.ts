import { HttpClient } from "./../../scripts/client";

describe("article module test", () => {
  let createId: string;
  let categoryId: string;

  beforeAll(async () => {
    await HttpClient.initDatabase();
  });

  afterAll(async () => {});

  it("[post] /article/", async () => {
    const category = await HttpClient.cmsApi.categoryCreate({
      name: "categoryName",
      slug: "created",
      order: 100,
      description: "category test desc"
    });

    categoryId = category.data.id;
    const reqBody = {
      name: "article name",
      title: "article title",
      keyword: "article keyword",
      picture: "http://www.baidu.com",
      category: categoryId,
      description: "description of article",
      author: "vellengs",
      content: "<p>this is a article content</p>"
    };

    const res = await HttpClient.cmsApi.articleCreate(reqBody);
    expect(res.status).toBe(201);
    createId = res.data.id;
  });

  it("[get] /article/search", async () => {
    const res = await HttpClient.cmsApi.articleSearch();
    expect(res.status).toBe(200);
  });

  it("[put] /article/", async () => {
    const reqBody = {
      id: createId,
      name: "updated name of article",
      picture: "http://www.picture.com",
      title: "updated article title",
      keyword: "demo of keyword",
      description: "description of article",
      author: "viking",
      sort: 100,
      category: categoryId,
      content: "<div>new content of div</div>"
    };

    const res = await HttpClient.cmsApi.articleUpdate(reqBody);
    expect(res.status).toBe(200);
    expect(res.data.author).toBe(reqBody.author);
  });

  it("[get] /article/query", async () => {
    const res = await HttpClient.cmsApi.articleQuery();
    expect(res.status).toBe(200);
  });

  it("[get] /article/{id}", async () => {
    const res = await HttpClient.cmsApi.articleFindOne(createId);
    expect(res.status).toBe(200);
  });

  it("[delete] /article/{id}", async () => {
    const res = await HttpClient.cmsApi.articleRemove(createId);
    expect(res.status).toBe(200);
  });
});
