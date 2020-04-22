/**
 * virusapi
 * The Cloudmersive Virus Scan API lets you scan files and content for viruses and identify security issues with content.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveVirusApiClient) {
      root.CloudmersiveVirusApiClient = {};
    }
    root.CloudmersiveVirusApiClient.WebsiteScanRequest = factory(root.CloudmersiveVirusApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WebsiteScanRequest model module.
   * @module model/WebsiteScanRequest
   * @version 1.1.7
   */

  /**
   * Constructs a new <code>WebsiteScanRequest</code>.
   * Request to scan a website for malicious content
   * @alias module:model/WebsiteScanRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WebsiteScanRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebsiteScanRequest} obj Optional instance to populate.
   * @return {module:model/WebsiteScanRequest} The populated <code>WebsiteScanRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Url')) {
        obj['Url'] = ApiClient.convertToType(data['Url'], 'String');
      }
    }
    return obj;
  }

  /**
   * URL of the website to scan; should begin with http:// or https://
   * @member {String} Url
   */
  exports.prototype['Url'] = undefined;



  return exports;
}));


