import { getMarkdown } from "../../functions/markdown";

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(getMarkdown("src/content", "over-mij"));
}
