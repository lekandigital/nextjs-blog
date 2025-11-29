import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

// Create a custom H4 component that can include audio player
function createH4WithAudio(audioPlayerComponent) {
  const H4WithAudio = ({ children }) => {
    let slug = slugify(children)

    console.log('H4WithAudio rendered:', { children, hasAudio: !!audioPlayerComponent })

    return (
      <>
        <h4 id={slug}>
          <a href={`#${slug}`} className="anchor" />
          {children}
        </h4>
        {audioPlayerComponent}
      </>
    )
  }

  H4WithAudio.displayName = 'H4WithAudio'
  return H4WithAudio
}

// Create a custom IMG component that can include audio player after main image
function createMainImageWithAudio(audioPlayerComponent) {
  const ImgWithAudio = (props) => {
    const isMainImage = props.alt === 'Main image'

    console.log('ImgWithAudio rendered:', { alt: props.alt, isMainImage, hasAudio: !!audioPlayerComponent })

    if (isMainImage && audioPlayerComponent) {
      return (
        <>
          <img {...props} />
          {audioPlayerComponent}
        </>
      )
    }

    return <img {...props} />
  }

  ImgWithAudio.displayName = 'ImgWithAudio'
  return ImgWithAudio
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  img: (props) => <img {...props} />, // Add default img handler
  a: CustomLink,
  code: Code,
  Table,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
      }}
    />
  )
}

export { createH4WithAudio, createMainImageWithAudio }
