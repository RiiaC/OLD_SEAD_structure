import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// component function
const FrontmatterPropertiesBox: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (!fileData?.frontmatter) return null

  const props = fileData.frontmatter
  const entries = Object.entries(props)

  if (entries.length === 0) return null

  // Helper provided by AI intended to turn [[Link]] into a clickable string or link
// Renders a value that may contain Obsidian-style wikilinks [[Page]], [[Folder/Page]],
// [[Page|Alias]], [[Page#Heading]], [[Folder/Page#Heading]].
// - If the *entire* value is a single wikilink, render it as a link.
// - If it's an array, render comma-separated links/strings.
// - If it's plain text or doesn't match wikilink format, render as text.
const renderValue = (val: unknown): React.ReactNode => {
  // Arrays: render comma-separated
  if (Array.isArray(val)) {
    if (val.length === 0) return null
    const parts = val.map((v, i) => <span key={i}>{renderValue(v)}</span>)
    // intersperse ", "
    return parts.reduce((prev, curr, i) => (i === 0 ? curr : <>{prev}{", "}{curr}</>))
  }

  const strVal = String(val)

  // Match a *single* wikilink if the entire value is in [[...]]
  // Captures: target (e.g. Folder/Page), optional #heading, optional |alias
  // Examples:
  //   [[Page]]
  //   [[Folder/Page]]
  //   [[Page#Heading]]
  //   [[Page|Alias]]
  //   [[Folder/Page#Heading|Alias]]
  const m = strVal.match(/^\[\[([^|\]]+)(?:#([^|\]]+))?(?:\|([^\]]+))?\]\]$/)
  if (!m) {
    // Not a pure single wikilink: just return plain text
    // (If you want to detect and convert inline links within text too, see C) below.)
    return strVal
  }

  const target = m[1]            // e.g. "Folder/Page" or "Page"
  const heading = m[2] || ""      // e.g. "Heading"
  const alias = m[3] || ""        // e.g. "Alias"

  // Build path:
  // - Preserve folder structure in the URL.
  // - Replace spaces with dashes per your site’s convention (adjust as needed).
  // - Lowercase or keep case depending on your Quartz config.
  // If your site uses a slugify util, use that instead of this simplistic transform.
  const slugify = (s: string) =>
    s
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[()'"]/g, "") // drop some punctuation that often breaks URLs
      .toLowerCase()

  const parts = target.split("/").map(slugify)
  const basePath = "/" + parts.join("/")

  const hash = heading ? "#" + slugify(heading) : ""
  const href = basePath + hash
  const label = alias || target + (heading ? `#${heading}` : "")

  return <a href={href}>{label}</a>
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
