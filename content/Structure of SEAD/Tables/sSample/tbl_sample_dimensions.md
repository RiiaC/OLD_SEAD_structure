---
table_name: tbl_sample_dimensions
primary_key: "[[sample_dimension_id]]"
foreign_keys:
  - "[[dimension_id]]"
  - "[[method_id]]"
  - "[[physical_sample_id]]"
  - "[[qualifier_id]]"
columns:
  - "[[date_updated]]"
  - "[[dimension_value]]"
connected_tables:
  - "[[tbl_dimensions]]"
  - "[[tbl_methods]]"
  - "[[tbl_physical_samples]]"
  - "[[tbl_value_qualifiers]]"
---

Contains measurable dimension data for samples, excluding coordinates. This includes attributes such as volume, weight, and depth within stratigraphy or cores.
