export async function GET(request) {
    // Handle GET request
    return new Response(JSON.stringify({ message: 'GET request successful' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request) {
    const data = await request.json();
    // Handle POST request
    return new Response(JSON.stringify({ message: 'POST request successful', data }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
}
