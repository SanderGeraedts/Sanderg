import path from "path";
import fs from "fs";
import marked from "marked";
import grayMatter from "gray-matter";

export const getMarkdown = (location, slug) => {
  // Reading correct file
  const post = fs.readFileSync(path.resolve(location, `${slug}.md`), "utf-8");

  // Parse Front matter from file
  const { data, content } = grayMatter(post);

  // Render html from string
  const renderer = new marked.Renderer();
  const html = marked(content, { renderer });

  return JSON.stringify({
    ...data,
    html
  });
};

export const getAllFromPath = filesPath => {
  const data = fs.readdirSync(filesPath).map(fileName => {
    const post = fs.readFileSync(path.resolve(filesPath, fileName), "utf-8");

    // Parse Front matter from string
    const { data, content } = grayMatter(post);

    // Turns markdown into html
    const renderer = new marked.Renderer();
    const html = marked(content, { renderer });

    // Builds data
    return {
      ...data,
      slug: fileName.substring(0, fileName.length - 3),
      html
    };
  });

  return data;
};

export const sortMarkdown = posts => {
  return posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Newest post first
    return dateB - dateA;
  });
};
