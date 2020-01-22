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
import InlineResponse200HydraSearch from './InlineResponse200HydraSearch';
import InlineResponse200HydraView from './InlineResponse200HydraView';
import ProductLocationjsonld from './ProductLocationjsonld';

/**
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 0.0.4
 */
class InlineResponse2002 {
    /**
     * Constructs a new <code>InlineResponse2002</code>.
     * @alias module:model/InlineResponse2002
     * @param hydramember {Array.<module:model/ProductLocationjsonld>} 
     */
    constructor(hydramember) { 
        
        InlineResponse2002.initialize(this, hydramember);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hydramember) { 
        obj['hydra:member'] = hydramember;
    }

    /**
     * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002();

            if (data.hasOwnProperty('hydra:member')) {
                obj['hydra:member'] = ApiClient.convertToType(data['hydra:member'], [ProductLocationjsonld]);
            }
            if (data.hasOwnProperty('hydra:totalItems')) {
                obj['hydra:totalItems'] = ApiClient.convertToType(data['hydra:totalItems'], 'Number');
            }
            if (data.hasOwnProperty('hydra:view')) {
                obj['hydra:view'] = InlineResponse200HydraView.constructFromObject(data['hydra:view']);
            }
            if (data.hasOwnProperty('hydra:search')) {
                obj['hydra:search'] = InlineResponse200HydraSearch.constructFromObject(data['hydra:search']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ProductLocationjsonld>} hydra:member
 */
InlineResponse2002.prototype['hydra:member'] = undefined;

/**
 * @member {Number} hydra:totalItems
 */
InlineResponse2002.prototype['hydra:totalItems'] = undefined;

/**
 * @member {module:model/InlineResponse200HydraView} hydra:view
 */
InlineResponse2002.prototype['hydra:view'] = undefined;

/**
 * @member {module:model/InlineResponse200HydraSearch} hydra:search
 */
InlineResponse2002.prototype['hydra:search'] = undefined;






export default InlineResponse2002;

