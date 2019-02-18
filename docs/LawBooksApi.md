# OldpApi.LawBooksApi

All URIs are relative to *https://de.openlegaldata.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lawBooksCreate**](LawBooksApi.md#lawBooksCreate) | **POST** /law_books/ | 
[**lawBooksDelete**](LawBooksApi.md#lawBooksDelete) | **DELETE** /law_books/{id}/ | 
[**lawBooksList**](LawBooksApi.md#lawBooksList) | **GET** /law_books/ | 
[**lawBooksPartialUpdate**](LawBooksApi.md#lawBooksPartialUpdate) | **PATCH** /law_books/{id}/ | 
[**lawBooksRead**](LawBooksApi.md#lawBooksRead) | **GET** /law_books/{id}/ | 
[**lawBooksUpdate**](LawBooksApi.md#lawBooksUpdate) | **PUT** /law_books/{id}/ | 


<a name="lawBooksCreate"></a>
# **lawBooksCreate**
> LawBook lawBooksCreate(data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawBooksApi();

var data = new OldpApi.LawBook(); // LawBook | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lawBooksCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**LawBook**](LawBook.md)|  | 

### Return type

[**LawBook**](LawBook.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lawBooksDelete"></a>
# **lawBooksDelete**
> lawBooksDelete(id, )





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawBooksApi();

var id = 56; // Number | A unique integer value identifying this law book.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lawBooksDelete(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this law book. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lawBooksList"></a>
# **lawBooksList**
> InlineResponse2008 lawBooksList(opts)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawBooksApi();

var opts = { 
  'slug': "slug_example", // String | 
  'code': "code_example", // String | 
  'latest': "latest_example", // String | 
  'revisionDate': "revisionDate_example", // String | 
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
apiInstance.lawBooksList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 
 **latest** | **String**|  | [optional] 
 **revisionDate** | **String**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lawBooksPartialUpdate"></a>
# **lawBooksPartialUpdate**
> LawBook lawBooksPartialUpdate(id, data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawBooksApi();

var id = 56; // Number | A unique integer value identifying this law book.

var data = new OldpApi.LawBook(); // LawBook | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lawBooksPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this law book. | 
 **data** | [**LawBook**](LawBook.md)|  | 

### Return type

[**LawBook**](LawBook.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lawBooksRead"></a>
# **lawBooksRead**
> LawBook lawBooksRead(id, )





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawBooksApi();

var id = 56; // Number | A unique integer value identifying this law book.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lawBooksRead(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this law book. | 

### Return type

[**LawBook**](LawBook.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lawBooksUpdate"></a>
# **lawBooksUpdate**
> LawBook lawBooksUpdate(id, data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.LawBooksApi();

var id = 56; // Number | A unique integer value identifying this law book.

var data = new OldpApi.LawBook(); // LawBook | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lawBooksUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this law book. | 
 **data** | [**LawBook**](LawBook.md)|  | 

### Return type

[**LawBook**](LawBook.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

