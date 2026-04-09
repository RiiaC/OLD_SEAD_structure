---
table_name: tbl_dimensions
primary_key: "[[dimension_id]]"
foreign_keys:
  - "[[method_group_id]]"
  - "[[unit_id]]"
columns:
  - "[[date_updated]]"
  - "[[dimension_abbrev]]"
  - "[[dimension_description]]"
  - "[[dimension_name]]"
connected_tables:
  - "[[tbl_method_groups]]"
  - "[[tbl_units]]"
date created: Friday, September 19th 2025, 3:37:16 pm
---

Contains definitions of various measurement types, such as sample weight and core length, categorized by method group.
