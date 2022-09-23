import React from "react";
import ReactDOMServer from "react-dom/server";

function Root() {
    return (
        <html>
            <head>
                <title>Hello world</title>
            </head>
            <body>
                <header>This is header</header>
                <main>This is main</main>
                <footer>This is footer</footer>
            </body>
        </html>
    );
}

export default {
    async fetch(request: Request): Promise<Response> {
        const stream = await ReactDOMServer.renderToReadableStream(<Root />);
        return new Response(stream);
    },
};
