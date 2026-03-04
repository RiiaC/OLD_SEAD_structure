---
Entity_Name: site_property
Type: Data (Derived)
Public_ID: site_property_id
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
> [!info] this is an Entity Roger created reated 2026-03-03 This one assigns a value of 1 to all rows with a lämningsnummer
> 
> He selected the column lmningsnummer from the source datasheet, and under "extra columns" created:

| New Column Name                             | Expression |
| ------------------------------------------- | ---------- |
| [[property_type_id\|site_property_type_id]] | 1          |




> [!error] Roger will continue to work with this question, in the short term I will use here the entity names he entered into the Shape Shifter Project, and will change here, when that gets updated

> [!warning] Roger says: I gave you wrong tables names yesterday. These two selects works on our staging server. Both tables are new and empty:
> 
> select *  
> from tbl_site_properties
> 
> select *  
> from tbl_property_types







