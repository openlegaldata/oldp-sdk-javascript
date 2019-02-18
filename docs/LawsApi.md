# OldpApi.LawsApi

All URIs are relative to *https://de.openlegaldata.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lawsCreate**](LawsApi.md#lawsCreate) | **POST** /laws/ | 
[**lawsDelete**](LawsApi.md#lawsDelete) | **DELETE** /laws/{id}/ | 
[**lawsList**](LawsApi.md#lawsList) | **GET** /laws/ | 
[**lawsPartialUpdate**](LawsApi.md#lawsPartialUpdate) | **PATCH** /laws/{id}/ | 
[**lawsRead**](LawsApi.md#lawsRead) | **GET** /laws/{id}/ | 
[**lawsSearchList**](LawsApi.md#lawsSearchList) | **GET** /laws/search/ | 
[**lawsUpdate**](LawsApi.md#lawsUpdate) | **PUT** /laws/{id}/ | 


<a name="lawsCreate"></a>
# **lawsCreate**
> Law lawsCreate(data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawsApi();

var data = new OldpApi.Law(); // Law | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lawsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Law**](Law.md)|  | 

### Return type

[**Law**](Law.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lawsDelete"></a>
# **lawsDelete**
> lawsDelete(id, )





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawsApi();

var id = 56; // Number | A unique integer value identifying this law.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lawsDelete(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this law. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lawsList"></a>
# **lawsList**
> InlineResponse2009 lawsList(opts)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawsApi();

var opts = { 
  'bookId': "bookId_example", // String | 
  'bookLatest': "bookLatest_example", // String | 
  'bookRevisionDate': "bookRevisionDate_example", // String | 
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
apiInstance.lawsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **String**|  | [optional] 
 **bookLatest** | **String**|  | [optional] 
 **bookRevisionDate** | **String**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lawsPartialUpdate"></a>
# **lawsPartialUpdate**
> Law lawsPartialUpdate(id, data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawsApi();

var id = 56; // Number | A unique integer value identifying this law.

var data = new OldpApi.Law(); // Law | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lawsPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this law. | 
 **data** | [**Law**](Law.md)|  | 

### Return type

[**Law**](Law.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lawsRead"></a>
# **lawsRead**
> Law lawsRead(id, )





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawsApi();

var id = 56; // Number | A unique integer value identifying this law.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lawsRead(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this law. | 

### Return type

[**Law**](Law.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lawsSearchList"></a>
# **lawsSearchList**
> InlineResponse20010 lawsSearchList(text, opts)



Search view

### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawsApi();

var text = "text_example"; // String | Search query on text content (Lucence syntax support).

var opts = { 
  'facetModelName': "facetModelName_example", // String | facet_model_name
  'bookCode': "bookCode_example", // String | book_code
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lawsSearchList(text, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Search query on text content (Lucence syntax support). | 
 **facetModelName** | **String**| facet_model_name | [optional] 
 **bookCode** | **String**| book_code | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lawsUpdate"></a>
# **lawsUpdate**
> Law lawsUpdate(id, data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawsApi();

var id = 56; // Number | A unique integer value identifying this law.

var data = new OldpApi.Law(); // Law | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lawsUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this law. | 
 **data** | [**Law**](Law.md)|  | 

### Return type

[**Law**](Law.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

