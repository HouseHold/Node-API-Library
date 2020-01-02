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

import ApiClient from '../ApiClient';

/**
 * The ProductCollection model module.
 * @module model/ProductCollection
 * @version 1.0.0
 */
class ProductCollection {
    /**
     * Constructs a new <code>ProductCollection</code>.
     * @alias module:model/ProductCollection
     */
    constructor() { 
        
        ProductCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductCollection} obj Optional instance to populate.
     * @return {module:model/ProductCollection} The populated <code>ProductCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductCollection();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], ['String']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Please solve https://github.com/doctrine/common/issues/881 before adding strict type.
 * @member {String} name
 */
ProductCollection.prototype['name'] = undefined;

/**
 * Please solve https://github.com/doctrine/common/issues/881 before adding strict type.
 * @member {String} category
 */
ProductCollection.prototype['category'] = undefined;

/**
 * @member {Array.<String>} products
 */
ProductCollection.prototype['products'] = undefined;

/**
 * @member {String} id
 */
ProductCollection.prototype['id'] = undefined;






export default ProductCollection;

