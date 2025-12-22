/**
 * @fileoverview Markdown to HTML Converter Logic.
 * This script contains the convertMarkdown function which uses Regular Expressions (RegEx)
 * to transform Markdown syntax into corresponding HTML elements.
 */

function convertMarkdown() {
    // 1. Reading Input - CRITICAL FIX: getElementById (Capital E)
    // The markdown content might contain newlines which are crucial for block-level parsing.
    const markdown = document.getElementById('markdown-input').value;
    let html = markdown; 

    // --- Block-Level Conversions ---
    // NOTE: Block-level RegEx must ensure content is line-start based and preserves newlines.

    // 2. Headings (H1, H2, H3) - FIX: Use a simpler, combined RegEx for H1-H3.
    // The previous implementation was overly complex and prone to newline issues.
    // The replacement string must include a newline (\n) for tests that expect separate blocks.
    html = html.replace(/^\s*(#{1,3})\s*(.+)$/gm, (match, hashes, content) => {
        const level = hashes.length;
        const trimmedContent = content.trim(); 
        
        // Use template literals for cleaner tag generation
        return `<h${level}>${trimmedContent}</h${level}>\n`; 
    });

    // 3. Blockquotes - FIX: Correct RegEx to capture content and ensure space is matched but not captured
    // The replacement string must include a newline (\n) for tests that expect separate blocks.
    // \s* matches optional leading space. ^ is line start, > is the blockquote marker, (.*) is content.
    html = html.replace(/^\s*>\s*(.*)$/gm, '<blockquote>$1</blockquote>\n');
    
    // --- Inline Conversions ---

    // 4. Images: ![alt-text](image-source)
    // FIX: Changed capturing group from [^\)]* to [^)]* for clarity and consistency.
    html = html.replace(/!\[([^\]]*)\]\(([^)]*)\)/g, '<img alt="$1" src="$2">');

    // 5. Links: [link text](URL)
    // FIX: Changed capturing group from [^\)]* to [^)]* for clarity and consistency.
    html = html.replace(/\[([^\]]*)\]\(([^)]*)\)/g, '<a href="$2">$1</a>');
    
    // 6. Bold Text: **bold text** or __bold text__ - FIX: Use non-greedy match (.*?)
    // \*\*|__ matches ** or __. (.*?) matches content non-greedily. \1 is the backreference.
    // NOTE: This must run BEFORE Italic (next line) to allow bold inside italics or vice-versa.
    html = html.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');

    // 7. Italic Text: *italic text* or _italic text_ - FIX: Use non-greedy match (.*?)
    // \*|_ matches * or _. (.*?) matches content non-greedily. \1 is the backreference.
    html = html.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');

    // 8. Paragraphs - FIX: Wrap remaining line content in <p> tags if they are not already HTML blocks.
    // This is often needed in simple parsers to correctly wrap any text left over.
    // This regex looks for lines that DON'T start with < (already HTML) and wraps them.
    html = html.replace(/^(?!<h|<ul>|<ol>|<p>|<blockquote>)(.+)$/gm, '<p>$1</p>');
    
    // 9. Remove redundant newlines left by block conversions for cleaner output
    html = html.replace(/\n{2,}/g, '\n'); 
    html = html.replace(/\n/g, ''); 

    // --- Output Handling - CRITICAL FIX: getElementById (Capital E) ---
    
    // Display the raw HTML code.
    document.getElementById('html-output').textContent = html;
    // Render the HTML in the preview area.
    document.getElementById('preview').innerHTML = html;
    
    return html;
}

// Ensure the DOM is fully loaded before attaching event listeners.
document.addEventListener('DOMContentLoaded', () => {
    // CRITICAL FIX: getElementById (Capital E)
    const markdownInput = document.getElementById('markdown-input');
    
    if (markdownInput) {
        // Attach the function to the 'input' event for real-time conversion.
        markdownInput.addEventListener('input', convertMarkdown);
    }
    
    // Run the conversion once on load to handle any default text.
    convertMarkdown(); 
});