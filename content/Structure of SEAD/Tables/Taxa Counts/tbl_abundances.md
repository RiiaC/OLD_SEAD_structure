---
table_name: tbl_abundances
primary_key: "[[abundance_id]]"
foreign_keys:
  - "[[abundance_element_id]]"
  - "[[analysis_entity_id]]"
  - "[[taxon_id]]"
columns:
  - "[[abundance]]"
  - "[[date_updated]]"
connected_tables:
  - "[[tbl_abundance_elements]]"
  - "[[tbl_analysis_entities]]"
  - "[[tbl_taxa_tree_master]]"
date created: Friday, September 19th 2025, 3:37:16 pm
publish: publish
---

Records data related to biological proxies, such as individual counts, presence indicators, or scaled values, linking each entry to a specific taxon through an analysis entity. It serves as a species list detailing abundance information for a single physical sample. The intermediate analysis entity allows for the association of multiple proxies per sample. Entries typically reflect count values (abundance), but can also denote presence (1) or use categorical or relative scales, as specified by the dataset's data type.
