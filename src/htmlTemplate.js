export default (render_params) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Video Chat</title>
                <link rel="stylesheet" type="text/css" href="/static/styles.css" />
            </head>
            <body>
            <script>window.__initial_states__=${JSON.stringify(render_params.state)}</script>
                <div id="root">${render_params.content}</div>
                
                <script src="/static/bundle.js"></script>
            </body>
    `
}