const React = require('react')
const Default = require('./layouts/default')

function error404 () {
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/error.jpg" alt="404 error" />
                    <div>
                    Photo by <a href="https://unsplash.com/@visuals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">visuals</a> on <a href="https://unsplash.com/s/photos/error?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div> 
            </main>
        </Default>
    )
}

module.exports = error404