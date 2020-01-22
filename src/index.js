/**
 * HouseHold
 * HouseHold API
 *
 * The version of the OpenAPI document: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse200HydraSearch from './model/InlineResponse200HydraSearch';
import InlineResponse200HydraSearchHydraMapping from './model/InlineResponse200HydraSearchHydraMapping';
import InlineResponse200HydraView from './model/InlineResponse200HydraView';
import Product from './model/Product';
import ProductCategory from './model/ProductCategory';
import ProductCategoryjsonld from './model/ProductCategoryjsonld';
import ProductCollection from './model/ProductCollection';
import ProductCollectionjsonld from './model/ProductCollectionjsonld';
import ProductLocation from './model/ProductLocation';
import ProductLocationjsonld from './model/ProductLocationjsonld';
import ProductStockjsonld from './model/ProductStockjsonld';
import ProductStockjsonldAdd from './model/ProductStockjsonldAdd';
import Productjsonld from './model/Productjsonld';
import ProductApi from './api/ProductApi';
import ProductCategoryApi from './api/ProductCategoryApi';
import ProductCollectionApi from './api/ProductCollectionApi';
import ProductLocationApi from './api/ProductLocationApi';
import ProductStockApi from './api/ProductStockApi';


/**
* HouseHold_API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var HouseHold = require('index'); // See note below*.
* var xxxSvc = new HouseHold.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new HouseHold.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new HouseHold.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new HouseHold.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.4
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InlineObject1 model constructor.
     * @property {module:model/InlineObject1}
     */
    InlineObject1,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse200HydraSearch model constructor.
     * @property {module:model/InlineResponse200HydraSearch}
     */
    InlineResponse200HydraSearch,

    /**
     * The InlineResponse200HydraSearchHydraMapping model constructor.
     * @property {module:model/InlineResponse200HydraSearchHydraMapping}
     */
    InlineResponse200HydraSearchHydraMapping,

    /**
     * The InlineResponse200HydraView model constructor.
     * @property {module:model/InlineResponse200HydraView}
     */
    InlineResponse200HydraView,

    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product,

    /**
     * The ProductCategory model constructor.
     * @property {module:model/ProductCategory}
     */
    ProductCategory,

    /**
     * The ProductCategoryjsonld model constructor.
     * @property {module:model/ProductCategoryjsonld}
     */
    ProductCategoryjsonld,

    /**
     * The ProductCollection model constructor.
     * @property {module:model/ProductCollection}
     */
    ProductCollection,

    /**
     * The ProductCollectionjsonld model constructor.
     * @property {module:model/ProductCollectionjsonld}
     */
    ProductCollectionjsonld,

    /**
     * The ProductLocation model constructor.
     * @property {module:model/ProductLocation}
     */
    ProductLocation,

    /**
     * The ProductLocationjsonld model constructor.
     * @property {module:model/ProductLocationjsonld}
     */
    ProductLocationjsonld,

    /**
     * The ProductStockjsonld model constructor.
     * @property {module:model/ProductStockjsonld}
     */
    ProductStockjsonld,

    /**
     * The ProductStockjsonldAdd model constructor.
     * @property {module:model/ProductStockjsonldAdd}
     */
    ProductStockjsonldAdd,

    /**
     * The Productjsonld model constructor.
     * @property {module:model/Productjsonld}
     */
    Productjsonld,

    /**
    * The ProductApi service constructor.
    * @property {module:api/ProductApi}
    */
    ProductApi,

    /**
    * The ProductCategoryApi service constructor.
    * @property {module:api/ProductCategoryApi}
    */
    ProductCategoryApi,

    /**
    * The ProductCollectionApi service constructor.
    * @property {module:api/ProductCollectionApi}
    */
    ProductCollectionApi,

    /**
    * The ProductLocationApi service constructor.
    * @property {module:api/ProductLocationApi}
    */
    ProductLocationApi,

    /**
    * The ProductStockApi service constructor.
    * @property {module:api/ProductStockApi}
    */
    ProductStockApi
};
