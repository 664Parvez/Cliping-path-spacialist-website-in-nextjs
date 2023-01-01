const ServiceImage = (req, res) => {
    res.json([
        {
            "img" : 1,
            "imageOne" : "/img/chair.jpg",
            "imageTwo" : "/img/bgremovechair.png"
        },
        {
            "img" : 2,
            "imageOne" : "/img/doll.jpg",
            "imageTwo" : "/img/bgremovedoll.png"
        }
    ])
}

export default ServiceImage