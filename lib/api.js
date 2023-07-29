

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
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQVJYVjFlZA0pSYUpDbTBSQkgyamU0UE5iSXh4ZAm1LVVNPUXJiZAFI0UWk2MGdRekdaOTBuNV9LX3ZAIeXBmM3gyX2pLZAGNRU0FMbXBqaG1sQWVQSEN6NkVHeWphSk1MWmFiRUJaNjFFdWtuTkVKcG8yQQZDZD`;
  const data = await fetch(url);
  const feed = await data.json();
  return feed;
}