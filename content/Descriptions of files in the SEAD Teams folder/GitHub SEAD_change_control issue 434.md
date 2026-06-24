> [!info]+ This page is a duplicate of the information in the GitHub SEAD_change_control issue 434:
>  https://github.com/humlab-sead/sead_change_control/issues/434

### Data entry errors discovered in SEAD's taxon tables

In the course of working with the list of Strucke "species" (really common names) I discovered that somewhere along the line data entry errors have crept into SEAD's taxonmy, with a few genus/species being attached to the wrong family/order.

### A report has been compiled

see [Teams > SEAD > SEAD issues > Missmatches between SEAD species-genra and family-order.xlsx](https://umeauniversity.sharepoint.com/:x:/r/sites/SEAD72/Shared%20Documents/SEAD%20issues/Missmatches%20between%20SEAD%20species-genra%20and%20family-order.xlsx?d=wc10966ba6b994c7e99845d31aad0a018&csf=1&web=1&e=dxIHiy)  
for details.

There were only a handful of miss-matches between genus-family that had been flagged by the AI. I have checked these, and they are now entered into the report.

|genus_name|probably incorrect family_name|suggested family name for this genus|
|---|---|---|
|Acer|Acoraceae|Sapindaceae|
|Sambucus|Alismataceae|Viburnaceae|
|Viburnum|Alliaceae|Viburnaceae|
|Allium|Araliaceae|Amaryllidaceae|

If I encounter any other similar problems while working with the Strucke taxa lists, I will return to this and edit it further.
#### Report contents

For a description of the column names in that table, and how the pivot table should be read, see the documentation here: [[SEAD species-genus to  family-order miss-matches]]

### What needs to happen

1. Edit the marked genus entries in SEAD to re-assign them to the correct family based on the information in this report (Or, if it turns out that any of these marked genus-family matches are correct due to being official synonyms, then leave a note of that here and don't change anything in SEAD.)
2. Let me know when this happens, I would appreciate it if we know that these are correct before we ingest the Strucke data.
3. Longer term: Check all of the rest of the linkages between the various taxa levels to see if there are more errors than just the ones found in the course of working with the Strucke Data?