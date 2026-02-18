---
Target_Entity: "[[Entity abundance_element]]"
Local_Keys:
  - element
Remote_Keys: element
SEAD_table: "[[tbl_abundances]]"
date created: Wednesday, February 18th 2026, 9:38:29 am
New_Column_Name: abundance
Source_Column: "1"
---

We are going with the assumption that there is one bone for each sample, therefore we also add an extra column, with a New Column Name of abundance, and a Source Column = 1, 

This join fills the [[abundance_element_id]] column of this entity with the appropriate numbers from the system_id row of the [[Entity abundance_element]] sheet
