# OldpApi.AnnotationLabel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**owner** | **String** |  | [optional] 
**trusted** | **String** |  | [optional] 
**name** | **String** | Verbose name, e.g. This Awesome annotation | 
**slug** | **String** | Identifier, e.g. this-awesome-annotation | 
**_private** | **Boolean** | Private annotations are only visible to its author | [optional] 
**manyAnnotationsPerLabel** | **Boolean** | A content object can have more than one annotation per label | [optional] 
**useMarker** | **Boolean** | Marker annotations are extracted from the text content and have a position in the text | [optional] 
**annotationValueType** | **String** | Annotation values must be in this data type | [optional] 
**color** | **String** |  | [optional] 
**createdAt** | **Date** | Entry is created at this date time | [optional] 
**updatedAt** | **Date** | Date time of last change | [optional] 


<a name="AnnotationValueTypeEnum"></a>
## Enum: AnnotationValueTypeEnum


* `str` (value: `"str"`)

* `int` (value: `"int"`)




