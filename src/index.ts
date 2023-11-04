let port = parseInt(Deno.env.get("PORT") ?? "8000");

console.log(`http://localhost:${port}/`);

Deno.serve({ port }, (req) => {
  return new Response("Choo Choo! Welcome to your Deno app\n", {
    headers: { "content-type": "text/plain" },
    status: 200,
  });
});
