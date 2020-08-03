import { getAllFromPath, sortMarkdown } from "../../functions/markdown";

export function get(req, res) {
  const posts = getAllFromPath("src/content/portfolio");

  const sorted = sortMarkdown(posts);

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(sorted));
}
