exports.typeDefs = `

type Recipe {
    name: String!
    category: String!
    descripttion: String!
    instructions: String!
    creatDate: String
    likes: Int
    username: String
}

type User {
    username: String! @unique
    password: String!
    email: String!
    joinDate: String
    favorites: [Recipe]
}

type Query {

    getAllRecipes:[Recipe]
}

`;