# OldpApi.AnnotationLabelsApi

All URIs are relative to *https://de.openlegaldata.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**annotationLabelsCreate**](AnnotationLabelsApi.md#annotationLabelsCreate) | **POST** /annotation_labels/ | 
[**annotationLabelsDelete**](AnnotationLabelsApi.md#annotationLabelsDelete) | **DELETE** /annotation_labels/{id}/ | 
[**annotationLabelsList**](AnnotationLabelsApi.md#annotationLabelsList) | **GET** /annotation_labels/ | 
[**annotationLabelsPartialUpdate**](AnnotationLabelsApi.md#annotationLabelsPartialUpdate) | **PATCH** /annotation_labels/{id}/ | 
[**annotationLabelsRead**](AnnotationLabelsApi.md#annotationLabelsRead) | **GET** /annotation_labels/{id}/ | 
[**annotationLabelsUpdate**](AnnotationLabelsApi.md#annotationLabelsUpdate) | **PUT** /annotation_labels/{id}/ | 


<a name="annotationLabelsCreate"></a>
# **annotationLabelsCreate**
> AnnotationLabel annotationLabelsCreate(data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.AnnotationLabelsApi();

var data = new OldpApi.AnnotationLabel(); // AnnotationLabel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.annotationLabelsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**AnnotationLabel**](AnnotationLabel.md)|  | 

### Return type

[**AnnotationLabel**](AnnotationLabel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="annotationLabelsDelete"></a>
# **annotationLabelsDelete**
> annotationLabelsDelete(id, )





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.AnnotationLabelsApi();

var id = 56; // Number | A unique integer value identifying this Label.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.annotationLabelsDelete(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Label. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="annotationLabelsList"></a>
# **annotationLabelsList**
> InlineResponse200 annotationLabelsList(opts)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.AnnotationLabelsApi();

var opts = { 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'owner': 8.14, // Number | 
  'slug': "slug_example", // String | 
  '_private': "_private_example", // String | 
  'trusted': "trusted_example", // String | 
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
apiInstance.annotationLabelsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **owner** | **Number**|  | [optional] 
 **slug** | **String**|  | [optional] 
 **_private** | **String**|  | [optional] 
 **trusted** | **String**|  | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="annotationLabelsPartialUpdate"></a>
# **annotationLabelsPartialUpdate**
> AnnotationLabel annotationLabelsPartialUpdate(id, data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.AnnotationLabelsApi();

var id = 56; // Number | A unique integer value identifying this Label.

var data = new OldpApi.AnnotationLabel(); // AnnotationLabel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.annotationLabelsPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Label. | 
 **data** | [**AnnotationLabel**](AnnotationLabel.md)|  | 

### Return type

[**AnnotationLabel**](AnnotationLabel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="annotationLabelsRead"></a>
# **annotationLabelsRead**
> AnnotationLabel annotationLabelsRead(id, )





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.AnnotationLabelsApi();

var id = 56; // Number | A unique integer value identifying this Label.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.annotationLabelsRead(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Label. | 

### Return type

[**AnnotationLabel**](AnnotationLabel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="annotationLabelsUpdate"></a>
# **annotationLabelsUpdate**
> AnnotationLabel annotationLabelsUpdate(id, data)





### Example
```javascript
var OldpApi = require('oldp-api');
var defaultClient = OldpApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new OldpApi.AnnotationLabelsApi();

var id = 56; // Number | A unique integer value identifying this Label.

var data = new OldpApi.AnnotationLabel(); // AnnotationLabel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.annotationLabelsUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Label. | 
 **data** | [**AnnotationLabel**](AnnotationLabel.md)|  | 

### Return type

[**AnnotationLabel**](AnnotationLabel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

