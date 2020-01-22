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

import ApiClient from '../ApiClient';

/**
 * The Product model module.
 * @module model/Product
 * @version 0.0.4
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     */
    constructor() { 
        
        Product.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ean')) {
                obj['ean'] = ApiClient.convertToType(data['ean'], ['String']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('expiring')) {
                obj['expiring'] = ApiClient.convertToType(data['expiring'], 'Boolean');
            }
            if (data.hasOwnProperty('collection')) {
                obj['collection'] = ApiClient.convertToType(data['collection'], 'String');
            }
            if (data.hasOwnProperty('stocks')) {
                obj['stocks'] = ApiClient.convertToType(data['stocks'], ['String']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Product.prototype['name'] = undefined;

/**
 * @member {Array.<String>} ean
 */
Product.prototype['ean'] = undefined;

/**
 * @member {Number} price
 */
Product.prototype['price'] = undefined;

/**
 * @member {Boolean} expiring
 */
Product.prototype['expiring'] = undefined;

/**
 * @member {String} collection
 */
Product.prototype['collection'] = undefined;

/**
 * @member {Array.<String>} stocks
 */
Product.prototype['stocks'] = undefined;

/**
 * @member {String} id
 */
Product.prototype['id'] = undefined;






export default Product;

