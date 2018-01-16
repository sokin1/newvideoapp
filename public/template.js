export default (render_params) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${render_params.title}</title>
                <link rel="stylesheet" type="text/css" href="styles.css" />
            </head>
            <body>
                <script>window.__initial_states__=${JSON.stringify(render_params.state)}</script>
                <script src="bundle.js"></script>
                <div id="root">${render_params.body}</div>
            </body>
        </html>
    `
}