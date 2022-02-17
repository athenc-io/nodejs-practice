const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

//code below results in Post Three not showing on the body after being pushed because getPost
//finished before createPost did

/*function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`; //add each post to the output variable 
        });
        document.body.innerHTML = output; //insert output to body of html
    }, 1000);
}

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

getPosts();

createPost({title: 'Post Three', body: 'This is post three'}); */


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`; //add each post to the output variable 
        });
        document.body.innerHTML = output; //insert output to body of html
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);




