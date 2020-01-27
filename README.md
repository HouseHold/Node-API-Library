# house_hold

HouseHold - JavaScript client for house_hold
HouseHold API
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.0.5
- Package version: 0.0.5
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install house_hold --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your house_hold from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var HouseHold = require('house_hold');


var api = new HouseHold.ProductApi()
var id = "id_example"; // {String} 
api.deleteProductItem(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HouseHold.ProductApi* | [**deleteProductItem**](docs/ProductApi.md#deleteProductItem) | **DELETE** /api/products/{id} | Removes the Product resource.
*HouseHold.ProductApi* | [**getProductCollection**](docs/ProductApi.md#getProductCollection) | **GET** /api/products | Retrieves the collection of Product resources.
*HouseHold.ProductApi* | [**getProductItem**](docs/ProductApi.md#getProductItem) | **GET** /api/products/{id} | Retrieves a Product resource.
*HouseHold.ProductApi* | [**patchProductItem**](docs/ProductApi.md#patchProductItem) | **PATCH** /api/products/{id} | Updates the Product resource.
*HouseHold.ProductApi* | [**postProductCollection**](docs/ProductApi.md#postProductCollection) | **POST** /api/products | Creates a Product resource.
*HouseHold.ProductApi* | [**putProductItem**](docs/ProductApi.md#putProductItem) | **PUT** /api/products/{id} | Replaces the Product resource.
*HouseHold.ProductCategoryApi* | [**deleteProductCategoryItem**](docs/ProductCategoryApi.md#deleteProductCategoryItem) | **DELETE** /api/product/categories/{id} | Removes the ProductCategory resource.
*HouseHold.ProductCategoryApi* | [**getProductCategoryCollection**](docs/ProductCategoryApi.md#getProductCategoryCollection) | **GET** /api/product/categories | Retrieves the collection of ProductCategory resources.
*HouseHold.ProductCategoryApi* | [**getProductCategoryItem**](docs/ProductCategoryApi.md#getProductCategoryItem) | **GET** /api/product/categories/{id} | Retrieves a ProductCategory resource.
*HouseHold.ProductCategoryApi* | [**patchProductCategoryItem**](docs/ProductCategoryApi.md#patchProductCategoryItem) | **PATCH** /api/product/categories/{id} | Updates the ProductCategory resource.
*HouseHold.ProductCategoryApi* | [**postProductCategoryCollection**](docs/ProductCategoryApi.md#postProductCategoryCollection) | **POST** /api/product/categories | Creates a ProductCategory resource.
*HouseHold.ProductCategoryApi* | [**putProductCategoryItem**](docs/ProductCategoryApi.md#putProductCategoryItem) | **PUT** /api/product/categories/{id} | Replaces the ProductCategory resource.
*HouseHold.ProductCollectionApi* | [**deleteProductCollectionItem**](docs/ProductCollectionApi.md#deleteProductCollectionItem) | **DELETE** /api/product/collections/{id} | Removes the ProductCollection resource.
*HouseHold.ProductCollectionApi* | [**getProductCollectionCollection**](docs/ProductCollectionApi.md#getProductCollectionCollection) | **GET** /api/product/collections | Retrieves the collection of ProductCollection resources.
*HouseHold.ProductCollectionApi* | [**getProductCollectionItem**](docs/ProductCollectionApi.md#getProductCollectionItem) | **GET** /api/product/collections/{id} | Retrieves a ProductCollection resource.
*HouseHold.ProductCollectionApi* | [**patchProductCollectionItem**](docs/ProductCollectionApi.md#patchProductCollectionItem) | **PATCH** /api/product/collections/{id} | Updates the ProductCollection resource.
*HouseHold.ProductCollectionApi* | [**postProductCollectionCollection**](docs/ProductCollectionApi.md#postProductCollectionCollection) | **POST** /api/product/collections | Creates a ProductCollection resource.
*HouseHold.ProductCollectionApi* | [**putProductCollectionItem**](docs/ProductCollectionApi.md#putProductCollectionItem) | **PUT** /api/product/collections/{id} | Replaces the ProductCollection resource.
*HouseHold.ProductLocationApi* | [**deleteProductLocationItem**](docs/ProductLocationApi.md#deleteProductLocationItem) | **DELETE** /api/product/locations/{id} | Removes the ProductLocation resource.
*HouseHold.ProductLocationApi* | [**getProductLocationCollection**](docs/ProductLocationApi.md#getProductLocationCollection) | **GET** /api/product/locations | Retrieves the collection of ProductLocation resources.
*HouseHold.ProductLocationApi* | [**getProductLocationItem**](docs/ProductLocationApi.md#getProductLocationItem) | **GET** /api/product/locations/{id} | Retrieves a ProductLocation resource.
*HouseHold.ProductLocationApi* | [**patchProductLocationItem**](docs/ProductLocationApi.md#patchProductLocationItem) | **PATCH** /api/product/locations/{id} | Updates the ProductLocation resource.
*HouseHold.ProductLocationApi* | [**postProductLocationCollection**](docs/ProductLocationApi.md#postProductLocationCollection) | **POST** /api/product/locations | Creates a ProductLocation resource.
*HouseHold.ProductLocationApi* | [**putProductLocationItem**](docs/ProductLocationApi.md#putProductLocationItem) | **PUT** /api/product/locations/{id} | Replaces the ProductLocation resource.
*HouseHold.ProductStockApi* | [**getProductStockCollection**](docs/ProductStockApi.md#getProductStockCollection) | **GET** /api/product/stocks | Retrieves the collection of ProductStock resources.
*HouseHold.ProductStockApi* | [**getProductStockItem**](docs/ProductStockApi.md#getProductStockItem) | **GET** /api/product/stocks/{id} | Retrieves a ProductStock resource.
*HouseHold.ProductStockApi* | [**stockAddProductStockItem**](docs/ProductStockApi.md#stockAddProductStockItem) | **POST** /api/product/stocks/{id}/add | Add product into stock.
*HouseHold.ProductStockApi* | [**stockConsumeProductStockItem**](docs/ProductStockApi.md#stockConsumeProductStockItem) | **POST** /api/product/stocks/{id}/consume | Consume product from stock.
*HouseHold.ProductStockApi* | [**stockInitProductStockCollection**](docs/ProductStockApi.md#stockInitProductStockCollection) | **POST** /api/product/stocks | Create stock for product and location.


## Documentation for Models

 - [HouseHold.InlineObject](docs/InlineObject.md)
 - [HouseHold.InlineObject1](docs/InlineObject1.md)
 - [HouseHold.InlineObject2](docs/InlineObject2.md)
 - [HouseHold.InlineResponse200](docs/InlineResponse200.md)
 - [HouseHold.InlineResponse2001](docs/InlineResponse2001.md)
 - [HouseHold.InlineResponse2002](docs/InlineResponse2002.md)
 - [HouseHold.InlineResponse2003](docs/InlineResponse2003.md)
 - [HouseHold.InlineResponse2004](docs/InlineResponse2004.md)
 - [HouseHold.InlineResponse200HydraSearch](docs/InlineResponse200HydraSearch.md)
 - [HouseHold.InlineResponse200HydraSearchHydraMapping](docs/InlineResponse200HydraSearchHydraMapping.md)
 - [HouseHold.InlineResponse200HydraView](docs/InlineResponse200HydraView.md)
 - [HouseHold.Product](docs/Product.md)
 - [HouseHold.ProductCategory](docs/ProductCategory.md)
 - [HouseHold.ProductCategoryjsonld](docs/ProductCategoryjsonld.md)
 - [HouseHold.ProductCollection](docs/ProductCollection.md)
 - [HouseHold.ProductCollectionjsonld](docs/ProductCollectionjsonld.md)
 - [HouseHold.ProductLocation](docs/ProductLocation.md)
 - [HouseHold.ProductLocationjsonld](docs/ProductLocationjsonld.md)
 - [HouseHold.ProductStockjsonld](docs/ProductStockjsonld.md)
 - [HouseHold.ProductStockjsonldAdd](docs/ProductStockjsonldAdd.md)
 - [HouseHold.ProductStockjsonldConsume](docs/ProductStockjsonldConsume.md)
 - [HouseHold.Productjsonld](docs/Productjsonld.md)


## Documentation for Authorization

All endpoints do not require authorization.
