const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


async function getPic (req,res) {

    console.log(req.params);
    const pic = req.params.pic;
    console.log(pic);

    const picture = await prisma.Pictures.findFirst({where: {title:pic}});
    console.log(picture);
    const path = picture.src;
    console.log(path);
    const newPath = path.substring(3,path.length);
    console.log(newPath);
    const newDir = __dirname.substring(0, (__dirname.length -11));
    console.log(newDir);    
    const fullPath = newDir + newPath;
    console.log(fullPath);
    const fullPathtest = "./assets/wally-beach.jpg";
    res.json({picture, fullPathtest, fullPath});

    

}


module.exports = {getPic};