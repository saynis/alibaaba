import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();




export const postProducts = async(req,res)=>{
      const {title,description,price,image} = req.body;

      if(!title || !description || !price || !image){
        res.json({
            massage: "canot be empty"
        })
      }

      const newProduct = await prisma.products.create({
        data:{
            title,
            description,
            price,
            image
        }
      })

      res.json({
        massage: "succefully created a new product",
        products: newProduct
      })
}

export const getAllProducts = async(req,res)=>{
    const allProducts = await prisma.products.findMany();

    res.status(200).json({
        massage: "here is all products",
        products: allProducts
    })
}

export const deleteProducts  = async(req,res)=>{
    const {id} = req.params;
    const deletedProducts = await prisma.products.delete({
        where:{
            id: +id
        }
    })

    res.json({
        massage: `deleted product id ${id}`
    })
}

export const searchProducts = async (req, res) => {
    const { query } = req.query; // URL query parameter (e.g., ?query=something)
  
    if (!query) {
      return res.status(400).json({
        message: "Search query cannot be empty",
      });
    }
  
    try {
      const matchingProducts = await prisma.products.findMany({
        where: {
          title: {
            startsWith: query, // Match products starting with the query string
            mode: "insensitive", // Case-insensitive search
          },
        },
      });
  
      res.status(200).json({
        message: `Found ${matchingProducts.length} product(s) matching "${query}"`,
        products: matchingProducts,
      });
    } catch (error) {
      res.status(500).json({ message: "Error searching for products", error });
    }
  };

  export const findProduct = async(req,res)=>{
    const {id} = req.params;
    const find = await prisma.products.findFirst({
          where:{
                id: +id
          }
    })

    res.json({
          massage: ` this is product id ${id} `,
          product: find

    })
}


