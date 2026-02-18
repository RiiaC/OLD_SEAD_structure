import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// component function
const FrontmatterPropertiesBox: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (!fileData?.frontmatter) return null

  const props = fileData.frontmatter
  const entries = Object.entries(props)

  if (entries.length === 0) return null

  // Helper provided by AI intended to turn [[Link]] into a clickable string or link
// Simplest possible helper:
// Converts a value like [[Page Name]] → <a href="/page-name">Page Name</a>
// Only works if the entire value is EXACTLY [[...]]
const renderValue = (val: any) => {
  const str = String(val).trim()

  // Match exactly [[something]]
  const match = str.match(/^\[\[(.+?)\]\]$/)
  if (!match) {
    // Not a single wikilink → return plain text
    return str
  }

  const linkText = match[1]               // The part inside [[ ... ]]
  const slug = linkText
    .toLowerCase()
    .replace(/\s+/g, "-")                // spaces → hyphens
    .replace(/[^\w-]/g, "")              // remove punctuation

  const href = "/" + slug

  return <a href={href}>{linkText}</a>
}
  // end of the AI Helper code to  to turn [[Link]] into a clickable string or link

  return (
    <div class="frontmatter-box">
      <h3>Properties</h3>
      <ul>
        {entries.map(([key, value]) => (
		// Part two of the above AI-provided helper for making clickable links in properties
		//replace the below <li><strong>{key}:</strong> {String(value)}</li>
		// with <li><strong>{key}:</strong> {renderValue(value)}</li>
          <li><strong>{key}:</strong> {renderValue(value)}</li>
        ))}
      </ul>
    </div>
  )
}

// export correctly
export default (() => FrontmatterPropertiesBox) satisfies QuartzComponentConstructor
