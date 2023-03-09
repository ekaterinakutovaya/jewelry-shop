

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