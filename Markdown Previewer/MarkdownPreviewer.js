const markdownInput = document.getElementById("markdownInput");
const previewContent = document.getElementById("previewContent");

function updatePreview() {
  const markdownText = markdownInput.value;
  previewContent.innerHTML = marked.parse(markdownText);
}

markdownInput.addEventListener("input", updatePreview);

// Initialize with some example markdown
markdownInput.value = `# Welcome to Markdown Previewer

Type your **markdown** here and see the preview!

## Features
- Live preview
- Supports **bold**, *italic*, lists, headers, links
- Easy to use

\`\`\`javascript
console.log("Hello World!");
\`\`\`

> This is a blockquote
`;

updatePreview();
