---
Entity_Name: record_type
Type: Data (Derived)
Public_ID: "[[record_type_id]]"
SEAD_table: "[[tbl_record_types]]"
status: awaiting lookup table data
---
> [!info] might be useful in conjunction with the **Sort**, **Art_1** and **Art_2** columns, which contain a large variety of things, some of which are trees, some are animals, etc.
> The [[tbl_record_types]] *"Categorizes biological proxies based on their general usage or origin, enabling the creation of meaningful subsets from the complete taxonomic index and associated abundance elements. It ensures relevance by excluding options like 'seed' from datasets related to insects. The classification is primarily at the 'Order' level in the taxonomic hierarchy. For example, 'Insects & similar' includes insects, arthropods, and other related animals, while 'Plants & pollen' groups entities with shared ecological significance, such as plant presence."*

- [ ] create a data-derived entity backed on the document created for linking the `common_name`s with the `species`  ([Strucke common names etc.xlsx](https://umeauniversity.sharepoint.com/:x:/r/sites/SEAD72/Shared%20Documents/Task%20force%20-%20System%20analysis%20of%20radiocarbon%20data/Datasets/Strucke/Work%20in%20progress/Strucke%20common%20names%20etc.xlsx?d=wba13373237f54e0f91bf8a273b9f5ef6&csf=1&web=1&e=CpZzYo))
- [ ] choose the columns for `record_type_name`, `record_type_description`, `sort`, `art_1`, `art_2`





![[Entity record_type.png]]