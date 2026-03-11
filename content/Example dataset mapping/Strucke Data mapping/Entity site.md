---
Entity_Name: site
Type: "[[content/Example dataset mapping/Strucke Data mapping/Entity datasheet|Entity datasheet]]"
Public_ID: "[[site_id]]"
SEAD_table: "[[tbl_sites]]"
publish: publish
status: in progress
---
> [!to do] The relevant columns for this dataset relating to site and location include
> **- By/Gård** = [[site_name]]  
> - **Socken** + **- RAÄ-nr** =  [[tbl_site_properties]] (where [[tbl_property_type]] = RAÄ nummer)
> **- Fornlämningstyp** = [[site_description]]
> - **Lämningsnummer** = [[national_site_identifier]]
> - **Uppdragsnummer** =  [[tbl_site_properties]] (where [[tbl_property_type]] = RAÄ nummer)
> 
> The final version of the file will also have two columns for koordinater (WGS 84), which will be the equivalent to:
> -  [[latitude_dd]] 
> - [[longitude_dd]]


![[Entity site schema.png]]