/**
 * Open Legal Data API
 * With the Open Legal Data API you can access various data from the legal domain, e.g. law text or case files. The data may be used for semantic analysis or to create statistics. For more information visit our website. https://openlegaldata.io/
 *
 * OpenAPI spec version: v1
 * Contact: hello@openlegaldata.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenLegalDataJavaScriptApi);
  }
}(this, function(expect, OpenLegalDataJavaScriptApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenLegalDataJavaScriptApi.CasesApi();
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

  describe('CasesApi', function() {
    describe('casesCreate', function() {
      it('should call casesCreate successfully', function(done) {
        //uncomment below and update the code to test casesCreate
        //instance.casesCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesDelete', function() {
      it('should call casesDelete successfully', function(done) {
        //uncomment below and update the code to test casesDelete
        //instance.casesDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesList', function() {
      it('should call casesList successfully', function(done) {
        //uncomment below and update the code to test casesList
        //instance.casesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesPartialUpdate', function() {
      it('should call casesPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test casesPartialUpdate
        //instance.casesPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesRead', function() {
      it('should call casesRead successfully', function(done) {
        //uncomment below and update the code to test casesRead
        //instance.casesRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesSearchList', function() {
      it('should call casesSearchList successfully', function(done) {
        //uncomment below and update the code to test casesSearchList
        //instance.casesSearchList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesUpdate', function() {
      it('should call casesUpdate successfully', function(done) {
        //uncomment below and update the code to test casesUpdate
        //instance.casesUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
