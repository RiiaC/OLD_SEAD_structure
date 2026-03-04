---
Entity_Name: property_types
Type: Fixed Values
Public_ID: "[[property_type_id|site_property_type_id]]"
Target_Entity:
Local_Keys:
  - 
  - 
  - 
Remote_Keys:
SEAD_table:
date created: Wednesday, February 18th 2026, 9:38:29 am
status:
---
> [!info] an entity Roger created 2026-03-03 so that we can have both the RAÄ number and Lämnings number so that both sorts of information can be included.
> 
> He assigned a column: site_property_name and added two rows:

| system_id | site_property_type-id | site_propery_name       |
| --------- | --------------------- | ----------------------- |
| 1         |                       | National site identifer |
| 2         |                       | raa_number              |



> [!error] Roger will continue to work with this question, in the short term I will use here the entity names he entered into the Shape Shifter Project, and will change here, when that gets updated

> [!warning] Roger says: I gave you wrong tables names yesterday. These two selects works on our staging server. Both tables are new and empty:
> 
> select *  
> from tbl_site_properties
> 
> select *  
> from tbl_property_types





