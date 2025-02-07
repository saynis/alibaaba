import express from "express";
import { deleteProducts, findProduct, getAllProducts, postProducts, searchProducts } from "../controllers/productsController.js";

const router = express.Router();


router.post("/new", postProducts);

router.get("/all", getAllProducts)

router.delete("/delete/:id", deleteProducts)

router.get("/search", searchProducts)

router.get("/find/:id", findProduct)


export default router