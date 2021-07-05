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
    define(['ApiClient', 'model/VirusFound'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VirusFound'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveVirusApiClient) {
      root.CloudmersiveVirusApiClient = {};
    }
    root.CloudmersiveVirusApiClient.VirusScanAdvancedResult = factory(root.CloudmersiveVirusApiClient.ApiClient, root.CloudmersiveVirusApiClient.VirusFound);
  }
}(this, function(ApiClient, VirusFound) {
  'use strict';




  /**
   * The VirusScanAdvancedResult model module.
   * @module model/VirusScanAdvancedResult
   * @version 1.2.2
   */

  /**
   * Constructs a new <code>VirusScanAdvancedResult</code>.
   * Result of running an advanced virus scan
   * @alias module:model/VirusScanAdvancedResult
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>VirusScanAdvancedResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VirusScanAdvancedResult} obj Optional instance to populate.
   * @return {module:model/VirusScanAdvancedResult} The populated <code>VirusScanAdvancedResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CleanResult')) {
        obj['CleanResult'] = ApiClient.convertToType(data['CleanResult'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsExecutable')) {
        obj['ContainsExecutable'] = ApiClient.convertToType(data['ContainsExecutable'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsInvalidFile')) {
        obj['ContainsInvalidFile'] = ApiClient.convertToType(data['ContainsInvalidFile'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsScript')) {
        obj['ContainsScript'] = ApiClient.convertToType(data['ContainsScript'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsPasswordProtectedFile')) {
        obj['ContainsPasswordProtectedFile'] = ApiClient.convertToType(data['ContainsPasswordProtectedFile'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsRestrictedFileFormat')) {
        obj['ContainsRestrictedFileFormat'] = ApiClient.convertToType(data['ContainsRestrictedFileFormat'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsMacros')) {
        obj['ContainsMacros'] = ApiClient.convertToType(data['ContainsMacros'], 'Boolean');
      }
      if (data.hasOwnProperty('ContainsXmlExternalEntities')) {
        obj['ContainsXmlExternalEntities'] = ApiClient.convertToType(data['ContainsXmlExternalEntities'], 'Boolean');
      }
      if (data.hasOwnProperty('VerifiedFileFormat')) {
        obj['VerifiedFileFormat'] = ApiClient.convertToType(data['VerifiedFileFormat'], 'String');
      }
      if (data.hasOwnProperty('FoundViruses')) {
        obj['FoundViruses'] = ApiClient.convertToType(data['FoundViruses'], [VirusFound]);
      }
    }
    return obj;
  }

  /**
   * True if the scan contained no viruses, false otherwise
   * @member {Boolean} CleanResult
   */
  exports.prototype['CleanResult'] = undefined;
  /**
   * True if the scan contained an executable (application code), which can be a significant risk factor
   * @member {Boolean} ContainsExecutable
   */
  exports.prototype['ContainsExecutable'] = undefined;
  /**
   * True if the scan contained an invalid file (such as a PDF that is not a valid PDF, Word Document that is not a valid Word Document, etc.), which can be a significant risk factor
   * @member {Boolean} ContainsInvalidFile
   */
  exports.prototype['ContainsInvalidFile'] = undefined;
  /**
   * True if the scan contained a script (such as a PHP script, Python script, etc.) which can be a significant risk factor
   * @member {Boolean} ContainsScript
   */
  exports.prototype['ContainsScript'] = undefined;
  /**
   * True if the scan contained a password protected or encrypted file, which can be a significant risk factor
   * @member {Boolean} ContainsPasswordProtectedFile
   */
  exports.prototype['ContainsPasswordProtectedFile'] = undefined;
  /**
   * True if the uploaded file is of a type that is not allowed based on the optional restrictFileTypes parameter, false otherwise; if restrictFileTypes is not set, this will always be false
   * @member {Boolean} ContainsRestrictedFileFormat
   */
  exports.prototype['ContainsRestrictedFileFormat'] = undefined;
  /**
   * True if the uploaded file contains embedded Macros of other embedded threats within the document, which can be a significant risk factor
   * @member {Boolean} ContainsMacros
   */
  exports.prototype['ContainsMacros'] = undefined;
  /**
   * True if the uploaded file contains embedded XML External Entity threats of other embedded threats within the document, which can be a significant risk factor
   * @member {Boolean} ContainsXmlExternalEntities
   */
  exports.prototype['ContainsXmlExternalEntities'] = undefined;
  /**
   * For file format verification-supported file formats, the contents-verified file format of the file.  Null indicates that the file format is not supported for contents verification.  If a Virus or Malware is found, this field will always be set to Null.
   * @member {String} VerifiedFileFormat
   */
  exports.prototype['VerifiedFileFormat'] = undefined;
  /**
   * Array of viruses found, if any
   * @member {Array.<module:model/VirusFound>} FoundViruses
   */
  exports.prototype['FoundViruses'] = undefined;



  return exports;
}));


