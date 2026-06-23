> [!info]+ This page is a duplicate of the information in the GitHub SEAD_change_control issue 434:
>  https://github.com/humlab-sead/sead_change_control/issues/434

### Data entry errors discovered in SEAD's taxon tables

In the course of working with the list of Strucke "species" (really common names) I discovered that somewhere along the line data entry errors have crept into SEAD's taxonmy, with a few genus/species being attached to the wrong family/order.

### A report is being compiled

see [Teams > SEAD > SEAD issues > Missmatches between SEAD species-genra and family-order.xlsx](https://umeauniversity.sharepoint.com/:x:/r/sites/SEAD72/Shared%20Documents/SEAD%20issues/Missmatches%20between%20SEAD%20species-genra%20and%20family-order.xlsx?d=wc10966ba6b994c7e99845d31aad0a018&csf=1&web=1&e=dxIHiy)  
for details.

Note that as of the creation of this issue, I have not yet gone through all of the miss-matches between genus and family that were flagged as a result of compiling the report of the Strucke data common names. However, as I work through that list the above linked report spreadsheet will be updated, and will likely be complete before anyone returns from vacation and has time to solve this issue.

#### Report contents

For a description of the column names in that table, and how the pivot table should be read, see the documentation here: [[SEAD species-genus to  family-order miss-matches]]

### What needs to happen

1. Edit the marked genus entries in SEAD to re-assign them to the correct family based on the information in this report.
2. Longer term: Check all of the rest of the linkages between the various taxa levels to see if there are more errors than just the ones found in the course of working with the Strucke Data.