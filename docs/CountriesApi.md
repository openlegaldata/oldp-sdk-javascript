# OldpApi.CountriesApi

All URIs are relative to *https://de.openlegaldata.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesList**](CountriesApi.md#countriesList) | **GET** /countries/ | 
[**countriesRead**](CountriesApi.md#countriesRead) | **GET** /countries/{id}/ | 


<a name="countriesList"></a>
# **countriesList**
> InlineResponse2006 countriesList(opts)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CountriesApi();

var opts = { 
  'code': "code_example", // String | 
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.countriesList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="countriesRead"></a>
# **countriesRead**
> Country countriesRead(id)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.CountriesApi();

var id = 56; // Number | A unique integer value identifying this country.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.countriesRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this country. | 

### Return type

[**Country**](Country.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

