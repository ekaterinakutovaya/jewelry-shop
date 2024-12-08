import process from "../next.config";


export const makePostRequest = (url, details) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(details)
    })
};


export const fetchInstagramFeed = async () => {
  const token = process.env.NEXT_INSTAGRAM_TOKEN;
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${token}`;
  const data = await fetch(url);
  const feed = await data.json();
  return feed;
}

pages_show_list
business_management
instagram_basic
instagram_manage_comments
instagram_manage_insights
pages_read_engagement