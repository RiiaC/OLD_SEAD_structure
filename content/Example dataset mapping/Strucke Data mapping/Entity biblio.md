---
Entity_Name: biblio
Type: "[[content/Example dataset mapping/Strucke Data mapping/Entity datasheet|Entity datasheet]]"
Public_ID: "[[biblio_id]]"
SEAD_table: "[[tbl_biblio]]"
publish: publish
status: needs creating
---
> [!to do] The relevant columns for this dataset relating to publications for each sample are
> - Författare = [[authors]]
> - Tryckår = [[year]]
> - Titel = [[title]]
> - Tidskrift =  (no SEAD equivalent, but can be added to [[full_reference]])
> - Förlagsort =  (no SEAD equivalent, but can be added to [[full_reference]])
> To make [[full_reference]] combine all of the above

one possible approach to test:
````
SELECT

    Författare || '. ' || Tryckår || '. ' || Title || '. ' || Tidskrift || '. ' || Förlagsort || '. '

        AS full_reference

FROM incoming_data;
`````


![[Entity biblio schema.png]]