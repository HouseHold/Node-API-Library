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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HouseHold);
  }
}(this, function(expect, HouseHold) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HouseHold.ProductCategoryApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProductCategoryApi', function() {
    describe('deleteProductCategoryItem', function() {
      it('should call deleteProductCategoryItem successfully', function(done) {
        //uncomment below and update the code to test deleteProductCategoryItem
        //instance.deleteProductCategoryItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductCategoryCollection', function() {
      it('should call getProductCategoryCollection successfully', function(done) {
        //uncomment below and update the code to test getProductCategoryCollection
        //instance.getProductCategoryCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductCategoryItem', function() {
      it('should call getProductCategoryItem successfully', function(done) {
        //uncomment below and update the code to test getProductCategoryItem
        //instance.getProductCategoryItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchProductCategoryItem', function() {
      it('should call patchProductCategoryItem successfully', function(done) {
        //uncomment below and update the code to test patchProductCategoryItem
        //instance.patchProductCategoryItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postProductCategoryCollection', function() {
      it('should call postProductCategoryCollection successfully', function(done) {
        //uncomment below and update the code to test postProductCategoryCollection
        //instance.postProductCategoryCollection(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putProductCategoryItem', function() {
      it('should call putProductCategoryItem successfully', function(done) {
        //uncomment below and update the code to test putProductCategoryItem
        //instance.putProductCategoryItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
