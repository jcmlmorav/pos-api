const POSTS = [
    {
        id: "1234567890",
        name: "Velocimarco",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt qui at velit, deserunt iusto laudantium iste, provident corrupti temporibus voluptatum, maxime tempora vero rerum quos esse rem. Omnis, quibusdam sit?",
        tags: [
            "Concordia - Betulia",
            "Test"
        ],
        image: "./thumbnail.png"
    }
]

export default {
    Query: {
        posts: () => POSTS
    }
}
