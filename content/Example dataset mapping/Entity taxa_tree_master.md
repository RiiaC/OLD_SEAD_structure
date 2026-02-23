---
Entity_Name: taxa_tree_master
Type: Fixed Values
Public_ID: "[[taxon_id]]"
Target_Entity: "[[Entity tbl_taxa_tree_genera]]"
Local_Keys:
  - "[[genus_id]]"
Remote_Keys: system_id
status: complete
---
Since this is fixed values, I just created these extra columns:

| New Column Name | Source Column |
| --------------- | ------------- |
| species         | groenlandicus |
| genus_id        | 1             |
> [!info] The fixed value genus_id is necessary because a species name has an associated genus name that precedes it (The harp seal is formally called *Pagophilus groenlandicus*)
> Therefore, this key is used to associate the species with the genus.

![[Entity taxa_tree_master schema.png]]