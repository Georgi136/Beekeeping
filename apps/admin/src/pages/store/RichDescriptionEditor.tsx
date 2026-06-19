import { useEffect, useRef, useState } from 'react'

interface RichDescriptionEditorProps {
  value: string
  onChange: (value: string) => void
  onUploadImage: (file: File) => Promise<string>
}

const textColors = ['#1f2933', '#7a4f01', '#166534', '#1d4ed8', '#b91c1c']

export default function RichDescriptionEditor({ value, onChange, onUploadImage }: RichDescriptionEditorProps) {
  const editorRef = useRef<HTMLDivElement | null>(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value
    }
  }, [value])

  function syncValue() {
    onChange(editorRef.current?.innerHTML || '')
  }

  function focusEditor() {
    editorRef.current?.focus()
  }

  function runCommand(command: string, argument?: string) {
    focusEditor()
    document.execCommand(command, false, argument)
    syncValue()
  }

  function createLink() {
    const url = window.prompt('URL address')
    if (!url) return
    runCommand('createLink', url)
  }

  async function uploadInlineImage(file: File | undefined) {
    if (!file) return
    setUploading(true)
    try {
      const url = await onUploadImage(file)
      runCommand('insertHTML', `<p><img src="${url}" alt="" /></p>`)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="rich-description word-editor">
      <div className="word-toolbar" aria-label="Product description formatting">
        <div className="word-toolbar-group">
          <button type="button" title="Undo" onClick={() => runCommand('undo')}>↶</button>
          <button type="button" title="Redo" onClick={() => runCommand('redo')}>↷</button>
        </div>

        <div className="word-toolbar-group">
          <select aria-label="Text style" defaultValue="p" onChange={(event) => runCommand('formatBlock', event.target.value)}>
            <option value="p">Normal text</option>
            <option value="h3">Heading</option>
            <option value="h4">Subheading</option>
            <option value="blockquote">Quote</option>
          </select>
        </div>

        <div className="word-toolbar-group">
          <button type="button" title="Bold" className="format-bold" onClick={() => runCommand('bold')}>B</button>
          <button type="button" title="Italic" className="format-italic" onClick={() => runCommand('italic')}>I</button>
          <button type="button" title="Underline" className="format-underline" onClick={() => runCommand('underline')}>U</button>
          <button type="button" title="Strikethrough" className="format-strike" onClick={() => runCommand('strikeThrough')}>S</button>
        </div>

        <div className="word-toolbar-group">
          <button type="button" title="Align left" onClick={() => runCommand('justifyLeft')}>☰</button>
          <button type="button" title="Align center" onClick={() => runCommand('justifyCenter')}>≡</button>
          <button type="button" title="Align right" onClick={() => runCommand('justifyRight')}>☷</button>
          <button type="button" title="Justify" onClick={() => runCommand('justifyFull')}>▤</button>
        </div>

        <div className="word-toolbar-group">
          <button type="button" title="Bullet list" onClick={() => runCommand('insertUnorderedList')}>• List</button>
          <button type="button" title="Numbered list" onClick={() => runCommand('insertOrderedList')}>1. List</button>
          <button type="button" title="Decrease indent" onClick={() => runCommand('outdent')}>‹</button>
          <button type="button" title="Increase indent" onClick={() => runCommand('indent')}>›</button>
        </div>

        <div className="word-toolbar-group color-group" aria-label="Text color">
          {textColors.map((color) => (
            <button
              type="button"
              key={color}
              title={`Text color ${color}`}
              className="color-swatch"
              style={{ backgroundColor: color }}
              onClick={() => runCommand('foreColor', color)}
            />
          ))}
        </div>

        <div className="word-toolbar-group">
          <button type="button" onClick={createLink}>Link</button>
          <button type="button" onClick={() => runCommand('unlink')}>Unlink</button>
          <label className="word-upload-button">
            {uploading ? 'Uploading...' : 'Image'}
            <input type="file" accept="image/*" disabled={uploading} onChange={(event) => { uploadInlineImage(event.target.files?.[0]); event.target.value = '' }} />
          </label>
          <button type="button" onClick={() => runCommand('removeFormat')}>Clear</button>
        </div>
      </div>

      <div className="word-page-wrap">
        <div
          ref={editorRef}
          className="word-page"
          contentEditable
          onInput={syncValue}
          onBlur={syncValue}
          role="textbox"
          aria-label="Product description"
          data-placeholder="Write the product description here..."
        />
      </div>

      <details className="rich-preview">
        <summary>Preview</summary>
        <div className="rich-preview-body" dangerouslySetInnerHTML={{ __html: value }} />
      </details>

      <style>{`
        .word-editor {
          display: grid;
          gap: 10px;
        }

        .word-toolbar {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          align-items: center;
          padding: 8px;
          border: 1px solid #d8ded3;
          border-radius: 8px 8px 0 0;
          background: linear-gradient(#fbfcfa, #eef3eb);
          box-shadow: inset 0 -1px 0 rgba(31, 41, 51, 0.06);
        }

        .word-toolbar-group {
          display: inline-flex;
          gap: 4px;
          align-items: center;
          padding-right: 8px;
          border-right: 1px solid #d7dfd1;
        }

        .word-toolbar-group:last-child {
          border-right: 0;
          padding-right: 0;
        }

        .word-toolbar button,
        .word-toolbar select,
        .word-upload-button {
          min-height: 32px;
          border: 1px solid #c9d4c2;
          border-radius: 5px;
          background: #fff;
          color: #1f2933;
          font: inherit;
          font-size: 0.86rem;
          cursor: pointer;
        }

        .word-toolbar button,
        .word-upload-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 32px;
          padding: 5px 8px;
        }

        .word-toolbar select {
          width: 140px;
          padding: 5px 8px;
        }

        .word-toolbar button:hover,
        .word-upload-button:hover {
          background: #f8faf6;
          border-color: #a6b98f;
        }

        .format-bold {
          font-weight: 800;
        }

        .format-italic {
          font-style: italic;
        }

        .format-underline {
          text-decoration: underline;
        }

        .format-strike {
          text-decoration: line-through;
        }

        .color-group {
          gap: 5px;
        }

        .color-swatch {
          min-width: 24px !important;
          width: 24px;
          height: 24px;
          padding: 0 !important;
          border-radius: 50% !important;
        }

        .word-upload-button {
          position: relative;
          overflow: hidden;
        }

        .word-upload-button input {
          display: none;
        }

        .word-page-wrap {
          padding: 18px;
          border: 1px solid #d8ded3;
          border-top: 0;
          border-radius: 0 0 8px 8px;
          background: #eef1ea;
        }

        .word-page {
          min-height: 300px;
          max-width: 760px;
          padding: 28px;
          border: 1px solid #d2d7ce;
          border-radius: 3px;
          background: #fff;
          color: #1f2933;
          line-height: 1.65;
          outline: none;
          box-shadow: 0 10px 24px rgba(31, 41, 51, 0.10);
        }

        .word-page:focus {
          border-color: #9bb37f;
        }

        .word-page:empty::before {
          content: attr(data-placeholder);
          color: #9aa4ad;
        }

        .word-page p,
        .rich-preview-body p {
          margin: 0 0 12px;
        }

        .word-page h3,
        .rich-preview-body h3 {
          margin: 0 0 12px;
          font-size: 1.35rem;
          line-height: 1.3;
        }

        .word-page h4,
        .rich-preview-body h4 {
          margin: 0 0 10px;
          font-size: 1.12rem;
          line-height: 1.35;
        }

        .word-page ul,
        .word-page ol,
        .rich-preview-body ul,
        .rich-preview-body ol {
          margin: 0 0 12px;
          padding-left: 1.35rem;
        }

        .word-page img,
        .rich-preview-body img {
          display: block;
          width: min(100%, 560px);
          height: auto;
          margin: 14px 0;
          border-radius: 6px;
        }

        .word-page blockquote,
        .rich-preview-body blockquote {
          margin: 10px 0 14px;
          padding: 10px 14px;
          border-left: 4px solid #d6b25e;
          background: #fff8e7;
        }

        .rich-preview {
          font-size: 0.92rem;
          color: #4b5563;
        }

        .rich-preview-body {
          margin-top: 8px;
          padding: 14px;
          border: 1px solid #edf0ea;
          border-radius: 6px;
          background: #fbfcfa;
        }

        @media (max-width: 760px) {
          .word-toolbar {
            align-items: stretch;
          }

          .word-toolbar-group {
            border-right: 0;
            padding-right: 0;
          }

          .word-page-wrap {
            padding: 10px;
          }

          .word-page {
            min-height: 240px;
            padding: 18px;
          }
        }
      `}</style>
    </div>
  )
}
