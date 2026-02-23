---
Entity_Name: abundance_element
Type: Data (Derived)
Public_ID: "[[abundance_element_id]]"
SEAD_table: "[[tbl_abundance_elements]]"
publish: publish
status: add more corrections?
---
This entity corresponds to the [[B. Element]] column in the original source data file, which lists which sort of bone underwent Radiocarbon dating. 

There are 12 types of bones in this data set. Use the *Drop Duplicates,* and *Drop Empty Rows* options to create this list:

| system_id | record_type_id | Element    |
| --------- | -------------- | ---------- |
| 1         | 14             | Phalanx    |
| 2         | 14             | Femur      |
| 3         | 14             | Temporal   |
| 4         | 14             | Mandibula  |
| 5         | 14             | nd         |
| 6         | 14             | Humerus    |
| 7         | 14             | Scapula    |
| 8         | 14             | Fibula     |
| 9         | 14             | Vertebra   |
| 10        | 14             | Occipitale |
| 11        | 14             | Cranium    |
| 12        | 14             | Radius     |

> [!note] An extra column was used to record the fact that animal bones are already in SEAD as **tbl_record_type**s,  [[record_type_id]] = 14
>(Rather than creating a separate entity for **record_type** and joining it to this entity)

| New Column Name | Source Column |
| --------------- | ------------- |
| record_type_id  | 14            |
> [!warning] Do we want to add a "dating material" entity?


![[Entity abundance_element schema.png|800]]



