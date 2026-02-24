---
Entity_Name: site
Type: "[[content/Example dataset mapping/Strucke Data mapping/Entity datasheet|Entity datasheet]]"
Public_ID: "[[site_id]]"
SEAD_table: "[[tbl_sites]]"
publish: publish
status: needs creating
---
> [!to do] The relevant columns for this dataset relating to site and location include
> **- By/Gård** = [[site_name]]  (or perhaps put in [[location]]?)
> - **Socken** + **- RAÄ-nr** = [[site_name]] (or could be part of [[national_site_identifier]] in addition to Lämningsummer)
> **- Fornlämningstyp** = [[site_description]]
> - **Lämningsnummer** = [[national_site_identifier]]

> 
> The final version of the file will also have two columns for koordinater (WGS 84), which will be the equivalent to:
> -  [[latitude_dd]] 
> - [[longitude_dd]]


![[Entity site schema.png]]