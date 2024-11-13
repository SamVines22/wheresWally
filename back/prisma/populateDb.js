const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
require("dotenv").config();




const main = async ()=> {
    //console.log(process.env.DATABASE_URL);
   // const data = await prisma.Pictures.create({data: {title: "wally-beach", src: "../pictures/wally-beach.jpg",height: 1080, width: 1920, x_min: 1180, x_max:1200, y_min:420, y_max:474 }})
   // console.log(data);
 
   const test = await prisma.pictures.findMany();
    console.log(test);
    console.log(__dirname);

}


main();


