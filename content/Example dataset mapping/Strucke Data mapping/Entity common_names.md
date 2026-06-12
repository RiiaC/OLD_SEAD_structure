---
Entity_Name: common_names
Type: CSV file
Public_ID: "[[taxon_common_name_id]]"
Target_Entity:
Local_Keys:
  - 
  - 
  - 
Remote_Keys:
SEAD_table: "[[tbl_taxa_common_names]]"
status: needs creating
---
> [!info] The "species" column of the Strucke data usually contains the Swedish word for the material dated, which is often a name of a plant or animal. 
> Therefore, this information needs to be mapped to SEAD's list of common names for plants or animals, which, in turn, is linked via `taxon_id` to the corresponding order/family/genus/species name for the plant or animal (to whichever level is appropriate based on the common name)
> 
> Therefore, a necessary part of the mapping process is to: 
> 1. Create a complete list of all of the common names of plants and animals used in this dataset
> 2. Determine the corresponding order/family/genus/species name, as appropriate
> 3. For each of these that is already present in SEAD, determine the corresponding `taxon_id`, `genus_id`, `family_id`, and `taxonomic_order_id`

# First try, mapping "species" to SEAD's `tbl_taxa_common_names` etc.
I prepared a quick first draft of a list of the terms in the "species" column thusly:
1. Use Excel's pivot table function to determine the count of each unique string in the `species` column. The table of the ten most popular is recorded here: [[2026-06-10 Wednesday#Species distribution in the Strucke data]]
2. copy the `species` column to a blank spreadsheet
	1. remove duplicates *(29742 duplicates deleted, 560 unique values remain)*
	2. use Excel's text to columns function to break the text to a new column at every slash: / 
	   *(and move the extra column thus created to the other side of the main column, so it won't be over written in the next step)*
	3. break the text to a new column at every parentheses start: (
	    *(and move the extra column thus created to the other side of the main column, so it won't be over written in the next step)*
	4. break the text to a new column at every question mark: ?
	    *(and move the extra column thus created to the other side of the main column, so it won't be over written in the next step. Note: most question marks do not have subsequent text, and show only uncertainty in the data)*
	5. break the text into multiple columns at every comma: ,
	   *(due to time constraints, I then ignored all of the additional columns thus created, and just worked with what was left in the starting column, so as to create a list to work with as quickly as possible)*
	6. remove duplicates again (29932 duplicates deleted, 372 unique values remain), and sort the list alphabetically
	7. skim quickly through the list, deleting:
		1. obvious duplicate terms with a slightly different spelling 
		2. species terms that are already in Latin instead of Swedish
		3. terms that are not species at all (e.g. numbers, (SOL)
3. Send the resulting, partially cleaned, list as a csv file to Johan to be further processed with AI. on a machine with a local copy of SEAD database that the AI can access. Johan used as the prompt for the first attempt:
> I need you to read list.csv and construe/infer the species from each line/string. These are all swedish words and terms for things where there often will be species in the word in one way or another. For example "Aborrskinn" should be inferred to refer to "Aborre" which is a fish (bass). Your job is to infer the species and then figure out: 
> 1. What the swedish common name for it is. 
> 2. what the latin name for it is. Try to figure out the Species, Genus, Family, Order. Some things will be specifiable to a higher degree than other, and some not at all. 
> I want you to write down your findings in a file called output.csv. I also want you to try and match the common names to the common names in the database (tbl_taxa_common_names) . And then also try to match all the latin  names forr species, genus and family. The tables in the database for these are: 
> - tbl_taxa_tree_master (species), 
> - tbl_taxa_tree_families, 
> - tbl_taxa_tree_order 
> So in the output, I want these columns: 
> 1. Original term 
> 2. Common name (inferred) 
> 3. Species 
> 4. Genus 
> 5. Family 
> 6. Common name match 
> 7. Species match 
> 8. Genus match 
> 9. Family match 
> 10. Order match 
> Be meticulous about this task and don't stop until all words are done

Johan shared the result of that first attempt with me. We discussed it, and AI was re-set the task, but this time to include the corresponding SEAD id numbers for each of the taxon/species/etc levels for each of these that already exists in the database. The revised version ran overnight, and got stuck in the process whilst unattended, so it was re-run with OpenAI to create a the document **Strucke-species-openai-output 1.csv**.
# processing the results
I then created a **strucke common names report.xls** and copied over, one row at a time, the information from the AI output file next to the corresponding information from the original file:

| column name            | description                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| probably not a species | The terms that appear in the species list that probably belong in another column, as they do not appear to be species names.                                                                                                                                                                                                                       |
| Latin                  | If the term in the species column was already in latin, I moved it here. If it appears to match a common name that is also used, it gets put into the same row as the common name. If the latin term was not included in the input file given to AI it is in red text here, so as to mark which ones still need to be checked for presence in SEAD |
| English common name    | An English translation of the original term (Phil suggested that if we are going to the bother of adding new common names, we could also add the English equivalent)                                                                                                                                                                               |
| original term          | The term, as it appeared in the species list. In cases where there is a list of terms in a single cell (separated by a comma or a slash) they have been broken into one row for each term in the list                                                                                                                                              |
| similar spellings      | Some terms used appear to be misspellings of others in the list. In these cases, they have been consolidated to a single row                                                                                                                                                                                                                       |
| suggested form         | If a term was a compound word, only one of which was a species, that species common name is listed here. Since SEAD's common names seem to be recorded in lower case, the lower case version of the term is listed here. *Do we wish to edit the term to this version?*                                                                            |
| SEAD common name       | If this term, or a reasonable variant thereof, already exists in SEAD's `tbl_taxa_common_names, it is recorded here                                                                                                                                                                                                                                |
| taxon_common_name_id   | If this term, or a reasonable variant thereof, already exists in SEAD's `tbl_taxa_common_names`, its corresponding `taxon_common_name_id` is recorded here                                                                                                                                                                                         |
| species                | The species name as suggested by AI, in black text if this species name already exists in SEAD, and in red if it does not.                                                                                                                                                                                                                         |
| taxon_id  <br>         | The SEAD `taxon_id` corresponding to the above species                                                                                                                                                                                                                                                                                             |
| genus                  | The genus name as suggested by AI, in black text if this species name already exists in SEAD, and in red if it does not.                                                                                                                                                                                                                           |
| genus_id               | If this term, or a reasonable variant thereof, already exists in SEAD's `tbl_taxa_tree_genera`, its corresponding `genus_id` is recorded here                                                                                                                                                                                                      |
| family                 | The family name as suggested by AI, in black text if this species name already exists in SEAD, and in red if it does not.                                                                                                                                                                                                                          |
| family_id              | If this term, or a reasonable variant thereof, already exists in SEAD's `tbl_taxa_tree_families`, its corresponding `family_id` is recorded here                                                                                                                                                                                                   |
| order                  | The order name as suggested by AI, in black text if this species name already exists in SEAD, and in red if it does not.                                                                                                                                                                                                                           |
| taxonomic_order_id     | If this term, or a reasonable variant thereof, already exists in SEAD's `tbl_taxa_tree_orders`, its corresponding `order_id` is recorded here                                                                                                                                                                                                      |





