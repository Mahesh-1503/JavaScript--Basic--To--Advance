const posts = [
    { id: 1, content: 'Good Post' },
    { id: 2, content: 'Funny Post' },
    { id: 3, content: 'Good Post' },
    { id: 4, content: 'Bad Post' },
    { id: 5, content: 'Sad Post' },
]

const post = posts.find(post => post.content === 'Good Post');
console.log(post);

console.log(`--------------------------------`);

const post2 = posts.find(post => post.content === 'Funny Post');
console.log(post2);

console.log(`--------------------------------`);

const post3 = posts.filter(post => post.content === 'Good Post');
console.log(post3);