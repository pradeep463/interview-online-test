const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const ProductModel = sequelize.define("ProductV2", {
  productId: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  productName: {
    type: DataTypes.STRING,
  },
  productImageName: {
    type: DataTypes.STRING,
  },
  productImageURL: {
    type: DataTypes.STRING,
  },
  brandName: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  itemCode: {
    type: DataTypes.STRING,
  },
  itemType: {
    type: DataTypes.STRING,
  },
  currency: {
    type: DataTypes.STRING,
  },
  brochureFileName: {
    type: DataTypes.STRING,
  },
  brochureFileURL: {
    type: DataTypes.STRING,
  },
  vendors: {
    type: DataTypes.STRING,
  },
  currencyCode: {
    type: DataTypes.STRING,
  },
  createdBy: {
    type: DataTypes.STRING,
  },
  saleAmount: {
    type: DataTypes.DECIMAL,
  },
  status: {
    type: DataTypes.TINYINT,
  },
});
module.exports = {
  ProductModel,
};

//   `productId` -
//   `productName` -
//   `productImageName` -
//   `productImageURL` -
//   `brandName` -
//   `description` -
//   `itemCode` -
//   `itemType` -
//   `currency` -
//   `currencyCode` -
//   `` -
//   `brochureFileName` -
//   `brochureFileURL` -
//   `vendors` -
//   `` -
//   `createdBy` -
//   `created` -
//   `updated` -
//   `subCategoryId` -
//   `categoryId` -
//   `uomId` -
//   `shippingMethodId` -
//   `shippingTermsId` -
//   `paymentTermsId` -
//   `categoryName` -
//   `subCategoryName` -
//   `uomCode` -
//   `uomDescription` -
//   `organisationName` -
//   `organisationId` -
//   `vendorInfo`;
