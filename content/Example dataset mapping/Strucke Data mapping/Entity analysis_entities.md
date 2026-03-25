---
Entity_Name: analysis_entities
Type: Data (Derived)
Public_ID: "[[analysis_entity_dimension_id]]"
Target_Entity:
Local_Keys:
  - 
  - 
  - 
Remote_Keys:
SEAD_table: "[[tbl_analysis_entities]]"
status: inn progress
---
> [!info]  The table that records what is actually analysed. 
> In this dataset, perhaps we can simply attach an analysis_entities_id to every row by `labnr` and call it good?

- [ ] create the data-derived analysis_entities and select `labnr
- [ ] create a join with [[content/Example dataset mapping/Strucke Data mapping/Entity physical_samples|Entity physical_samples]] on `labnr`

> [!warning] Do not set either of the joined entities to "drop duplicates", or you will get an error message on the join.



![[Entity analysis_entities schema.png]]


