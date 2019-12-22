/**
 * HouseHold
 * HouseHold API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse2001 from '../model/InlineResponse2001';
import ProductCollection from '../model/ProductCollection';
import ProductCollectionjsonld from '../model/ProductCollectionjsonld';

/**
* ProductCollection service.
* @module api/ProductCollectionApi
* @version 1.0.0
*/
export default class ProductCollectionApi {

    /**
    * Constructs a new ProductCollectionApi. 
    * @alias module:api/ProductCollectionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Removes the ProductCollection resource.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteProductCollectionItemWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteProductCollectionItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/product/collections/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Removes the ProductCollection resource.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteProductCollectionItem(id) {
      return this.deleteProductCollectionItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves the collection of ProductCollection resources.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    getProductCollectionCollectionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/ld+json', 'application/json', 'text/html'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/api/product/collections', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves the collection of ProductCollection resources.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    getProductCollectionCollection(opts) {
      return this.getProductCollectionCollectionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a ProductCollection resource.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductCollectionjsonld} and HTTP response
     */
    getProductCollectionItemWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductCollectionItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/ld+json', 'application/json', 'text/html'];
      let returnType = ProductCollectionjsonld;
      return this.apiClient.callApi(
        '/api/product/collections/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a ProductCollection resource.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductCollectionjsonld}
     */
    getProductCollectionItem(id) {
      return this.getProductCollectionItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the ProductCollection resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductCollection} opts.productCollection The updated ProductCollection resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductCollectionjsonld} and HTTP response
     */
    patchProductCollectionItemWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['productCollection'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling patchProductCollectionItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/merge-patch+json'];
      let accepts = ['application/ld+json', 'application/json', 'text/html'];
      let returnType = ProductCollectionjsonld;
      return this.apiClient.callApi(
        '/api/product/collections/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates the ProductCollection resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductCollection} opts.productCollection The updated ProductCollection resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductCollectionjsonld}
     */
    patchProductCollectionItem(id, opts) {
      return this.patchProductCollectionItemWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a ProductCollection resource.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductCollectionjsonld} opts.productCollectionjsonld The new ProductCollection resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductCollectionjsonld} and HTTP response
     */
    postProductCollectionCollectionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['productCollectionjsonld'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/ld+json', 'application/json', 'text/html'];
      let accepts = ['application/ld+json', 'application/json', 'text/html'];
      let returnType = ProductCollectionjsonld;
      return this.apiClient.callApi(
        '/api/product/collections', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a ProductCollection resource.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductCollectionjsonld} opts.productCollectionjsonld The new ProductCollection resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductCollectionjsonld}
     */
    postProductCollectionCollection(opts) {
      return this.postProductCollectionCollectionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replaces the ProductCollection resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductCollectionjsonld} opts.productCollectionjsonld The updated ProductCollection resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductCollectionjsonld} and HTTP response
     */
    putProductCollectionItemWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['productCollectionjsonld'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putProductCollectionItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/ld+json', 'application/json', 'text/html'];
      let accepts = ['application/ld+json', 'application/json', 'text/html'];
      let returnType = ProductCollectionjsonld;
      return this.apiClient.callApi(
        '/api/product/collections/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Replaces the ProductCollection resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductCollectionjsonld} opts.productCollectionjsonld The updated ProductCollection resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductCollectionjsonld}
     */
    putProductCollectionItem(id, opts) {
      return this.putProductCollectionItemWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
