export default async function pricing (req, res) {
    res.json({
        "pricingHeadTitle" : "Our Pricing List",
        "pricingHeadPara" : "We are here for serving you the best quality services in image editing. Simply our basic image editing services start at only $0.35 USD per image. Mainly price depends on how you want to edit your image and how complex is that? Then we estimate your price after discussing you.",
        "pricingHeadImg" : "/img/baloon.svg",
        "pricingDiv" : [
            {
                "priceTitle" : "CLIPPING PATH SERVICE",
                "startText" : "Starting at",
                "price" : 0.25,
                "perImgText" : "Per Image",
                "pricingImg" : "/img/red-shoe.webp"
            },
            {
                "priceTitle" : "BACKGROUND REMOVAL SERVICE",
                "startText" : "Starting at",
                "price" : 1.15,
                "perImgText" : "Per Image",
                "pricingImg" : "/img/pod.webp"
            },
            {
                "priceTitle" : "MULTI-CLIPPING PATH SERVICE",
                "startText" : "Starting at",
                "price" : 1.00,
                "perImgText" : "Per Image",
                "pricingImg" : "/img/bicycle.webp"
            },
            {
                "priceTitle" : "SHADOW SERVICE",
                "startText" : "Starting at",
                "price" : 0.25,
                "perImgText" : "Per Image",
                "pricingImg" : "/img/chair.webp"
            },
            {
                "priceTitle" : "GHOST MANNEQUIN SERVICE",
                "startText" : "Starting at",
                "price" : 1.25,
                "perImgText" : "Per Image",
                "pricingImg" : "/img/yellow-shirt.webp"
            },
            {
                "priceTitle" : "COLOR CHANGE SERVICE",
                "startText" : "Starting at",
                "price" : 1.50,
                "perImgText" : "Per Image",
                "pricingImg" : "/img/socks.webp"
            },
            {
                "priceTitle" : "PHOTO RETOUCHING SERVICE",
                "startText" : "Starting at",
                "price" : 0.25,
                "perImgText" : "Per Image",
                "pricingImg" : "/img/camera.webp"
            },
            {
                "priceTitle" : "IMAGE MASKING SERVICE",
                "startText" : "Starting at",
                "price" : 1.00,
                "perImgText" : "Per Image",
                "pricingImg" : "/img/cap.webp"
            },
            {
                "priceTitle" : "VECTOR CONVERSION SERVICE",
                "startText" : "Starting at",
                "price" : 1.25,
                "perImgText" : "Per Image",
                "pricingImg" : "/img/graph.webp"
            },
        ]
    })
}