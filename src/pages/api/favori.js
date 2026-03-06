import { setFavori } from "../../backend.mjs";

export const prerender = false;

export async function POST({ request }) {
  try {
    const data = await request.json();
    await setFavori(data);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
