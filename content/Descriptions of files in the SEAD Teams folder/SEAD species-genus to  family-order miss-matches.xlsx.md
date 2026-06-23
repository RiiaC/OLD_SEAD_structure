> [!info]+ This is an adaption of the information obtained while creating my [[strucke common names report.xlsx]], but taken into the full [[SEAD complete Taxa info.xlsx]] spreadsheet in the form of some new columns, and a filtered pivot table to report the results.

# the columns in this spreadsheet

| column                     | description                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------- |
| common_name                | the common name (if any) on file in SEAD for this species                                            |
| species                    | the name of the species, as recorded in SEAD                                                         |
| genus_name                 | the name of the genus for this species, as recorded in SEAD                                          |
| family_name                | the name of the family for this genus, as recorded in SEAD                                           |
| order_name                 | the name of the order for this family, as recorded in SEAD                                           |
| taxon_common_name_id       | the id number associated with the above common name                                                  |
| taxon_id                   | the id number associated with the above species                                                      |
| genus_id                   | the id number associated with the above genus                                                        |
| family_id                  | the id number associated with the above family                                                       |
| order_id                   | the id number associated with the above order                                                        |
| genus-family_miss-match    | the column in which I flag mistakes in the data, using the text "⚠  missmatch, replace family with:" |
| suggested_family_for_genus | the name of the family in which this genus actually belongs                                          |
| genus-order miss-match     | the URL for the GBIF database entry that supports the suggestion                                     |
| sugested_order_for_genus   | the name of the order in which this genus actually belongs                                           |
| source_for_suggestions     | the URL for the GBIF database entry that supports the suggestion                                     |
# the pivot table report
The pivot table was created by assembling the columns in the "Rows" PivotTable field, in the below order, and applying a filter to genus-family_miss-match to show everything that includes a  ⚠ .

| Rows                       |
| -------------------------- |
| order_name                 |
| order_id                   |
| genus-order miss-match     |
| sugested_order_for_genus   |
| family_name                |
| family_id                  |
| genus-family_miss-match    |
| suggested_family_for_genus |
| genus_name                 |
| genus_id                   |
| species                    |
| taxon_id                   |
| source_for_suggestions     |
| common_name                |
| taxon_common_name_id       |
