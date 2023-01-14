import Product from "../../../models/Product"
import dbConnect from "../../../util/dbconnect"


export default async function handler(req,res){
    const {method,body} = req

    console.log('method: ',method);
    console.log('body: ',body);

    await dbConnect()

    if(method === "GET"){
        try {
            const allProducts = await Product.find()
            res.json({text:'Hello World',allProducts})
        } catch (error) {
            res.status(500).json(error)            
        }
        

    }

    if(method === "POST"){
        try {
            const product = await Product.create(body)
            res.status(201).json({
                message: "Success",
                product
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }


}