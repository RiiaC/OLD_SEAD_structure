import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// component function
const FrontmatterPropertiesBox: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (!fileData?.frontmatter) return null

  const props = fileData.frontmatter
  const entries = Object.entries(props)

  if (entries.length === 0) return null

  // Helper provided by AI intended to turn [[Link]] into a clickable string or link
  const renderValue = (val: any) => {
    if (Array.isArray(val)) {
      return val.map(v => renderValue(v)).reduce((prev, curr) => [prev, ", ", curr])
    }
    
    const strVal = String(val)
    // Check for [[Wikilink]] format
    const wikiMatch = strVal.match(/^\[\[(.*?)\]\]$/)
    if (wikiMatch) {
      const linkText = wikiMatch[1]
      // Quartz uses lowercase hyphenated slugs for URLs
      const url = "/" + linkText.toLowerCase().replace(/\s+/g, "-")
      return <a href={url}>{linkText}</a>
    }
    
    return strVal
  }
  // end of the AI Helper code to  to turn [[Link]] into a clickable string or link

  return (
    <div class="frontmatter-box">
      <h3>Properties</h3>
      <ul>
        {entries.map(([key, value]) => (
          <li><strong>{key}:</strong> {String(value)}</li>
        ))}
      </ul>
    </div>
  )
}

// export correctly
export default (() => FrontmatterPropertiesBox) satisfies QuartzComponentConstructor
