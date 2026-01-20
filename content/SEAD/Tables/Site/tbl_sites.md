---
table_name: tbl_sites
primary_key: "[[site_id]]"
foreign_keys:
  - "[[site_preservation_status_id]]"
columns:
  - "[[altitude]]"
  - "[[latitude_dd]]"
  - "[[longitude_dd]]"
  - "[[national_site_identifier]]"
  - "[[site_description]]"
  - "[[site_location_accuracy]]"
  - "[[site_name]]"
  - "[[site_uuid]]"
connected_tables:
  - "[[tbl_site_preservation_status]]"
date created: Friday, September 19th 2025, 3:37:16 pm
url: https://humlab-sead.github.io/sead-schema/tables/tbl_sites.html
---
- [x] fix the primary key for this--you seem to have deleted site_id somehow--put it back with all connections intact.
 
Records detailed information about each excavation or sampling location i.e. a defined location where samples have been collected through excavation.
