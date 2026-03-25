---
foreign_keys:
  - "[[Entity record_type]]"
Entity_Name: abundance_element
Type: Data (Derived)
Public_ID: "[[abundance_element_id]]"
SEAD_table: "[[tbl_abundance_elements]]"
publish: publish
status: complete
---
> [!info] the columns that have to do with abundance_element are 
> `Sort` 
> `Art_1`
> `Art_2` 

- [ ] create a data-derived entity for `abundance_element`
- [ ] add the columns `labnr`, `sort`, `art_1`, `art_2` 
- [ ] drop duplicates for the column `sort`
- [ ] create an extra column [[element_name]] and fill it with the data from `sort` 
      (Or, perhaps from a combination of `sort`and `art_1`? *Ask the expert you consult with to determine species from common names*)
- [ ] determine what terms in `art_2` are not common names, extract those to another column called [[element_description]]
- [ ] create a Foreign Key join to the [[Entity record_type]] joined on `art_1`




 ![[Entity abundance_element schema.png|800]]



