---
Entity_Name: abundance_element
Type: Data (Derived)
Public_ID: "[[dating_material_id]]"
SEAD_table: "[[tbl_dating_material]]"
status: add more corrections?
---
This entity corresponds to the [[B. Element]] column in the original source data file, which lists which sort of bone underwent Radiocarbon dating. 

There are 12 types of bones in this data set. Use the *Drop Duplicates,* and *Drop Empty Rows* options to create this list:

| system_id | Element    |
| --------- | ---------- |
| 1         | Phalanx    |
| 2         | Femur      |
| 3         | Temporal   |
| 4         | Mandibula  |
| 5         | nd         |
| 6         | Humerus    |
| 7         | Scapula    |
| 8         | Fibula     |
| 9         | Vertebra   |
| 10        | Occipitale |
| 11        | Cranium    |
| 12        | Radius     |
# YAML

````
name: dating_material
type: entity
system_id: system_id
keys: []
columns:
  - element
  - site
  - lab_nr
public_id: dating_material_id
source: datasheet
drop_duplicates:
  - element
check_functional_dependency: true
drop_empty_rows:
  - element
extra_columns:
  dating_material: element
`````




![[Entity abundance_element schema.png|800]]



