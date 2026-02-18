import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// component function
const FrontmatterPropertiesBox: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (!fileData?.frontmatter) return null

  const props = fileData.frontmatter
  const entries = Object.entries(props)

  if (entries.length === 0) return null


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
