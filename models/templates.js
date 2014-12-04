'use strict';

module.exports = {
    dust: [
        {
            slug: 'intro',
            title: 'Dustjs Intro',
            content: "<h1>Lets get started</h1>",
            json: {}
        },
        {
            slug: 'hello-world',
            title: 'Hello World',
            content: "Hello World",
            json: {}
        },
        {
            slug: 'hello-var',
            title: 'Hello Foo',
            content: "Hello {name}",
            json: {
                name: 'Stan'
            }
        }
    ],
    hbs: [
        {
            slug: 'intro',
            title: 'Handlebars Intro',
            content: "<h1>Lets get started</h1>",
            json: {}
        },
        {
            slug: 'hello-world',
            title: 'Hello World',
            content: "Hello World",
            json: {}
        },
        {
            slug: 'hello-var',
            title: 'Hello Foo',
            content: "Hello {{name}}",
            json: {
                name: 'Kyle'
            }
        }
    ],
    jade: [
        {
            slug: 'intro',
            title: 'Jade Intro',
            content: "h1 Lets get started",
            json: {}
        },
        {
            slug: 'hello-world',
            title: 'Hello World',
            content: "| Hello World",
            json: {}
        },
        {
            slug: 'hello-var',
            title: 'Hello Foo',
            content: "| Hello #{name}",
            json: {
                name: 'Kenny'
            }
        }
    ],
    react: [
        {
            slug: 'intro',
            title: 'React Intro',
            content: "<h1>Lets get started</h1>",
            json: {}
        },
        {
            slug: 'hello-world',
            title: 'Hello World',
            content: "Hello World",
            json: {}
        },
        {
            slug: 'hello-var',
            title: 'Hello Foo',
            content: "Hello {name}",
            json: {
                name: 'Cartman'
            }
        }
    ],
    nunjucks: [
        {
            slug: 'intro',
            title: 'Nunjucks Intro',
            content: "<h1>Lets get started</h1>",
            json: {}
        },
        {
            slug: 'hello-world',
            title: 'Hello World',
            content: "Hello World",
            json: {}
        },
        {
            slug: 'hello-var',
            title: 'Hello Foo',
            content: "Hello {{name}}",
            json: {
                name: 'Butters'
            }
        }
    ]
}
