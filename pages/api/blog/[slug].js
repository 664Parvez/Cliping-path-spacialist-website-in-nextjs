

export default function slug (req, res) {
    const { slug } = req.query 

    const user = users.find (user => {
        return (
            user.id == slug
        )
    })
}