const express = require("express");
const { sequelize } = require("./connection");
const { ProductModel } = require("./Models/ProductModel");
const app = express();

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.get("/get-products", async function (req, res) {
  try {
    const {
      currentPage = 1,
      pageSize = 10,
      orderBy = "createdAt",
      orderDir = "desc",
      searchBy = "",
      searchFields = "",
    } = req.query;

    const offset = currentPage * pageSize;

    let query = {};

    if (searchBy) {
      query = {
        ...query,
        [searchFields ? searchFields : "productName"]: searchBy,
      };
    }

    const products = await ProductModel.findAll({
      where: query,
      limit: parseInt(pageSize),
      offset: offset,
      order: [orderBy, orderDir],
    });
    const totalProducts = await ProductModel.findAll({
      where: query,
    });

    return res.send({
      status: true,
      message: "",
      error: "",
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: Math.ceil(totalProducts / limit),
      totalCount: totalProducts,
      data: products,
    });
  } catch (error) {
    return res.send({
      status: false,
      message: "Something went wrong!!!",
      error: error.toString(),
    });
  }
});

app.listen(7999);

console.log("dasdsa");
