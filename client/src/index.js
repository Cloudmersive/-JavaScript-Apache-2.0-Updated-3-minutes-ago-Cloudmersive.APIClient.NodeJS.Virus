/**
 * virusapi
 * Virus API lets you scan files and content for viruses and identify security issues with content.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/VirusFound', 'model/VirusScanResult', 'api/ScanApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/VirusFound'), require('./model/VirusScanResult'), require('./api/ScanApi'));
  }
}(function(ApiClient, VirusFound, VirusScanResult, ScanApi) {
  'use strict';

  /**
   * Virus_API_lets_you_scan_files_and_content_for_viruses_and_identify_security_issues_with_content_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CloudmersiveVirusApiClient = require('index'); // See note below*.
   * var xxxSvc = new CloudmersiveVirusApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CloudmersiveVirusApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CloudmersiveVirusApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CloudmersiveVirusApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.1.2
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The VirusFound model constructor.
     * @property {module:model/VirusFound}
     */
    VirusFound: VirusFound,
    /**
     * The VirusScanResult model constructor.
     * @property {module:model/VirusScanResult}
     */
    VirusScanResult: VirusScanResult,
    /**
     * The ScanApi service constructor.
     * @property {module:api/ScanApi}
     */
    ScanApi: ScanApi
  };

  return exports;
}));
