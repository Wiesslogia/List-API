import { Product } from "../models/product.model.js";

// export const listProductsService = async () => {
//   const products = await Product.find();
//   return products;
// };


export const createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};

//pagination, filtering, sorting
// const page = parseInt(req.query.page) || 1;
// const limit = parseInt(req.query.limit) || 10;

  export const listProductsService = async (page, limit) => {
    page = page <1 ? 1 : page;
    limit = limit > 10 ? 10 : limit;

    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
    Product.find()
        .sort({_id : 1})
        .skip(skip)
        .limit(limit),
    Product.countDocuments()
    ]);

    return {
        products,
        total,
        page,
        pages: Math.ceil(total / limit)
    };
}