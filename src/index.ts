export default {
  async fetch(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/health") {
      return new Response("ok", { status: 200, headers: { "content-type": "text/plain" } });
    }

    return new Response(
      JSON.stringify({ message: "Hello from Cloudflare Worker", path: pathname }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  },
};

