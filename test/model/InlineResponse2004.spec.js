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
    instance = new OpenLegalDataJavaScriptApi.InlineResponse2004();
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

  describe('InlineResponse2004', function() {
    it('should create an instance of InlineResponse2004', function() {
      // uncomment below and update the code to test InlineResponse2004
      //var instance = new OpenLegalDataJavaScriptApi.InlineResponse2004();
      //expect(instance).to.be.a(OpenLegalDataJavaScriptApi.InlineResponse2004);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new OpenLegalDataJavaScriptApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property next (base name: "next")', function() {
      // uncomment below and update the code to test the property next
      //var instance = new OpenLegalDataJavaScriptApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property previous (base name: "previous")', function() {
      // uncomment below and update the code to test the property previous
      //var instance = new OpenLegalDataJavaScriptApi.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instance = new OpenLegalDataJavaScriptApi.InlineResponse2004();
      //expect(instance).to.be();
    });

  });

}));
