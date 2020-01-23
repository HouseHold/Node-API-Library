/**
 * HouseHold
 * HouseHold API
 *
 * The version of the OpenAPI document: 0.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ProductStockjsonldAdd model module.
 * @module model/ProductStockjsonldAdd
 * @version 0.0.5
 */
class ProductStockjsonldAdd {
    /**
     * Constructs a new <code>ProductStockjsonldAdd</code>.
     * @alias module:model/ProductStockjsonldAdd
     */
    constructor() { 
        
        ProductStockjsonldAdd.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductStockjsonldAdd</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductStockjsonldAdd} obj Optional instance to populate.
     * @return {module:model/ProductStockjsonldAdd} The populated <code>ProductStockjsonldAdd</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductStockjsonldAdd();

            if (data.hasOwnProperty('@context')) {
                obj['@context'] = ApiClient.convertToType(data['@context'], 'String');
            }
            if (data.hasOwnProperty('@id')) {
                obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
            }
            if (data.hasOwnProperty('@type')) {
                obj['@type'] = ApiClient.convertToType(data['@type'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} @context
 */
ProductStockjsonldAdd.prototype['@context'] = undefined;

/**
 * @member {String} @id
 */
ProductStockjsonldAdd.prototype['@id'] = undefined;

/**
 * @member {String} @type
 */
ProductStockjsonldAdd.prototype['@type'] = undefined;

/**
 * Quantity of products in stock. Cannot be updated directly.
 * @member {Number} quantity
 */
ProductStockjsonldAdd.prototype['quantity'] = undefined;






export default ProductStockjsonldAdd;

