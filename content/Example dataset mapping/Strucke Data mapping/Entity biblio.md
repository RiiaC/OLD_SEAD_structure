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

- [ ] create the site_reference entity and do the joins


![[Entity biblio schema.png]]