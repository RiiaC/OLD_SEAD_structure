---
Entity_Name: biblio
Type: "[[content/Example dataset mapping/Strucke Data mapping/Entity datasheet|Entity datasheet]]"
Public_ID: "[[biblio_id]]"
SEAD_table: "[[tbl_biblio]]"
publish: publish
status: in progress
---
> [!to do] The relevant columns for this dataset relating to publications for each sample are
> - Författare = [[authors]]
> - Tryckår = [[year]]
> - Titel = [[title]]
> - Tidskrift =  (no SEAD equivalent, but can be added to [[full_reference]])
> - Förlagsort =  (no SEAD equivalent, but can be added to [[full_reference]])
> To make [[full_reference]] combine all of the above using the Extra Columns tab, and the expression "{author} {publication_year} {titel} {tidskrift} {publicaiton_city}" (or whatever the column names turn out to be)

- [x] create a data-derived (from [[content/Example dataset mapping/Strucke Data mapping/Entity datasheet|Entity datasheet]]) entity **biblio**, with **biblio_id**
- [x] in the Basic tab choose as Columns: **forfattare, tryckar, forlagsort, tidskrift, titel**
- [x] add an Extra Column called **full_reference** using {forfattare} {tryckar} {titel} {tidskrift} {forlagsort}
- [x] drop duplicates based on the **full_reference**

````
name: biblio
type: entity
system_id: system_id
keys: []
columns:
  - forfattare
  - tryckar
  - forlagsort
  - tidskrift
  - titel
public_id: biblio_id
source: datasheet
drop_duplicates:
  - full_reference
check_functional_dependency: false
extra_columns:
  full_reference: '{forfattare} {tryckar} {titel} {tidskrift} {forlagsort}'
`````

- [ ] create the [[content/Example dataset mapping/Strucke Data mapping/Entity site_references|Entity site_references]] and do the joins



![[Entity biblio schema.png]]