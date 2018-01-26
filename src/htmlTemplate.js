import React from 'react'

export default function HtmlTemplate(props) {
    return(
        <html>
            <head>
                <title>Video Chat</title>
                <link rel="stylesheet" type="text/css" href="/static/styles.css" />
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{__html: props.content}} />
                <script>window.__initial_states__={JSON.stringify(props.state)}</script>
                <script src="/static/bundle.js"></script>
            </body>
        </html>
    )
}