---
Entity_Name: modification_types
Type: Fixed Values
Public_ID: "[[modification_type_id]]"
Target_Entity:
Local_Keys:
  - 
  - 
  - 
Remote_Keys:
SEAD_table: "[[tbl_modification_types]]"
status:
---
> [!info] the table into which we will put the info from [[C. Biological Age]]


- [x] create fixed-value table for the modification types used in this dataset, and enter the following:

| modification_type_id | modification_type_name | modification_type_description                                          |
| -------------------- | ---------------------- | ---------------------------------------------------------------------- |
|                      | nd                     | The estimated biological age at death for this bone was not determined |
|                      | 0-3 m                  | The estimated biological age at death for this bone was 0 to 3 months  |
|                      | 3-10 m                 | The estimated biological age at death for this bone was 3 to 10 months |
|                      | neonat                 | The estimated biological age at death for this bone was 'neonatal'     |
|                      | juvenile               | The estimated biological age at death for this bone was 'juvenile'     |
|                      | subadult               | The estimated biological age at death for this bone was 'subadult'     |
|                      | adult                  | The estimated biological age at death for this bone was 'adult'        |


![[Entity modification_types schema.png]]