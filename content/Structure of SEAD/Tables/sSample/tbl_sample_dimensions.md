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

## standard measurements

| dimension_id | dimension_abbrev  | dimension_name          | dimension_description                                                                 | unit_id |
| ------------ | ----------------- | ----------------------- | ------------------------------------------------------------------------------------- | ------- |
| 4            | h                 | Height                  | Height of sample                                                                      | 1       |
| 5            | v                 | Volume                  | Sample volume                                                                         | 3       |
| 1            | w                 | Weight                  | Sample weight                                                                         | 2       |
| 6            | d                 | Core diameter           | Diameter of core                                                                      | 1       |
| 3            | NULL              | Sample/core width       | Width of entire sample or (square) core width                                         | 1       |
| 44           | Tree diameter (m) | Tree diameter in metres | Diameter of tree sampled for dendrochronological and/or climatological investigation. | 1       |
## sample layer position measurements

| dimension_id | dimension_abbrev     | dimension_name                                 | dimension_description                                                                                                                                       | unit_id |
| ------------ | -------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 24           | NULL                 | Upper boundary depth (negative) from reference | Negative values denote depth of upper sample/unit/core etc boundary from reference line (e.g. profile line, core top), reference point or datum, in metres. | 1       |
| 20           | NULL                 | Upper boundary depth (negative) from surface   | Negative values denote depth of upper sample/unit/core etc boundary from ground or water surface in metres.                                                 | 1       |
| 23           | NULL                 | Upper boundary depth (positive) from reference | Positive values denote depth of upper sample/unit/core etc boundary from reference line (e.g. profile line, core top), reference point or datum, in metres. | 1       |
| 27           | NULL                 | Upper boundary depth from unknown reference    | Depth of upper sample boundary from unknown or unspecified reference level                                                                                  | 1       |
| 26           | NULL                 | Lower boundary depth (negative) from reference | Negative values denote depth of lower sample/unit/core etc boundary from reference line (e.g. profile line, core top), reference point or datum, in metres. | 1       |
| 22           | NULL                 | Lower boundary depth (negative) from surface   | Negative values denote depth of lower sample/unit/core etc boundary from ground or water surface in metres.                                                 | 1       |
| 25           | NULL                 | Lower boundary depth (positive) from reference | Positive values denote depth of lower sample/unit/core etc boundary from reference line (e.g. profile line, core top), reference point or datum, in metres. | 1       |
| 21           | NULL                 | Lower boundary depth (positive) from surface   | Positive values denote depth of lower sample/unit/core etc boundary from ground or water surface in metres.                                                 | 1       |
| 2            | NULL                 | Lower boundary depth from unknown reference    | Depth of lower sample boundary from unknown or unspecified reference level                                                                                  | 1       |
| 19           | NULL                 | Positive boundary depth from surface upper     | Positive values denote depth of upper sample/unit/core etc boundary from ground or water surface in metres.                                                 | 1       |
| 43           | Sampling height (cm) | Sampling height in centimetres                 | Height at which a sample was retrieved. Positive values denotes distance measured from the ground-level.                                                    | 16      |
## ceramics measurements

| dimension_id | dimension_abbrev | dimension_name               | dimension_description                                                                       | unit_id |
| ------------ | ---------------- | ---------------------------- | ------------------------------------------------------------------------------------------- | ------- |
| 28           | h                | Vessel height                | Vessel height                                                                               | 1       |
| 42           | Height maximum   | Vessel height (cm) maximum   | Vessel height in centimeters, maximum                                                       | 16      |
| 41           | Height minimum   | Vessel height (cm) minimum   | Vessel height in centimeters, minimum                                                       | 16      |
| 31           | NULL             | Rim diameter                 | Vessel rim diameter                                                                         | 1       |
| 38           | Rim maximum      | Rim diameter (cm) maximum    | Vessel rim diameter in centimeters, maximum size measurement                                | 16      |
| 37           | Rim minimum      | Rim diameter (cm) minimum    | Vessel rim diameter in centimeters, minimum size measurement                                | 16      |
| 36           | Base maximum     | Base diameter (cm) maximum   | Vessel base diameter in centimeters, maximum size measurement                               | 16      |
| 35           | Base minimum     | Base diameter (cm) minimum   | Vessel base diameter in centimeters, minimum size measurement                               | 16      |
| 30           | NULL             | Base diameter                | Vessel base diameter                                                                        | 1       |
| 40           | Sherd maximum    | Sherd thickness (mm) maximum | Vessel sherd thickness in millimeters, maximum size measurement                             | 10      |
| 39           | Sherd minimum    | Sherd thickness (mm) minimum | Vessel sherd thickness in millimeters, minimum size measurement                             | 10      |
| 34           | Sherd thickness  | Sherd thickness (mm)         | Thickness of a sherd of burnt clay, measured in millimeters                                 | 10      |
| 29           | NULL             | Firing temperature (min)     | Minimum firing temperature required for creation of ceramic object                          | 9       |
| 32           | NULL             | Melting point                | Approximate ceramics melting point                                                          | 9       |
| 33           | NULL             | Melting point higher than    | Temperature at which ceramic vessel melting point was measured but not achieved. E.g. >1350 | 9       |
## Coordinates

| dimension_id | dimension_abbrev | dimension_name | dimension_description                                                                                              | unit_id |
| ------------ | ---------------- | -------------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| 7            | X/N              | X/North        | X coordinate or Northing in metres. Negative values are south of the origin (zero coordinate).                     | 1       |
| 9            | X/N              | X/North        | X coordinate or Northing in intrinsic units. Negative values are south of the origin (zero coordinate).            | 5       |
| 10           | X/E              | X/East         | X coordinate or Easting in metres. Negative values are west of the meridian or origin (the origin (0/0)).          | 1       |
| 11           | X/E              | X/East         | X coordinate or Easting in intrinsic units. Negative values are west of the meridian or origin (zero coordinate).  | 5       |
| 12           | X/E              | X/East         | X coordinate or Easting in decimal degrees. Negative values are west of the meridian or origin (zero coordinate).  | 4       |
| 13           | Y/N              | Y/North        | Y coordinate or Northing in metres. Negative values are south of the origin (zero coordinate).                     | 1       |
| 14           | Y/N              | Y/North        | Y coordinate or Northing in intrinsic units. Negative values are south of the origin (zero coordinate).            | 5       |
| 15           | Y/E              | Y/East         | Y coordinate or Easting in metres. Negative values are west of the meridian or origin (zero coordinate).           | 1       |
| 16           | Y/N              | Y/North        | Y coordinate or Northing in decimal degrees. Negative values are west of the meridian or origin (zero coordinate). | 4       |
| 17           | Y/E              | Y/East         | Y coordinate or Easting in intrinsic units. Negative values are west of the meridian or origin (zero coordinate).  | 5       |
| 18           | Z/Alt            | Z/Altitude     | Z coordinate or Altitude in metres.                                                                                | 1       |