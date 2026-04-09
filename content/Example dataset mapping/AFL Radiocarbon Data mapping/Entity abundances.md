---
foreign_keys:
  - "[[rdb_system_id]]"
Entity_Name: abundances
Type: Data (Derived)
Public_ID: "[[abundance_id]]"
Target_Entity: "[[content/Example dataset mapping/AFL Radiocarbon Data mapping/Entity dating_material]]"
Local_Keys:
  - element
Remote_Keys: element
SEAD_table: "[[tbl_abundances]]"
Target_Entity_2: "[[content/Example dataset mapping/AFL Radiocarbon Data mapping/Entity taxa_tree_master]]"
Local_Keys_2: "[[taxon_id]]"
status: complete
---
Assuming there is one bone for each sample, and all bones are from harp seals, I add extra columns:

| New Column Name | Source Column |
| --------------- | ------------- |
| abundance       | 1             |
| taxon_id        | 1             |

The first join join fills the [[abundance_element_id]] column of this entity with the appropriate numbers for each bone from the system_id row of the [[content/Example dataset mapping/AFL Radiocarbon Data mapping/Entity dating_material]] sheet.
The second join links the various taxa information to the abundances

![[content/images/Entity abundances schema.png|1000]]
